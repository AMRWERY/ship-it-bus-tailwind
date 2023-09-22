<template>
    <div>
        <button type="button" id="hs-as-table-table-export-dropdown" class="absolute bottom-2 end-2 float-end"
            @click="openModal">
            <i class="fa-solid fa-pen-to-square" style="color: #9288F8"></i>
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
                            class="w-full max-w-2xl sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-100 p-6 text-left align-middle shadow-xl transition-all">
                            <div class="flex items-start justify-between pb-4 pt-2 rounded-t dark:border-gray-600">
                                <div class="text-center w-full">
                                    <DialogTitle as="h3" class="text-xl font-semibold text-gray-900 dark:text-black">
                                        {{ title }}
                                    </DialogTitle>
                                </div>
                                <button type="button" @click="closeModal"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <i class="fa-solid fa-xmark fa-xl w-3 h-3"></i>
                                </button>
                            </div>
                            <header class="flex flex-col justify-center items-center">
                                <div class="relative" x-show="card === 'front'"
                                    x-transition:enter="transition ease-out duration-300"
                                    x-transition:enter-start="opacity-0 transform scale-90"
                                    x-transition:enter-end="opacity-100 transform scale-100">
                                    <img class="w-full h-auto" :src="img">
                                </div>
                                <ul class="flex">
                                    <li class="mx-2">
                                        <div
                                            class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 relative">
                                            <label for="imageInput" class="cursor-pointer">
                                                <img class="w-12" src="/add-circle-svgrepo-com.svg" />
                                            </label>
                                            <input id="imageInput" type="file" accept="image/*"
                                                class="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                                        </div>
                                    </li>
                                </ul>
                            </header>
                            <div class="mt-2">
                                <main class="mt-4">
                                    <div>
                                        <div class="my-3">
                                            <label for="category"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-start">
                                                {{ $t('categories.category_name') }}</label>
                                            <input type="text" v-model.trim="title"
                                                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                                placeholder="Category Name" maxlength="22" x-model="productName" />
                                        </div>
                                    </div>
                                </main>
                            </div>

                            <div
                                class="flex items-center float-left p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                                <button type="button" @click="updateCategory"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{
                                        $t('btn.edit') }}</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script>
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

export default {
    name: 'EditCategoryDialog',

    data: () => ({
        isOpen: false,
        title: "",
        img: '',
        categoryData: null,
        id: String,
    }),

    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle
    },

    props: ["category"],

    methods: {
        closeModal() {
            this.isOpen = false
        },
        openModal() {
            this.isOpen = true
        },
        updateCategory() {
            const productRef = doc(db, "categories", this.category?.id);
            const updateData = {
                title: this.title,
                img: this.img
            };

            updateDoc(productRef, updateData)
                .then(() => {
                    console.log("Document updated successfully");
                })
                .catch((error) => {
                    console.error("Error updating document: ", error);
                });
        },
        async getCategory() {
            const docSnap = await getDoc(doc(db, "categories", this.category?.id));
            if (docSnap.exists()) {
                this.categoryData = docSnap.data();
                this.title = this.categoryData.title;
                this.img = this.categoryData.img;
            } else {
                console.log("Document does not exist");
            }
        },
    },

    mounted() {
        this.getCategory();
    },
}
</script>