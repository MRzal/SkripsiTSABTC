<template>
  <div>
    <v-card class="text-h4 font-weight-bold">
      <v-card-title>Upload Dataset</v-card-title>
      <v-container>
        <v-row class="d-flex align-content-center">
          <v-file-input v-model="file" truncate-length="45" type="file">
          </v-file-input>
          <v-btn
            color="blue-grey"
            class="ma-2 white--text"
            @click="uploadData()"
          >
            Upload
          </v-btn>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="my-4">
        <v-card-title class="text-h4 font-weight-bold">
          Dataset Bitcoin ( BTC - USD )
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="dataset"
          :loading="isLoading"
          :disable-filtering="true"
          :disable-sort="true"
          :disable-pagination="true"
          :hide-default-footer="true"
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
  </div>
</template>
<script>
import URL_BACKEND from '../pkg/constant';

export default {
  name: 'Dataset',
  data: () => ({
    file: null,
    headers: [],
    dataset: [],
    isLoading: false,
    page: 0,
    totalPages: 0,
    pageSize: 3,
    pageSizes: [5, 10, 20, 50],
    isSelectDisabled: true,
    isPaginationDisabled: true,
  }),
  methods: {
    async uploadData() {
      const form = new FormData();
      form.append('uploaded-file', this.file);

      const config = {
        withCredentials: true,
        method: 'POST',
        url: `${URL_BACKEND.URL_BACKEND}/upload`,
        data: form,
      };
      await this.axios(config).then(async (response) => {
        if (response.status === 200) {
          this.$swal.fire({
            icon: 'success',
            title: 'Success upload dataset',
          });
          this.pageSize = 20;
          this.file = null;
          this.isSelectDisabled = false;
          this.isPaginationDisabled = false;
          await this.fetchData(1, 20);
        }
      }).catch();
    },
    async fetchData(page, limit) {
      const getData = {
        crossDomain: true,
        withCredentials: true,
        method: 'get',
        url: `${URL_BACKEND.URL_BACKEND}/show_data?page=${page}&limit=${limit}`,
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
};
</script>
