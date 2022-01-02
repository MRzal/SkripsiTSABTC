<template>
  <!-- App.vue -->

  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      color="#013A63"
    >
      <Sidebar :mini.sync="mini"/>
    </v-navigation-drawer>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->

        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from './components/sidebar/sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },

  data: () => ({
    drawer: false,
    mini: true,
  }),
};
</script>
