<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h4 font-weight-bold">
        Penentuan Model
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="dataset"
        :loading="isLoading"
        :disable-filtering="true"
        :disable-sort="true"
        :disable-pagination="true"
        :hide-default-footer="true"
        v-scroll-x
      ></v-data-table>
      <v-row class="mx-4">
        <v-col cols="4" sm="3">
          <v-select
            v-model="pageSize"
            :items="pageSizes"
            label="Items per Page"
            @change="handlePageSizeChange"
            :disabled="isSelectDisabled"
          ></v-select>
        </v-col>

        <v-col cols="12" sm="9">
          <v-pagination
            v-model="page"
            :length="totalPages"
            total-visible="10"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="handlePageChange"
            :disabled="isPaginationDisabled"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-card>

  </v-container>
</template>
<script>
import URL_BACKEND from '../pkg/constant';

export default {
  name: 'Feature',
  data: () => ({
    headers: [],
    dataset: [],
    isLoading: false,
    page: 0,
    totalPages: 0,
    pageSize: 20,
    pageSizes: [5, 10, 20, 50, 100],
    isSelectDisabled: false,
    isPaginationDisabled: false,
  }),
  methods: {
    async fetchData(page, limit) {
      const getData = {
        crossDomain: true,
        withCredentials: true,
        method: 'get',
        url: `${URL_BACKEND.URL_BACKEND}/feature_extraction?page=${page}&limit=${limit}`,
      };
      await this.axios(getData).then((resp) => {
        const head = [];
        resp.data.header.forEach((element) => {
          head.push({ value: element, text: element });
        });
        this.headers = head;
        this.dataset = resp.data.rows;
        this.page = page;
        this.limit = limit;
        this.totalPages = resp.data.total_pages;
      }).catch((error) => {
        this.$swal.fire({
          icon: 'error',
          title: 'Error Get Data',
          info: error,
        });
      });
    },
    async handlePageSizeChange() {
      await this.fetchData(this.page, this.pageSize);
    },
    async handlePageChange(value) {
      this.page = value;
      await this.fetchData(this.page, this.pageSize);
    },
  },
  mounted() {
    this.fetchData(1, 20);
  },
};
</script>
