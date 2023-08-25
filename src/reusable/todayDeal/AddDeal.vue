<template>
    <!-- Modal toggle -->
    <button id="hs-as-table-table-export-dropdown" data-modal-target="modalID" data-modal-toggle="modalID"
        class="ml-3 flex items-center justify-center text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded">
        Add
    </button>

    <!-- Main modal -->
    <div id="modalID" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <div class="text-center w-full">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Add Deal
                        </h3>
                    </div>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <i class="fa-solid fa-xmark fa-xl w-3 h-3"></i>
                    </button>
                </div>

                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <div class="m-4">
                        <div class="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" x-data="creditCard">
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
                                        <input type="text"
                                            class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                            placeholder="category" x-model="category" v-model.trim="category" />
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
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="modalID" type="button" @click="addDeal"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { initFlowbite } from 'flowbite'
import { mapActions } from 'vuex'

export default {
    data: () => ({
        dialog: false,
        title: '',
        price: '',
        originalPrice: '',
        category: '',
        discount: '',
        availability: 'in-stock',
        sku: '',
        imgFront: null,
        imgBack: null,
        card: 'front',
        productImg: ''
    }),

    methods: {
        ...mapActions(['addNewDeal']),
        addDeal() {
            this.dialog = false
            let obj = {
                title: this.title,
                price: this.price,
                originalPrice: this.originalPrice,
                category: this.category,
                discount: this.discount,
                availability: this.availability,
                sku: this.sku,
                productImg: this.productImg,
                imgFront: this.imgFront,
                imgBack: this.imgBack,
            }
            // this.$emit("product-added");
            // return this.addNewDeal(obj)
            this.addNewDeal(obj);
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

    mounted() {
        initFlowbite();
    }
}
</script>