<template>
  <div>
    <v-list-item class="px-2" dark>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-title>
        Muh. Rizal Al Qodri
        <br />
        4611417027
      </v-list-item-title>
      <v-btn icon @click.stop="changeStatusMini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav dark>
      <v-list-item v-for="item in menus" :key="item.title" :to="item.path" link>
        <v-list-item-icon color="#ffff">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content color="#ffff">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  props: ["mini"],
  name: "sidebar",
  data: () => ({
    menus: [
      {
        title: "Dashboard",
        icon: "fa-home",
        path: "/",
      },
      {
        title: "Dataset",
        icon: "fa-database",
        path: "/dataset",
      },
      {
        title: "Preprocessing",
        icon: "fa-sync",
        path: "/preprocessing",
      },
      {
        title: "Penentuan Model",
        icon: "fab fa-bitcoin",
        path: "/model",
      },
      {
        title: "Feature Extraction",
        icon: "fa-sitemap",
        path: "/feature",
      },
      {
        title: "ARIMAX",
        icon: "fa-microchip",
        path: "/arimax",
      },
      // {
      //   title: 'Hasil Prediksi',
      //   icon: 'fa-chart-line',
      //   path: '/about',
      // },
      {
        title: "About",
        icon: "fa-info-circle",
        path: "/about",
      },
    ],
  }),
  methods: {
    changeStatusMini() {
      this.$emit("update:mini", !this.mini);
    },
  },
};
</script>
