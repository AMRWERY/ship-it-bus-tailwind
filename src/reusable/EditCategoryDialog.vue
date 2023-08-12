<template>
    <!-- Modal toggle -->
    <button type="button" id="hs-as-table-table-export-dropdown" data-modal-target="staticModal"
        data-modal-toggle="staticModal" class="absolute bottom-2 right-2 float-right">
        <i class="fa-solid fa-pen-to-square"></i>
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
                            Edit Category
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
                                <div class="relative" x-show="card === 'front'"
                                    x-transition:enter="transition ease-out duration-300"
                                    x-transition:enter-start="opacity-0 transform scale-90"
                                    x-transition:enter-end="opacity-100 transform scale-100">
                                    <img class="w-full h-auto"
                                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                        alt="front credit card">
                                    <div
                                        class="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
                                        <p class="number mb-5 sm:text-xl"
                                            x-text="cardNumber !== '' ? cardNumber : '0000 0000 0000 0000'"></p>
                                    </div>
                                </div>
                                <ul class="flex">
                                    <li class="mx-2">
                                        <div
                                            class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 relative">
                                            <label for="imageInput" class="cursor-pointer">
                                                <img class="w-12" src="../../public/add-circle-svgrepo-com.svg"
                                                    alt="Add Image" />
                                            </label>
                                            <input id="imageInput" type="file" accept="image/*"
                                                class="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                                        </div>
                                    </li>
                                    <li class="mx-2">
                                        <div
                                            class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 relative">
                                            <label for="imageInput" class="cursor-pointer">
                                                <img class="w-12" src="../../public/add-circle-svgrepo-com.svg"
                                                    alt="Add Image" />
                                            </label>
                                            <input id="imageInput" type="file" accept="image/*"
                                                class="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                                        </div>
                                    </li>
                                </ul>
                            </header>
                            <main class="mt-4 p-4">
                                <div>
                                    <div class="my-3">
                                        <input type="text"
                                            class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                            placeholder="Category Name" maxlength="22" x-model="productName" />
                                    </div>
                                    <div class="my-3">
                                        <input type="text"
                                            class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                            placeholder="SKU" x-model="price" />
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="staticModal" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>