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
          :items-per-page="5"
        ></v-data-table>
    </v-card>
  </div>
</template>
<script>
import * as constant from '../pkg/constant';

export default {
  name: 'Dataset',
  data: () => ({
    file: null,
    headers: [
      {
        text: 'Timestamp',
        value: 'timestamp',
      },
      {
        text: 'Open',
        value: 'open',
      },
      {
        text: 'Close',
        value: 'close',
      },
      {
        text: 'High',
        value: 'high',
      },
      {
        text: 'Low',
        value: 'low',
      },
      {
        text: 'Volume (BTC)',
        value: 'volumeBtc',
      },
      {
        text: 'Volume (Currency)',
        value: 'volumeCurrency',
      },
      {
        text: 'Weighted Price',
        value: 'weightedPrice',
      },
    ],
    dataset: [
      {
        timestamp: 100000,
        open: NaN,
        close: NaN,
        high: 1000,
        low: 99,
        volumeBtc: 1000000,
        volumeCurrency: 30000,
        weightedPrice: 2,
      },
      {
        timestamp: 100000,
        open: NaN,
        close: NaN,
        high: 1000,
        low: 99,
        volumeBtc: 1000000,
        volumeCurrency: 30000,
        weightedPrice: 2,
      },
      {
        timestamp: 100000,
        open: NaN,
        close: NaN,
        high: 1000,
        low: 99,
        volumeBtc: 1000000,
        volumeCurrency: 30000,
        weightedPrice: 2,
      },
      {
        timestamp: 100000,
        open: NaN,
        close: NaN,
        high: 1000,
        low: 99,
        volumeBtc: 1000000,
        volumeCurrency: 30000,
        weightedPrice: 2,
      },
      {
        timestamp: 100000,
        open: NaN,
        close: NaN,
        high: 1000,
        low: 99,
        volumeBtc: 1000000,
        volumeCurrency: 30000,
        weightedPrice: 2,
      },
      {
        timestamp: 100000,
        open: NaN,
        close: NaN,
        high: 1000,
        low: 99,
        volumeBtc: 1000000,
        volumeCurrency: 30000,
        weightedPrice: 2,
      },
      {
        timestamp: 100000,
        open: NaN,
        close: NaN,
        high: 1000,
        low: 99,
        volumeBtc: 1000000,
        volumeCurrency: 30000,
        weightedPrice: 2,
      },
      {
        timestamp: 100000,
        open: NaN,
        close: NaN,
        high: 1000,
        low: 99,
        volumeBtc: 1000000,
        volumeCurrency: 30000,
        weightedPrice: 2,
      },
      {
        timestamp: 100000,
        open: NaN,
        close: NaN,
        high: 1000,
        low: 99,
        volumeBtc: 1000000,
        volumeCurrency: 30000,
        weightedPrice: 2,
      },
      {
        timestamp: 100000,
        open: NaN,
        close: NaN,
        high: 1000,
        low: 99,
        volumeBtc: 1000000,
        volumeCurrency: 30000,
        weightedPrice: 2,
      },
      {
        timestamp: 100000,
        open: NaN,
        close: NaN,
        high: 1000,
        low: 99,
        volumeBtc: 1000000,
        volumeCurrency: 30000,
        weightedPrice: 2,
      },
    ],
  }),
  methods: {
    uploadData() {
      const form = new FormData();
      form.append('uploaded-file', this.file);

      const config = {
        method: 'POST',
        url: `${constant.URL_BACKEND}/upload`,
        data: form,
      };
      this.axios(config).then((response) => {
        if (response.status === 200) {
          this.file = null;
        }
      }).catch();
    },
  },
};
</script>
