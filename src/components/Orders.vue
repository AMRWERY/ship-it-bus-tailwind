<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-12 bg-white dark:bg-gray-700">
        <div class="flex items-center justify-between pb-4 m-6">
            <div>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                    class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-50 dark:text-gray-900 dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button">
                    <i class="fa-solid fa-clock me-2"></i>
                    {{ $t('orders.last_30_days') }}
                    <i class="fa-solid fa-chevron-down ms-2"></i>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-700" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:bg-gray-50">{{
                                    $t('orders.last_day') }}</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:bg-gray-50">{{
                                    $t('orders.last_7_days') }}</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:bg-gray-50">{{
                                    $t('orders.last_30_days') }}</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:bg-gray-50">{{
                                    $t('orders.last_year') }}</a>
                        </li>
                    </ul>
                </div>
            </div>
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
                    <th scope="col" class="p-4  text-start">
                        <div class="flex items-center">
                            <input id="checkbox-all-search" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 capitalize dark:text-white">
                        {{ $t('orders.product_img') }}
                    </th>
                    <th scope="col" class="px-6 py-3 capitalize dark:text-white">
                        {{ $t('orders.product_name') }}
                    </th>
                    <th scope="col" class="px-6 py-3 capitalize dark:text-white">
                        {{ $t('orders.category') }}
                    </th>
                    <th scope="col" class="px-6 py-3 capitalize dark:text-white">
                        {{ $t('invoices.price') }}
                    </th>
                    <th scope="col" class="px-6 py-3 capitalize dark:text-white">
                        #
                    </th>
                </tr>
            </thead>
            <tbody v-for="item in getOrders" :key="item">
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    v-for="prod in item.cartItems" :key="prod">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img :src="prod?.productImg" class="w-10 h-10">
                    </th>
                    <td class="px-6 py-4">
                        {{ prod?.title }}
                    </td>
                    <td class="px-6 py-4">
                        {{ prod?.categories }}
                    </td>
                    <td class="px-6 py-4">
                        ${{ prod?.price }}
                    </td>
                    <td class="py-4 space-s-6">
                        <button type="button" @click="selectedOrderProductId = prod.id; getOrderDetails(item)"
                            class="rounded-full p-1 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <i class="fa-regular fa-pen-to-square fa-lg"></i>
                        </button>

                        <button type="button"
                            class="rounded-full p-1 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <i class="fa-solid fa-trash fa-lg ml-4"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
            <OrdersDialog :productId="selectedOrderProductId" :orderDetail="selectedOrder" :isOpen="isOpen"
                @close="isOpen = $event" />
        </table>
    </div>
</template>


<script>
import OrdersDialog from '../reusable/OrdersDialog.vue'
import { mapGetters, mapActions } from 'vuex';
import { initFlowbite } from 'flowbite'

export default {
    name: 'Orders',

    components: { OrdersDialog },

    data() {
        return {
            orders: [],
            isOpen: false,
            selectedOrder: null,
        }
    },

    computed: {
        ...mapGetters(['getOrders']),
    },

    methods: {
        ...mapActions(["fetchAllOrders"]),
        closeModal() {
            this.isOpen = false
        },
        getOrderDetails(order) {
            this.selectedOrder = order;
            this.isOpen = true
        },
    },

    watch: {
        getOrders(newOrders) {
            this.orders = newOrders;
        },
    },

    mounted() {
        this.fetchAllOrders()
        initFlowbite()
    }
}
</script>