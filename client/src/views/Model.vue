<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h4 font-weight-bold">
        Penentuan Model
      </v-card-title>
      <v-simple-table dense>
        <tbody>
          <tr>
            <td> Hasil ADF Statistics</td>
            <td>
              {{ adf_statistic }}
            </td>
          </tr>
          <tr>
            <td>Hasil p-value ADF</td>
            <td> {{ p_adf }}</td>
          </tr>
          <tr>
            <td>Keterangan ADF Test</td>
            <td> {{ adf_detail }}</td>
          </tr>
          <tr>
            <td>Hasil ADF Statistics Differencing</td>
            <td>{{ adf_diff }}</td>
          </tr>
          <tr>
            <td>Hasil p-value ADF Differencing</td>
            <td>{{ p_adf_diff }}</td>
          </tr>
          <tr>
            <td>Keterangan ADF Test dengan Differencing</td>
            <td>{{ adf_diff_detail }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import URL_BACKEND from '../pkg/constant';

export default {
  data() {
    return {
      adf_statistic: null,
      p_adf: null,
      adf_detail: null,
      adf_diff: null,
      p_adf_diff: null,
      adf_diff_detail: null,
    };
  },
  methods: {
    async fetchAdf() {
      const getData = {
        crossDomain: true,
        withCredentials: true,
        method: 'get',
        url: `${URL_BACKEND.URL_BACKEND}/data_stationary`,
      };
      await this.axios(getData).then((resp) => {
        this.adf_statistic = resp.data.hasil_adf_statistics;
        this.p_adf = resp.data.hasil_pvalue_ADF;
        this.adf_detail = resp.data.keterangan_adf_test;
        this.adf_diff = resp.data.hasil_adf_statistics_differencing;
        this.p_adf_diff = resp.data.hasil_pvalue_adf_differencing;
        this.adf_diff_detail = resp.data.keterangan_adf_test_differencing;
      }).catch((error) => {
        console.log(error);
        this.$swal.fire({
          icon: 'error',
          title: 'Error Get Data',
          info: error,
        });
      });
    },
  },
  async mounted() {
    await this.fetchAdf();
  },
};
</script>
