<template>
    <!-- Modal toggle -->
    <button type="button" id="hs-as-table-table-export-dropdown" data-modal-target="staticModal"
        data-modal-toggle="staticModal" class="absolute bottom-2 right-2 float-right">
        <i class="fa-solid fa-pen-to-square" style="color: #9288F8"></i>
    </button>

    <!-- Main modal -->
    <div id="staticModal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <div class="text-center w-full">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit Product
                        </h3>
                    </div>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="staticModal">
                        <img src="../../public//close.svg" class="w-3 h-3">
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
                            <main class="mt-4 p-4">
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
                                            placeholder="category" x-model="category" v-model.trim="categories" />
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
                    <button data-modal-hide="staticModal" type="button" @click="updateProduct"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { doc, updateDoc, getDoc } from "firebase/firestore";
import db from "@/firebase/config";
import { initFlowbite } from 'flowbite'

export default {
    name: 'EditProductDialog',

    data: () => ({
        dialog: false,
        title: "",
        price: "",
        originalPrice: "",
        categories: "",
        availability: '',
        productImg: "",
        imgFront: "",
        imgBack: "",
        discount: '',
        selectedImg: '',
        productData: null,
        id: String,
    }),

    props: ["prod"],

    methods: {
        updateProduct() {
            const productRef = doc(db, "products", this.prod?.id);
            const updateData = {
                title: this.title,
                price: this.price,
                originalPrice: this.originalPrice,
                categories: this.categories,
                availability: this.availability,
                productImg: this.productImg,
                imgFront: this.imgFront,
                imgBack: this.imgBack,
                discount: this.discount
            };

            updateDoc(productRef, updateData)
                .then(() => {
                    console.log("Document updated successfully");
                })
                .catch((error) => {
                    console.error("Error updating document: ", error);
                });
        },
        async getProduct() {
            const docSnap = await getDoc(doc(db, "products", this.prod?.id));
            if (docSnap.exists()) {
                // debugger
                this.productData = docSnap.data();
                this.title = this.productData.title;
                this.price = this.productData.price;
                this.originalPrice = this.productData.originalPrice;
                this.categories = this.productData.categories;
                this.availability = this.productData.availability;
                this.productImg = this.productData.productImg;
                this.imgFront = this.productData.imgFront;
                this.imgBack = this.productData.imgBack;
                this.discount = this.productData.discount;
                this.selectedImg = this.imgFront;
                console.log(this.productData)
            } else {
                console.log("Document does not exist");
            }
        },
        selectCard(imgProperty) {
            this.selectedImg = this.productData[imgProperty];
        },
    },

    mounted() {
        this.getProduct();
        initFlowbite()
    },
}
</script>