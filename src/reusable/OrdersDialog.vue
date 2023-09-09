<template>
    <button type="button" @click="openModal"
        class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <i class="fa-regular fa-pen-to-square fa-lg"></i>
    </button>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Order id <span class="text-blue-600">#{{ productId }}</span>
                                    </h3>
                                    <button type="button" @click="closeModal"
                                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                        <i class="fa-solid fa-xmark fa-xl"></i>
                                    </button>
                                </div>
                            </DialogTitle>
                            <div class="my-6">
                                <ol class="items-center justify-center sm:flex">
                                    <li class="relative mb-8 sm:mb-0">
                                        <div class="flex items-center">
                                            <div
                                                class="z-10 flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                                <i class="fa-solid fa-check fa-3x text-red-600"></i>
                                            </div>
                                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3 mr-4 sm:pr-8">
                                            <h3 class="text-lg font-semibold text-gray-700 dark:text-white">Approved</h3>
                                            <time
                                                class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec
                                                2, 2021</time>
                                        </div>
                                    </li>
                                    <li class="relative mb-6 sm:mb-0">
                                        <div class="flex items-center">
                                            <div
                                                class="z-10 flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                                <i class="fa-solid fa-bag-shopping fa-3x text-red-600"></i>
                                            </div>
                                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3 mr-4 sm:pr-8">
                                            <h3 class="text-lg font-semibold text-gray-700 dark:text-white">Prepared</h3>
                                            <time
                                                class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec
                                                2, 2021</time>
                                        </div>
                                    </li>
                                    <li class="relative mb-6 sm:mb-0">
                                        <div class="flex items-center">
                                            <div
                                                class="z-10 flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                                <i class="fa-solid fa-truck fa-3x text-red-600"></i>
                                            </div>
                                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3 mr-4 sm:pr-8">
                                            <h3 class="text-lg font-semibold text-gray-700 dark:text-white">Shipped</h3>
                                            <time
                                                class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec
                                                2, 2021</time>
                                        </div>
                                    </li>
                                    <li class="relative mb-6 sm:mb-0">
                                        <div class="flex items-center">
                                            <div
                                                class="z-10 flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                                <i class="fa-solid fa-location-dot fa-3x text-red-600"></i>
                                            </div>
                                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3 mr-4 sm:pr-8">
                                            <h3 class="text-lg font-semibold text-gray-700 dark:text-white">Placed</h3>
                                            <time
                                                class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec
                                                2, 2021</time>
                                        </div>
                                    </li>
                                    <li class="relative mb-6 sm:mb-0">
                                        <div class="flex items-center">
                                            <div
                                                class="z-10 flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                                <i class="fa-solid fa-truck-ramp-box fa-3x text-red-600"></i>
                                            </div>
                                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3 sm:pr-8">
                                            <h3 class="text-lg font-semibold text-gray-700 dark:text-white">Delivered</h3>
                                            <time
                                                class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec
                                                2, 2021</time>
                                        </div>
                                    </li>
                                </ol>
                            </div>

                            <div class="my-6">
                                <div class="m-16">
                                    <label for="countries"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Approved</label>
                                    <select id="status"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>True</option>
                                        <option>False</option>
                                    </select>
                                </div>
                            </div>

                            <div class="mt-4">
                                <div class="flex items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                                    <button @click="closeModal" type="button"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>


<script>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
} from '@headlessui/vue'

export default {
    name: 'OrdersDialog',

    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle
    },

    props: ['productId'],

    data() {
        return {
            isOpen: false,
            orders: [],
        }
    },

    methods: {
        closeModal() {
            this.isOpen = false
        },
        openModal() {
            this.isOpen = true
        },
    },
}
</script>