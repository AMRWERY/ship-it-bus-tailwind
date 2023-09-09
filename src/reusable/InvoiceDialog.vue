<template>
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
                            class="w-full max-w-5xl sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <div class="flex items-start justify-between pb-4 pt-2 rounded-t dark:border-gray-600">
                                <div class="w-full">
                                    <DialogTitle as="h3" class="text-xl font-semibold text-gray-900 dark:text-white">
                                        User purchases
                                    </DialogTitle>
                                </div>
                                <button type="button" @click="closeModal"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <i class="fa-solid fa-xmark fa-xl w-3 h-3"></i>
                                </button>
                            </div>
                            <div class="mt-2 max-h-[400px] overflow-y-auto">
                                <div class="container px-5 mx-auto">
                                    <div class="divide-y-2 divide-gray-100">
                                        <div v-for="item in orders" :key="item">
                                            <div v-for="prod in item.cartItems" :key="prod"
                                                class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                                <div class="flex">
                                                    <div class="pb-4 md:pb-8 w-full md:w-40">
                                                        <img class="w-full hidden md:block" :src="prod?.imgFront" />
                                                        <img class="w-full md:hidden" :src="prod?.imgFront" />
                                                    </div>
                                                    <div
                                                        class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0 ml-10">
                                                        <div
                                                            class="w-full flex flex-col justify-start items-start space-y-8">
                                                            <h3
                                                                class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800 mt-10">
                                                                {{ prod?.title }}
                                                            </h3>
                                                        </div>
                                                        <div
                                                            class="flex justify-between space-x-14 items-start w-full ml-20">
                                                            <div class="flex justify-start items-center mt-10">
                                                                <p class="text-base dark:text-white xl:text-lg leading-6">
                                                                    ${{ prod?.price }}</p>
                                                                <p
                                                                    class="text-red-300 line-through text-base dark:text-white xl:text-lg leading-6 ml-2">
                                                                    ${{ prod?.originalPrice }}</p>
                                                            </div>

                                                            <div class="flex items-center mt-10">
                                                                <p
                                                                    class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                                                                    {{
                                                                        prod?.cartQty }}</p>
                                                                <p
                                                                    class="text-red-300 text-base dark:text-white xl:text-lg leading-6 ml-2">
                                                                    Pieces</p>
                                                            </div>
                                                            <p
                                                                class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800 mt-10">
                                                                ${{ prod?.price }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
import { mapGetters, mapActions } from "vuex"

export default {
    name: 'InvoiceDialog',

    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle
    },

    data: () => ({
        isOpen: false,
        orders: [],
    }),

    props: ['userId', 'isOpen'],

    computed: {
        ...mapGetters(['getAllOrders']),
    },

    methods: {
        ...mapActions(["fetchOrders"]),
        closeModal() {
            this.isOpen = false
            this.$emit('close', false)
        },
    },

    watch: {
        getAllOrders(newOrders) {
            this.orders = newOrders;
        },
    },

    mounted() {
        this.fetchOrders(this.userId)
        this.orders = this.getAllOrders
    }
}
</script>