<template>
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                        type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <router-link to="" class="flex ml-2 md:mr-24">
                        <img src="../assets/shopping-bags-svgrepo-com.svg" class="w-10 h-10 mr-1">
                        <span
                            class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Ship-IT</span>
                    </router-link>
                </div>

                <div class="flex items-center">
                    <div class="flex items-center ml-3 space-x-2.5">
                        <!-- <div>
                            <button type="button"
                                class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <i class="fa-solid fa-earth-africa fa-xl"></i>
                            </button>
                        </div> -->

                        <!-- toggle theme -->
                        <div>
                            <button type="button"
                                class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <i class="fa-solid fa-moon fa-xl"></i>
                            </button>
                            <button type="button"
                                class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <i class="fa-solid fa-sun fa-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </nav>

    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

            <ul class="space-y-2 font-medium mt-16">
                <div class="mb-4 px-4">
                    <p class="pl-4 text-sm font-semibold mb-1">Main</p>
                    <router-link to="/" @click="selectedTab = 'dashboard'"
                        :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'dashboard' }]">
                        <i class="fa-solid fa-chart-line fa-lg mr-2"></i>
                        <span class="text-gray-700">Dashboard</span>
                    </router-link>

                    <router-link to="/invoices" @click="selectedTab = 'invoices'"
                        :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'invoices' }]">
                        <i class="fa-solid fa-arrow-trend-up fa-lg mr-2"></i>
                        <span class="text-gray-700">Invoices</span>
                    </router-link>

                    <router-link to="/orders" @click="selectedTab = 'orders'"
                        :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'orders' }]">
                        <i class="fa-solid fa-arrow-up-wide-short fa-lg mr-2"></i>
                        <span class="text-gray-700">Orders</span>
                    </router-link>
                </div>

                <div class="mb-4 px-4">
                    <p class="pl-4 text-sm font-semibold mb-1">Projects</p>
                    <router-link to="/products" @click="selectedTab = 'products'"
                        :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'products' }]">
                        <i class="fa-solid fa-arrow-up-wide-short fa-lg mr-2"></i>
                        <span class="text-gray-700">View Products</span>
                    </router-link>

                    <router-link to="/categories" @click="selectedTab = 'categories'"
                        :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'categories' }]">
                        <i class="fa-solid fa-list-ol fa-lg mr-2"></i>
                        <span class="text-gray-700">View Categories</span>
                    </router-link>
                </div>

                <div class="mb-4 px-4">
                    <p class="pl-4 text-sm font-semibold mb-1">Misc</p>
                    <router-link to="/mail" @click="selectedTab = 'mail'"
                        :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'mail' }]">
                        <i class="fa-solid fa-envelope fa-lg mr-2"></i>
                        <span class="text-gray-700">Mail</span>
                    </router-link>

                    <router-link to="/terms-and-conditions" @click="selectedTab = 'terms-and-conditions'"
                        :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'terms-and-conditions' }]">
                        <i class="fa-solid fa-thumbtack fa-lg mr-2"></i>
                        <span class="text-gray-700">Terms & Conditions</span>
                    </router-link>

                    <router-link to="/f-a-q" @click="selectedTab = 'f-a-q'"
                        :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'f-a-q' }]">
                        <i class="fa-solid fa-circle-question fa-lg mr-2"></i>
                        <span class="text-gray-700">FAQ</span>
                    </router-link>

                    <router-link to="/privacy-policy" @click="selectedTab = 'privacy-policy'"
                        :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'privacy-policy' }]">
                        <i class="fa-solid fa-circle-info fa-lg mr-2"></i>
                        <span class="text-gray-700">Privacy Policy</span>
                    </router-link>

                    <router-link to="/login" @click="logout = 'logout'"
                        :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'logout' }]">
                        <i class="fa-solid fa-arrow-right-from-bracket fa-lg mr-2"></i>
                        <span class="text-gray-700">Log out</span>
                    </router-link>
                </div>

                <!-- don't delete it -->

                <!-- <router-link to="">
                    <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer mt-3">
                        <i class="fa-solid fa-shop fa-lg fa-lg mr-2"></i>
                      <span class="text-gray-700">Back to Shopping</span>
                    </div>
                </router-link> -->

            </ul>
        </div>
    </aside>

    <div class="p-4 sm:ml-64">
        <div class="p-4 border-gray-200 rounded-lg dark:border-gray-700">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { initFlowbite } from 'flowbite';
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const selectedTab = ref('');

const logout = async () => {
    try {
        await store.dispatch('logout');
        store.commit('setIsAuthenticated', false);
        sessionStorage.removeItem("userToken");
        isUserLoggedIn.value = false;
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    initFlowbite();
});
</script>


<style scoped>
@media (max-width: 768px) {
    .sidebar {
        display: none;
    }
}
</style>