<template>
    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
                <div class="py-8 flex flex-wrap md:flex-nowrap" v-for="message in allMails" :key="message">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-gray-700 dark:text-white">{{ message.firstName }} {{
                            message.lastName
                        }}</span>
                        <span class="font-semibold title-font text-blue-700">{{ message.selectedCountry }}</span>
                        <span class="mt-1 text-gray-500 text-sm dark:text-white">{{ formattedDate(message.date) }}</span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-2xl font-medium text-gray-900 dark:text-white title-font mb-2">{{ message.title }}
                        </h2>
                        <p class="leading-relaxed">{{ message.message }}</p>
                        <p class="leading-relaxed text-red-600 dark:text-orange-400">{{ message.email }}</p>
                        <ContactDialog :email="message.email" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { getDocs, collection, query } from 'firebase/firestore';
import { db } from '@/firebase/config';
import ContactDialog from '../reusable/ContactDialog.vue';

const allMails = ref([]);

const getMails = async () => {
    const querySnap = await getDocs(query(collection(db, 'contactMessages')));

    querySnap.forEach((doc) => {
        let message = {
            id: doc.id,
            ...doc.data(),
        };
        allMails.value.push(message);
    });
};

const formattedDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

onMounted(() => {
    getMails();
});
</script>