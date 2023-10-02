<template>
    <template v-if="isAuthenticated">
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:ps-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start">
                        <button aria-controls="default-sidebar" type="button"
                            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            @click="toggleSidebar">
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                                </path>
                            </svg>
                        </button>
                        <router-link to="" class="flex ms-2 md:me-24">
                            <img src="../assets/shopping-bags-svgrepo-com.svg" class="w-10 h-10 me-1">
                            <span
                                class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Ship-IT</span>
                        </router-link>
                    </div>

                    <div class="flex items-center">
                        <div class="flex items-center me-3 space-s-2.5">
                            <div>
                                <Menu as="div" class="relative me-3">
                                    <div>
                                        <MenuButton
                                            class="rounded-full p-1 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span class="absolute -inset-1.5" />
                                            <i class="fa-solid fa-earth-africa fa-xl me-2"></i>
                                        </MenuButton>
                                    </div>
                                    <transition enter-active-class="transition ease-out duration-100"
                                        enter-from-class="transform opacity-0 scale-95"
                                        enter-to-class="transform opacity-100 scale-100"
                                        leave-active-class="transition ease-in duration-75"
                                        leave-from-class="transform opacity-100 scale-100"
                                        leave-to-class="transform opacity-0 scale-95">
                                        <MenuItems
                                            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <MenuItem v-slot="{ active }">
                                            <a href="#"
                                                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                                @click="switchLanguage('ar')">
                                                <div class="inline-flex items-center">
                                                    <img src="/palestine-flag-circular.svg"
                                                        class="h-3.5 w-3.5 rounded-full me-2">
                                                    {{ $t('lang.arabic') }}
                                                </div>
                                            </a>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <a href="#"
                                                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                                @click="switchLanguage('en')">
                                                <div class="inline-flex items-center">
                                                    <img src="/en.svg" class="h-3.5 w-3.5 rounded-full me-2">
                                                    {{ $t('lang.english') }}
                                                </div>
                                            </a>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <a href="#"
                                                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                                @click="switchLanguage('ge')">
                                                <div class="inline-flex items-center">
                                                    <img src="/ge.svg" class="h-3.5 w-3.5 rounded-full me-2">
                                                    {{ $t('lang.german') }}
                                                </div>
                                            </a>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <a href="#"
                                                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                                @click="switchLanguage('du')">
                                                <div class="inline-flex items-center">
                                                    <img src="https://justfields.com/storage/projects/7M5rV059/ne.png"
                                                        class="h-3.5 w-3.5 rounded-full me-2">
                                                    {{ $t('lang.deutsch') }}
                                                </div>
                                            </a>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <a href="#"
                                                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                                @click="switchLanguage('it')">
                                                <div class="inline-flex items-center">
                                                    <img src="/it.svg" class="h-3.5 w-3.5 rounded-full me-2">
                                                    {{ $t('lang.italian') }}
                                                </div>
                                            </a>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <a href="#"
                                                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                                @click="switchLanguage('fr')">
                                                <div class="inline-flex items-center">
                                                    <img src="https://justfields.com/storage/projects/7M5rV059/fr.png"
                                                        class="h-3.5 w-3.5 rounded-full me-2">
                                                    {{ $t('lang.french') }}
                                                </div>
                                            </a>
                                            </MenuItem>
                                        </MenuItems>
                                    </transition>
                                </Menu>
                            </div>

                            <!-- toggle theme -->
                            <div>
                                <button type="button" @click="toggleTheme"
                                    class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <i
                                        :class="theme === 'dark' ? 'fa-solid fa-sun fa-xl dark:text-white' : 'fa-solid fa-moon fa-xl dark:text-white'"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


        <aside ref="defaultSidebar"
            class="fixed top-0 sm:right-0 clear-start z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div class="h-full ps-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul class="space-y-2 font-medium mt-16">
                    <div class="mb-4 px-4">
                        <p class="pl-4 text-sm font-semibold mb-1 dark:text-white">{{ $t('mainlayout.main') }}</p>
                        <router-link to="/home" @click="selectedTab = 'dashboard'"
                            :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'dashboard' }]">
                            <i class="fa-solid fa-chart-line fa-lg me-2"></i>
                            <span class="text-gray-700 dark:text-white">{{ $t('mainlayout.dashboard') }}</span>
                        </router-link>

                        <router-link to="/invoices" @click="selectedTab = 'invoices'"
                            :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'invoices' }]">
                            <i class="fa-solid fa-arrow-trend-up fa-lg me-2"></i>
                            <span class="text-gray-700 dark:text-white">{{ $t('mainlayout.invoices') }}</span>
                        </router-link>

                        <router-link to="/orders" @click="selectedTab = 'orders'"
                            :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'orders' }]">
                            <i class="fa-solid fa-arrow-up-wide-short fa-lg me-2"></i>
                            <span class="text-gray-700 dark:text-white">{{ $t('mainlayout.orders') }}</span>
                        </router-link>
                    </div>

                    <div class="mb-4 px-4">
                        <p class="pl-4 text-sm font-semibold mb-1 dark:text-white">{{ $t('mainlayout.products') }}</p>
                        <router-link to="/products" @click="selectedTab = 'products'"
                            :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'products' }]">
                            <i class="fa-solid fa-arrow-up-wide-short fa-lg me-2"></i>
                            <span class="text-gray-700 dark:text-white">{{ $t('mainlayout.view_products') }}</span>
                        </router-link>

                        <router-link to="/categories" @click="selectedTab = 'categories'"
                            :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'categories' }]">
                            <i class="fa-solid fa-list-ol fa-lg me-2"></i>
                            <span class="text-gray-700 dark:text-white">{{ $t('mainlayout.view_categories') }}</span>
                        </router-link>
                    </div>

                    <div class="mb-4 px-4">
                        <p class="pl-4 text-sm font-semibold mb-1 dark:text-white">{{ $t('mainlayout.misc') }}</p>
                        <router-link to="/users" @click="selectedTab = 'users'"
                            :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'users' }]">
                            <i class="fa-solid fa-users fa-lg me-2"></i>
                            <span class="text-gray-700 dark:text-white">{{ $t('mainlayout.users') }}</span>
                        </router-link>

                        <router-link to="/mail" @click="selectedTab = 'mail'"
                            :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'mail' }]">
                            <i class="fa-solid fa-envelope fa-lg me-2"></i>
                            <span class="text-gray-700 dark:text-white">{{ $t('mainlayout.mail') }}</span>
                        </router-link>

                        <router-link to="/terms-and-conditions" @click="selectedTab = 'terms-and-conditions'"
                            :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'terms-and-conditions' }]">
                            <i class="fa-solid fa-thumbtack fa-lg me-2"></i>
                            <span class="text-gray-700 dark:text-white">{{ $t('mainlayout.terms') }} & {{
                                $t('mainlayout.conditions')
                            }}</span>
                        </router-link>

                        <router-link to="/f-a-q" @click="selectedTab = 'f-a-q'"
                            :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'f-a-q' }]">
                            <i class="fa-solid fa-circle-question fa-lg me-2"></i>
                            <span class="text-gray-700 dark:text-white">{{ $t('mainlayout.faq') }}</span>
                        </router-link>

                        <router-link to="/privacy-policy" @click="selectedTab = 'privacy-policy'"
                            :class="['w-full', 'flex', 'items-center', 'text-blue-400', 'h-10', 'pl-4', 'rounded-lg', 'cursor-pointer', { 'bg-gray-200': selectedTab === 'privacy-policy' }]">
                            <i class="fa-solid fa-circle-info fa-lg me-2"></i>
                            <span class="text-gray-700 dark:text-white">{{ $t('mainlayout.privacy_policy') }}</span>
                        </router-link>

                        <router-link to="/" @click="logout"
                            class="w-full flex items-center text-blue-400 h-10 pl-4 rounded-lg cursor-pointer">
                            <i class="fa-solid fa-arrow-right-from-bracket fa-lg me-2"></i>
                            <span class="text-gray-700 dark:text-white">{{ $t('mainlayout.log_out') }}</span>
                        </router-link>
                    </div>
                </ul>
            </div>
        </aside>
    </template>

    <div class="flex items-center" v-else>
        <div class="flex items-center m-3 space-s-2.5">
            <div>
                <Menu as="div" class="relative ms-36">
                    <div>
                        <MenuButton
                            class="rounded-full p-1 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span class="absolute -inset-1.5" />
                            <i class="fa-solid fa-earth-africa fa-xl me-2"></i>
                        </MenuButton>
                    </div>
                    <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                @click="switchLanguage('ar')">
                                <div class="inline-flex items-center">
                                    <img src="/palestine-flag-circular.svg" class="h-3.5 w-3.5 rounded-full me-2">
                                    {{ $t('lang.arabic') }}
                                </div>
                            </a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                @click="switchLanguage('en')">
                                <div class="inline-flex items-center">
                                    <img src="/en.svg" class="h-3.5 w-3.5 rounded-full me-2">
                                    {{ $t('lang.english') }}
                                </div>
                            </a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                @click="switchLanguage('ge')">
                                <div class="inline-flex items-center">
                                    <img src="/ge.svg" class="h-3.5 w-3.5 rounded-full me-2">
                                    {{ $t('lang.german') }}
                                </div>
                            </a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                @click="switchLanguage('du')">
                                <div class="inline-flex items-center">
                                    <img src="https://justfields.com/storage/projects/7M5rV059/ne.png"
                                        class="h-3.5 w-3.5 rounded-full me-2">
                                    {{ $t('lang.deutsch') }}
                                </div>
                            </a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                @click="switchLanguage('it')">
                                <div class="inline-flex items-center">
                                    <img src="../../public/it.svg" class="h-3.5 w-3.5 rounded-full me-2">
                                    {{ $t('lang.italian') }}
                                </div>
                            </a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                                @click="switchLanguage('fr')">
                                <div class="inline-flex items-center">
                                    <img src="https://justfields.com/storage/projects/7M5rV059/fr.png"
                                        class="h-3.5 w-3.5 rounded-full me-2">
                                    {{ $t('lang.french') }}
                                </div>
                            </a>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>

            <!-- toggle theme -->
            <div>
                <button type="button" @click="toggleTheme"
                    class="rounded-full p-1 text-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <i :class="theme === 'dark' ? 'fa-solid fa-sun fa-xl' : 'fa-solid fa-moon fa-xl'"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="p-4 sm:ms-64">
        <div class="p-4 border-gray-200 rounded-lg dark:border-gray-700">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted, inject } from 'vue';
