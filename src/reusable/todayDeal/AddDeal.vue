<template>
    <button @click="openModal"
        class="ml-3 flex items-center justify-center text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded">
        {{ $t('btn.new_deal') }}
    </button>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div
                class="fixed mt-12 top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">

                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-2xl sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <div class="flex items-start justify-between pb-4 pt-2 rounded-t dark:border-gray-600">
                                <div class="text-center w-full">
                                    <DialogTitle as="h3" class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Add New Deal
                                    </DialogTitle>
                                </div>
                                <button type="button" @click="closeModal"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <i class="fa-solid fa-xmark fa-xl w-3 h-3"></i>
                                </button>
                            </div>
                            <header class="flex flex-col justify-center items-center">
                                <div class="grid grid-cols-12 gap-4">
                                    <div class="col-span-12">
                                        <div class="relative" x-show="card === 'front'"
                                            x-transition:enter="transition ease-out duration-300"
                                            x-transition:enter-start="opacity-0 transform scale-90"
                                            x-transition:enter-end="opacity-100 transform scale-100">
                                            <img class="w-full h-auto" :src="productImg" />
                                        </div>
                                    </div>
                                </div>

                                <ul class="flex">
                                    <li class="mx-2">
                                        <div
                                            class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 relative">
                                            <label for="frontImageInput" class="cursor-pointer">
                                                <img class="w-12" src="/add-circle-svgrepo-com.svg" alt="Add Image" />
                                            </label>
                                            <input id="frontImageInput" type="file" accept="image/*"
                                                class="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                                @change="handleImageChange('front')" />
                                        </div>
                                    </li>
                                </ul>
                            </header>
                            <div class="mt-2">
                                <main class="mt-4">
                                    <div>
                                        <div class="my-3">
                                            <input type="text"
                                                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                                placeholder="Product Name" x-model="productName" v-model.trim="title" />
                                        </div>
                                        <div class="my-3">
                                            <input type="number"
                                                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                                placeholder="Price" x-model="price" v-model.trim="price"
                                                @input="formatPrice" />
                                        </div>
                                        <div class="my-3">
                                            <input type="number"
                                                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                                placeholder="original price" x-model="price" v-model.trim="originalPrice"
                                                @input="formatOriginalPrice" />
                                        </div>
                                        <div class="my-3">
                                            <div class="flex space-x-2">
                                                <VueDatePicker v-model="startDate" placeholder="Start Date" />
                                                <VueDatePicker v-model="endDate" placeholder="End Date" />
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>

                            <div
                                class="flex items-center float-right p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button type="button" @click="addDeal"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>


<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue';
import { useStore } from 'vuex';

const startDate = ref(null);
const endDate = ref(null);
const isOpen = ref(false);
const title = ref('');
const price = ref('');
const originalPrice = ref('');
const productImg = ref('');

const store = useStore();

const addDeal = () => {
    isOpen.value = false;
    const obj = {
        title: title.value,
        price: price.value,
        originalPrice: originalPrice.value,
        productImg: productImg.value,
        startDate: startDate.value,
        endDate: endDate.value,
    };
    store.dispatch('addNewDeal', obj);
};

const handleImageChange = (cardType) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            if (cardType === 'front') {
                productImg.value = reader.result;
            }
        };
        reader.readAsDataURL(file);
    }
};

const formatOriginalPrice = () => {
    if (originalPrice.value !== '') {
        originalPrice.value = parseFloat(originalPrice.value).toFixed(2);
    }
};
const formatPrice = () => {
    if (price.value !== '') {
        price.value = parseFloat(price.value).toFixed(2);
    }
};

const closeModal = () => {
    isOpen.value = false;
};

const openModal = () => {
    isOpen.value = true;
};
</script>