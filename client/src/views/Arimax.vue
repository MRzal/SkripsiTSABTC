<template>
  <v-container>
    <v-card class="my-5">
      <v-card-title class="text-h4 font-weight-bold"> Arimax </v-card-title>
      <v-row align="center" class="mx-2">
        <v-col class="d-flex" cols="12" sm="5">
          <v-select
            v-model="minTrain"
            :items="items"
            label="Year of Data Train"
          ></v-select>
        </v-col>

        <v-col class="d-flex text-center" cols="12" sm="2">
          <v-card-text class="font-weight-bold">To</v-card-text>
        </v-col>

        <v-col class="d-flex" cols="12" sm="5">
          <v-select
            v-model="maxTrain"
            :items="items"
            label="Year of Data Train"
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="5">
          <v-select
            v-model="minTest"
            :items="items"
            label="Year of Data Test"
          ></v-select>
        </v-col>

        <v-col class="d-flex text-center" cols="12" sm="2">
          <v-card-text class="font-weight-bold">To</v-card-text>
        </v-col>

        <v-col class="d-flex" cols="12" sm="5">
          <v-select
            v-model="maxTest"
            :items="items"
            label="Year of Data Test"
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="12">
          <v-btn block color="primary" @click="send">Kirim</v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-10">
      <v-card-title class="text-h5 font-weight-bold"> Result </v-card-title>
      <!-- <v-row align="center" class="mx-2 d-flex"> -->
      <v-simple-table dense>
        <tbody>
          <tr>
            <td>RMSE Train</td>
            <td>
              {{ result.RMSE_train }}
            </td>
          </tr>
          <tr>
            <td>RMSE Test</td>
            <td>{{ result.RMSE_test }}</td>
          </tr>
          <tr>
            <td>MAE Train</td>
            <td>{{ result.MAE_train }}</td>
          </tr>
          <tr>
            <td>MAE Test</td>
            <td>{{ result.MAE_test }}</td>
          </tr>
          <tr>
            <td>MAPE Train</td>
            <td>{{ result.MAPE_train }}</td>
          </tr>
          <tr>
            <td>MAPE Test</td>
            <td>{{ result.MAPE_test }}</td>
          </tr>
          <tr>
            <td>R2 Train</td>
            <td>{{ result.R2_train }}</td>
          </tr>
          <tr>
            <td>R2 Train</td>
            <td>{{ result.R2_test }}</td>
          </tr>
        </tbody>
      </v-simple-table>
      <!-- </v-row> -->
      <!-- <v-row> -->
      <v-card-title class="text-h5 font-weight-bold">
        Grafik Train Data
      </v-card-title>
      <v-img :src="result.grafik_train_data"></v-img>
      <!-- </v-row> -->
      <!-- <v-row> -->
      <v-card-title class="text-h5 font-weight-bold">
        Grafik Test Data
      </v-card-title>
      <v-img :src="result.grafik_test_data"></v-img>
      <!-- </v-row> -->
    </v-card>
  </v-container>
</template>
<script>
import URL_BACKEND from "../pkg/constant";

export default {
  name: "Arimax",
  data: () => ({
    items: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    minTrain: null,
    maxTrain: null,
    minTest: null,
    maxTest: null,
    result: {
      grafik_train_data: null,
      RMSE_train: null,
      MAE_train: null,
      grafik_test_data: null,
      RMSE_test: null,
      MAE_test: null,
    },
  }),
  methods: {
    async send() {
      const data = {
        minTrain: this.minTrain,
        maxTrain: this.maxTrain,
        minTest: this.minTest,
        maxTest: this.maxTest,
      };
      const getData = {
        crossDomain: true,
        withCredentials: true,
        method: "get",
        url: `${URL_BACKEND.URL_BACKEND}/arimax`,
        data,
      };
      await this.axios(getData)
        .then((resp) => {
          this.result = resp.data;
        })
        .catch((error) => {
          this.$swal.fire({
            icon: "error",
            title: "Error Get Data",
            info: error,
          });
        });
    },
  },
};
</script>
