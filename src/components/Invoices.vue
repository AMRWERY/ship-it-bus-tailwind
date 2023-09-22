<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-12 bg-white dark:bg-gray-700">
        <div class="flex items-center justify-between pb-4 m-6 float-end">
            <div class="relative">
                <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" id="table-search"
                    class="block p-2 pe-10 text-sm text-gray-900 dark:text-white border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="$t('invoices.search_for_items')">
            </div>
        </div>
        <table class="w-full text-sm text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="p-4 text-start">
                        <div class="flex items-center">
                            <input id="checkbox-all-search" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 capitalize dark:text-white">
                        {{ $t('invoices.user_email') }}
                    </th>
                    <th scope="col" class="px-6 py-3 capitalize dark:text-white">
                        {{ $t('invoices.username') }}
                    </th>
                    <th scope="col" class="px-6 py-3 capitalize dark:text-white">
                        {{ $t('invoices.color') }}
                    </th>
                    <th scope="col" class="px-6 py-3 capitalize dark:text-white">
                        {{ $t('invoices.price') }}
                    </th>
                    <th scope="col" class="px-6 py-3 capitalize dark:text-white">
                        #
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    v-for="user in users" :key="user">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ user?.email }}
                    </th>
                    <td class="px-6 py-4">
                        {{ user?.username }}
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                    <td class="py-4">
                        <button type="button" @click="openModal(user.id)"
                            class="rounded-full p-1 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <i class="fa-solid fa-eye fa-lg"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <InvoiceDialog :userId="selectedUserId" :isOpen="open" v-if="open" @close="open = $event" />
    </div>
</template>


<script setup>
import InvoiceDialog from '../reusable/InvoiceDialog.vue';
import { computed, ref, onMounted, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const users = ref([]);
const selectedUserId = ref(null);
const open = ref(false);
const userId = ref('');

const getAllUsers = computed(() => store.getters.getAllUsers);

const fetchUsers = () => {
    store.dispatch('fetchUsers');
};

const openModal = (userId) => {
    selectedUserId.value = userId;
    open.value = true;
};

watch(getAllUsers, (newProducts) => {
    users.value = newProducts;
});

onMounted(() => {
    fetchUsers();
});

fetchUsers();
users.value = getAllUsers.value;
</script>