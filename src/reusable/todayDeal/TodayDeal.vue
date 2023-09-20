<template>
    <div>
        <button @click="openModal"
            class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">
            {{ $t('btn.deal_of_today') }}
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
                            class="w-full max-w-3xl sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                            <div class="flex items-start justify-between pb-4 pt-2 rounded-t dark:border-gray-600">
                                <div class="text-center w-full">
                                    <DialogTitle as="h3" class="text-xl font-semibold text-gray-900 dark:text-white">
                                        {{ $t('deal.today_deal') }}
                                    </DialogTitle>
                                </div>
                                <button type="button" @click="closeModal"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <i class="fa-solid fa-xmark fa-xl w-3 h-3"></i>
                                </button>
                            </div>
                            <div class="mt-2">
                                <main class="mt-4">
                                    <div class="container max-w-full">
                                        <div class="lg:w-4/5 mx-auto flex flex-wrap" v-if="todayDeal">
                                            <img alt="ecommerce"
                                                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                                :src="todayDeal.productImg">
                                            <div class="lg:w-1/2 w-full lg:ps-10 lg:py-6 mt-6 lg:mt-0">
                                                <div class="flex justify-between text-base font-medium text-gray-900">
                                                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{
                                                        todayDeal.title }}</h1>
                                                    <div class="flex gap-2 mt-2">
                                                        <p class="text-md font-medium text-gray-500 line-through">${{
                                                            todayDeal.originalPrice }}
                                                        </p>
                                                        <p class="text-md font-medium text-gray-900">${{ todayDeal.price
                                                        }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="flex mb-4">
                                                    <span class="flex items-center">
                                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                        <span class="text-gray-600 ms-3">4 {{ $t('deal.reviews') }}</span>
                                                    </span>
                                                    <span class="flex ms-3 ps-3 py-2 border-s-2 border-gray-200 space-x-2s">
                                                        <a class="text-gray-500 me-2">
                                                            <i class="fa-brands fa-facebook-f"></i>
                                                        </a>
                                                        <a class="text-gray-500 me-2">
                                                            <i class="fa-brands fa-x-twitter"></i>
                                                        </a>
                                                        <a class="text-gray-500">
                                                            <i class="fa-regular fa-comment"></i>
                                                        </a>
                                                    </span>
                                                </div>
                                                <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape
                                                    chillwave tumeric
                                                    sriracha
                                                    taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
                                                    cornhole
                                                    raw denim forage
                                                    brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue
                                                    bottle austin listicle
                                                    pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
                                                </p>
                                                <div class="flex mt-6 items-center pb-5 border-gray-100 mb-5">
                                                    <div class="flex ms-6 items-center">
                                                        <div class="flex space-s-4">
                                                            <div class="flex items-center">
                                                                <span class="text-4xl text-orange-400">{{ hours
                                                                }}</span>
                                                                <p class="ms-1 text-sm">{{ $t('deal.hours') }}</p>
                                                            </div>
                                                            <div class="flex items-center">
                                                                <span class="text-4xl text-orange-400">{{ minutes
                                                                }}</span>
                                                                <p class="ms-1 text-sm">{{ $t('deal.minutes') }}</p>
                                                            </div>
                                                            <div class="flex items-center">
                                                                <span class="text-4xl text-orange-400">{{ seconds
                                                                }}</span>
                                                                <p class="ms-1 text-sm">{{ $t('deal.seconds') }}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <AddDeal />
                                            </div>
                                        </div>
                                        <div v-if="todayDealExpired" class="m-5">
                                            <p class="text-center text-red-500">{{ $t('deal.deal_has_been_expired') }}</p>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
} from '@headlessui/vue'
import { useStore } from 'vuex'
import AddDeal from './AddDeal.vue'

const isOpen = ref(false)
const hours = ref('')
const minutes = ref('')
const seconds = ref('')

const store = useStore()

store.dispatch('fetchDeals')

const todayDeal = computed(() => store.getters.getAllDeals[0]);

const todayDealExpired = computed(() => {
    if (todayDeal.value && todayDeal.value.endDate) {
        const now = new Date().getTime();
        const endDate = new Date(todayDeal.value.endDate).getTime();
        return endDate <= now;
    }
    return false;
});

const openModal = () => {
    isOpen.value = true;
};

const closeModal = () => {
    isOpen.value = false;
};

const updateClock = () => {
    const now = new Date().getTime();
    const timeLeft = dealExpiry - now;
    if (timeLeft > 0) {
        hours.value = String(Math.floor(timeLeft / (1000 * 60 * 60))).padStart(2, '0');
        minutes.value = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        seconds.value = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');
    } else {
        clearInterval(timer);
        hours.value = '00';
        minutes.value = '00';
        seconds.value = '00';
    }
}

const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    if (todayDeal.value && todayDeal.value.endDate) {
        const endDate = new Date(todayDeal.value.endDate).getTime();
        const timeLeft = endDate - now;
        if (timeLeft <= 0) {
            clearInterval(timer);
            return;
        }
        const hoursRemaining = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeLeft % (1000 * 60)) / 1000);
        hours.value = String(hoursRemaining).padStart(2, '0');
        minutes.value = String(minutesRemaining).padStart(2, '0');
        seconds.value = String(secondsRemaining).padStart(2, '0');
    }
};

calculateTimeRemaining();

const timer = setInterval(calculateTimeRemaining, 1000);

onMounted(() => {
    calculateTimeRemaining();
});
</script>
