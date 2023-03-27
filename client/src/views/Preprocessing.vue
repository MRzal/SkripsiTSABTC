<template>
  <v-card>
    <div class="py-4">
      <v-card-title class="text-h4 font-weight-bold">
        Preprocessing Data
      </v-card-title>
      <v-tabs
      v-model="tab"
        background-color="#013A63"
        grow
        dark
      >
        <v-tab
          v-for="item in items"
          :key="item.text"
          :target="'#'+item.href"
          lazy @change="changeTabs(item)"
        >
          {{ item.text }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="num in 2"
          :key="items[num-1].text"
        >
          <v-card
            flat
          >
            <v-card-text>{{ items[num-1].description }}</v-card-text>
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
                    ></v-pagination>
                </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item
        :key="items[items.length-1].text"
        >
          <v-card
          flat
          >
            <v-card-text>{{ items[items.length-1].description }}</v-card-text>
            <v-img class="my-3" :src="imageUrl">

            </v-img>

          </v-card>

        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-card>
</template>

<script>
import URL_BACKEND from '../pkg/constant';

export default {
  name: 'Preprocessing',
  data: () => ({
    imageUrl: '',
    tab: null,
    items: [
      {
        description: 'imputasi data adalah',
        text: 'Imputasi Data',
        href: 'imputasi_data',
        endpoint: 'fill_missing',
      },
      {
        description: 'time resample adalah',
        text: 'Time Resample',
        href: 'time_resample',
        endpoint: 'time_resampling',
      },
      {
        description: 'plotting data adalah',
        text: 'Plotting Data',
        href: 'plotting_data',
        endpoint: 'plot_data',
      },
    ],
    headers: [],
    dataset: [],
    isLoading: false,
    page: 0,
    totalPages: 0,
    pageSize: 5,
    pageSizes: [5, 10, 20, 50, 100],
  }),
  methods: {
    async fetchDataTable(page, limit, endpoint) {
      const getData = {
        crossDomain: true,
        withCredentials: true,
        method: 'get',
        url: `${URL_BACKEND.URL_BACKEND}/${endpoint}?page=${page}&limit=${limit}`,
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
    async fetchImage(endpoint) {
      const getData = {
        crossDomain: true,
        withCredentials: true,
        method: 'get',
        url: `${URL_BACKEND.URL_BACKEND}/${endpoint}`,
      };
      await this.axios(getData).then((resp) => {
        this.imageUrl = resp.data.Grafik;
      }).catch((error) => {
        this.$swal.fire({
          icon: 'error',
          title: 'Error Get Data',
          info: error,
        });
      });
    },
    async handlePageSizeChange() {
      await this.fetchDataTable(this.page, this.pageSize);
    },
    async handlePageChange(value) {
      this.page = value;
      await this.fetchDataTable(this.page, this.pageSize);
    },
    async changeTabs(value) {
      switch (value.href) {
        case 'imputasi_data':
          await this.fetchDataTable(1, 20, value.endpoint);
          break;
        case 'time_resample':
          await this.fetchDataTable(1, 20, value.endpoint);
          break;
        case 'plotting_data':
          await this.fetchImage(value.endpoint);
          break;
        default:
          break;
      }
    },
    async changeTest(tab) {
      console.log(tab);
    },
  },
  mounted() {
    this.fetchDataTable(1, 20, 'fill_missing');
  },
};
</script>
