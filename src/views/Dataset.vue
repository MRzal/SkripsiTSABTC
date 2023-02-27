<template>
  <div>
    <v-card>
      <v-container>
        <v-row class="d-flex align-content-center">
          <v-file-input truncate-length="15"></v-file-input>
          <v-btn
            color="blue-grey"
            class="ma-2 white--text"
            @click="test"
          >
            Upload
            <v-icon
              right
              dark
            >
              mdi-cloud-upload
            </v-icon>
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

export default {
  name: 'Dataset',
  data: () => ({
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
    created() {
      const config = {
        method: 'GET',
        url: 'http://127.0.0.1:5000/',
      };
      this.axios(config).then(
        (response) => {
          console.log(response);
        },
      ).catch((error) => console.log(error));
    },
    test() {
      const config = {
        method: 'GET',
        url: 'http://127.0.0.1:5000/',
      };
      this.axios(config).then(
        (response) => {
          console.log(response);
        },
      ).catch((error) => console.log(error));
    },
  },
};
</script>