import { Drawer } from 'flowbite';
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

const store = useStore();
let drawer = null;
let defaultSidebar = ref(null);
const selectedTab = ref('');

const isAuthenticated = computed(() => {
    const isAuthenticatedValue = store.getters.isAuthenticated;
    return isAuthenticatedValue;
});


const logout = async () => {
    try {
        await store.dispatch('logout');
    } catch (error) {
        console.log(error);
    }
}

const toggleSidebar = () => {
    drawer.toggle();
}

watchEffect(() => {
    if (defaultSidebar.value && isAuthenticated.value) {
        drawer = new Drawer(defaultSidebar.value);
    } else if (defaultSidebar.value && !isAuthenticated.value) {
        drawer.hide()
    }
})

const config = inject(Symbol.for('FormKitConfig'))

const switchLanguage = (newLang) => {
    sessionStorage.setItem('currentLang', newLang);
    $i18n.locale.value = newLang;
    updateLanguageClassInBody(newLang);
};

const updateLanguageClassInBody = (lang) => {
    const body = document.querySelector("body");
    if (lang === "ar") {
        body.classList.remove("ltr");
        body.classList.add("rtl");
    } else {
        body.classList.remove("rtl");
        body.classList.add("ltr");
    }
};

const $i18n = useI18n()

onMounted(() => {
    updateLanguageClassInBody(sessionStorage.getItem("currentLang") || "en");
});

watchEffect(() => {
    if (defaultSidebar.value && isAuthenticated.value) {
        drawer = new Drawer(defaultSidebar.value);
    } else if (defaultSidebar.value && !isAuthenticated.value) {
        drawer.hide()
    }
});

const theme = ref('light');

const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    sessionStorage.setItem('theme', theme.value);
    updateThemeClasses(theme.value);
};

const updateThemeClasses = (newTheme) => {
    const body = document.querySelector('body');
    if (newTheme === 'dark') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
};

updateThemeClasses(sessionStorage.getItem('theme') || 'light');
</script>


<style scoped>
@media (max-width: 768px) {
    .sidebar {
        display: none;
    }
}
</style>
