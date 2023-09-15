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
                                    <li class="relative mb-8 sm:mb-0" v-for="status in getState" :key="status">
                                        <div class="flex items-center">
                                            <div class="z-10 flex items-center justify-center w-14 h-14 rounded-full ring-0 ring-white sm:ring-8 shrink-0"
                                                :class="{ 'bg-green-100 dark:bg-green-900': selectStatus && selectStatus.name === status.name, 'bg-blue-100 dark:bg-blue-900': selectStatus && selectStatus.name !== status.name }">
                                                <i
                                                    :class="[selectStatus && selectStatus.name === status.name ? 'text-blue-600' : 'text-red-600', 'fa-solid', status.icon]"></i>
                                            </div>
                                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3 mr-4 sm:pr-8">
                                            <h3 class="text-lg font-semibold text-gray-700 dark:text-white">{{ status.name
                                            }}</h3>
                                        </div>
                                    </li>
                                </ol>
                            </div>

                            <div class="my-6">
                                <select id="status" v-model="selectStatus"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option v-for="status in getState" :key="status" :value="status"> {{
                                        status.name }}
                                    </option>
                                </select>
                            </div>

                            <div class="mt-4">
                                <div class="flex items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                                    <button @click="updateOrder" type="button"
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
import { mapGetters, mapActions } from "vuex"
import { updateDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

export default {
    name: 'OrdersDialog',

    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle
    },

    props: ['productId', "orderDetail", 'isOpen'],

    data() {
        return {
            selectStatus: null,
            selectedOrderDetails: null
        }
    },

    methods: {
        closeModal() {
            this.$emit('close', false)
        },
        updateOrder() {
            const orderRef = doc(db, "orders", this.orderDetail.id);
            const updateData = {
                ...this.orderDetail,
                status: this.selectStatus.name
            };
            console.log(this.orderDetail)

            updateDoc(orderRef, updateData)
                .then(() => {
                    console.log("Document updated successfully");
                })
                .catch((error) => {
                    console.error("Error updating document: ", error);
                });
            this.$emit('close', false)
        },
        ...mapActions(["fetchAllOrders", "fetchStatus"]),
    },

    computed: {
        ...mapGetters(['getAllOrders', "getState"]),
    },

    mounted() {
        this.selectedOrderDetails = Object.assign({}, this.orderDetail);
        this.fetchStatus()
    }
}
</script>