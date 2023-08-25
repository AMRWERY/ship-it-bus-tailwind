<template>
    <div>
        <button id="hs-as-table-table-export-dropdown" type="button" @click="openModal"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add Product
        </button>
    </div>

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
                                        Add New Product
                                    </DialogTitle>
                                </div>
                                <button type="button" @click="closeModal"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <i class="fa-solid fa-xmark fa-xl w-3 h-3"></i>
                                </button>
                            </div>
                            <header class="flex flex-col justify-center items-center">
                                <div class="grid grid-cols-12 gap-4">
                                    <div class="col-span-3">
                                        <div class="grid grid-cols-1 gap-4">
                                            <div class="bg-white p-4 rounded-lg shadow-md w-16 h-16 mx-6 mt-6">
                                                <img :src="imgFront" />
                                            </div>
                                            <div class="bg-white p-4 rounded-lg shadow-md w-16 h-16 mx-6 mt-6">
                                                <img :src="imgBack" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-9">
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
                                                <img class="w-12" src="../../public/add-circle-svgrepo-com.svg"
                                                    alt="Add Image" />
                                            </label>
                                            <input id="frontImageInput" type="file" accept="image/*"
                                                class="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                                @change="handleImageChange('front')" />
                                        </div>
                                    </li>
                                    <li class="mx-2">
                                        <div
                                            class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 relative">
                                            <label for="backImageInput" class="cursor-pointer">
                                                <img class="w-12" src="../../public/add-circle-svgrepo-com.svg"
                                                    alt="Add Image" />
                                            </label>
                                            <input id="backImageInput" type="file" accept="image/*"
                                                class="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                                @change="handleImageChange('back')" />
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
                                                placeholder="Product Name" maxlength="22" x-model="productName"
                                                v-model.trim="title" />
                                        </div>
                                        <div class="my-3">
                                            <input type="number"
                                                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                                placeholder="Price" x-model="price" v-model.trim="price" />
                                        </div>
                                        <div class="my-3">
                                            <input type="number"
                                                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                                placeholder="original price" x-model="price" v-model.trim="originalPrice" />
                                        </div>
                                        <div class="my-3">
                                            <label for="availability"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                                                Category</label>
                                            <select id="categories" v-model="categories"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                                            </select>
                                        </div>
                                        <div class="my-3">
                                            <input type="number"
                                                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                                placeholder="Discount" x-model="discount" v-model.trim="discount" />
                                        </div>
                                        <div class="my-3">
                                            <label for="availability"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                                                Availability</label>
                                            <select id="availability" v-model="availability"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected value="in-stock">in stock</option>
                                                <option value="out-of-stock">out of stock</option>
                                            </select>
                                        </div>
                                    </div>
                                </main>
                            </div>

                            <div
                                class="flex items-center float-right p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button type="button" @click="addNewProduct"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
      
<script>
import { mapActions } from 'vuex';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
} from '@headlessui/vue'

export default {
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle
    },

    data: () => ({
        isOpen: false,
        title: '',
        price: '',
        originalPrice: '',
        categories: ['Hoodies', 'T-shirts', 'Music', 'Accessories', 'Posters', 'Decor', 'Clothing'],
        selectedCategory: '',
        discount: '',
        availability: 'in-stock',
        sku: '',
        imgFront: null,
        imgBack: null,
        card: 'front',
        productImg: ''
    }),

    methods: {
        closeModal() {
            this.isOpen = false
        },
        openModal() {
            this.isOpen = true
        },
        ...mapActions(['addProduct']),
        addNewProduct() {
            this.dialog = false
            let obj = {
                title: this.title,
                price: this.price,
                originalPrice: this.originalPrice,
                categories: this.categories,
                discount: this.discount,
                availability: this.availability,
                sku: this.sku,
                productImg: this.productImg,
                imgFront: this.imgFront,
                imgBack: this.imgBack,
            }
            this.$emit("product-added");
            return this.addProduct(obj)
        },
        handleImageChange(cardType) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    if (cardType === 'front') {
                        this.imgFront = reader.result;
                        this.productImg = reader.result;
                    } else if (cardType === 'back') {
                        this.imgBack = reader.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    },
}
</script>