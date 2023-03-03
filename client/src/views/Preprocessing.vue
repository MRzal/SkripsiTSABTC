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
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card
            flat
          >
            <v-card-text>{{ text }}</v-card-text>
            <v-data-table
              :headers="headers"
              :items="dataset"
              :items-per-page="5"
            ></v-data-table>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Preprocessing',
  data: () => ({
    tab: null,
    items: [
      'Imputasi Data', 'Eksploratory Data Analysis', 'Time Resample', 'Plotting Data',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
