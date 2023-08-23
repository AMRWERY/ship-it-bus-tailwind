<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div
                        class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                        <!-- Header -->
                        <div
                            class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                            <!-- Input -->
                            <div class="sm:col-span-1">
                                <label for="hs-as-table-product-review-search" class="sr-only">Search</label>
                                <div class="relative">
                                    <input type="text" id="hs-as-table-product-review-search"
                                        name="hs-as-table-product-review-search"
                                        class="py-2 px-3 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        placeholder="Search">
                                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                            </div>
                            <!-- End Input -->

                            <div class="sm:col-span-2 md:grow">
                                <div class="flex justify-end gap-x-2">
                                    <div class="hs-dropdown relative inline-block [--placement:bottom-right]">
                                        <AddCategoryDialog />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                <div v-for="category in getAllCategories" :key="category.id" class="group relative">
                                    <button @click="onDeleteCategory(category)" type="button"
                                        class="absolute top-2 right-2 mx-3 mt-3 z-10">
                                        <i class="fa-solid fa-trash" style="color: #F31559"></i>
                                    </button>
                                    <div
                                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img :src="category.img"
                                            class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div class="mt-4 flex justify-between">
                                        <div>
                                            <h3 class="text-lg text-gray-700">
                                                <span aria-hidden="true" class="absolute inset-0" />
                                                {{ category.title }}
                                            </h3>
                                        </div>
                                        <div>
                                            <div class="mt-12">
                                                <EditCategoryDialog :category="category" @update-category="updateCategory($event)" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import AddCategoryDialog from '@/reusable/AddCategoryDialog.vue'
import EditCategoryDialog from '@/reusable/EditCategoryDialog.vue'

export default {
    name: 'Categories',

    data() {
        return {
            categories: []
        }
    },

    components: { AddCategoryDialog, EditCategoryDialog },

    computed: {
        ...mapGetters(['getAllCategories']),
    },

    methods: {
        ...mapActions(["fetchCategories", 'deleteCategory']),
        onDeleteCategory(category) {
            // debugger
            this.deleteCategory(category);
        },
    },

    watch: {
        getAllCategories(newCategories) {
            this.categories = newCategories;
        },
    },

    mounted() {
        this.fetchCategories();
    },
}
</script>