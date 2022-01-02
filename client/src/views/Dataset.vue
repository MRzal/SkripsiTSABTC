<template>
  <v-card>
    <div class="py-4">
      <v-card-title class="text-h4 font-weight-bold">
        Dataset Bitcoin ( BTC - USD )
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="dataset"
        :items-per-page="5"
      ></v-data-table>
    </div>
  </v-card>
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
};
</script>
