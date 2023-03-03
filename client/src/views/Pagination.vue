<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id">
            <td>{{ row.column1 }}</td>
            <td>{{ row.column2 }}</td>
            <td>{{ row.column3 }}</td>
          </tr>
        </tbody>
      </table>
      <pagination :page="page" :per-page="perPage" :total-rows="totalRows" :total-pages="totalPages" @page-changed="handlePageChanged" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Pagination from './Pagination.vue';
  
  export default {
    components: {
      Pagination,
    },
    data() {
      return {
        page: 1,
        perPage: 10,
        rows: [],
        totalRows: 0,
        totalPages: 0,
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios.get('/api/data', {
          params: {
            page: this.page,
            per_page: this.perPage,
          },
        }).then((response) => {
          this.rows = response.data.rows;
          this.totalRows = response.data.total_rows;
          this.totalPages = response.data.total_pages;
        });
      },
      handlePageChanged(newPage) {
        this.page = newPage;
        this.fetchData();
      },
    },
  };
  </script>
  