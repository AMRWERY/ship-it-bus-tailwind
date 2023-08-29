<template>
  <MainLayout />
  <LoadingSpinner v-if="isLoading" />
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'
import { mapGetters } from "vuex";
import LoadingSpinner from './reusable/LoadingSpinner.vue'

export default {
  name: 'App',

  components: { MainLayout, LoadingSpinner },

  computed: {
    ...mapGetters(["isLoading"]),
  },
}
</script>