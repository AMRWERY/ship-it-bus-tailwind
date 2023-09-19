<template>
  <MainLayout />
  <LoadingSpinner v-if="isLoading" />
</template>

<script setup>
import { computed, onMounted } from 'vue';
import MainLayout from './layouts/MainLayout.vue'
import { useStore } from "vuex";
import LoadingSpinner from './reusable/LoadingSpinner.vue'

const store = useStore()
const isLoading = computed(() => store.getters.isLoading)

onMounted(() => {
  store.dispatch('initAuthentication')
})
</script>
