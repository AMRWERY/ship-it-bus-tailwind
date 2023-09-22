<template>
    <a href="#" class="text-indigo-500 dark:text-white inline-flex items-center mt-4" @click="openModal">
        {{ $t('mail.reply_now') }}
    </a>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-100 p-6 pt-0 text-start align-middle shadow-xl transition-all">
                            <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20"
                                @submit.prevent="submitForm">
                                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div class="sm:col-span-2">
                                        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">{{
                                            $t('mail.email') }}</label>
                                        <div class="mt-2.5">
                                            <input type="email" name="email" id="email" autocomplete="email" :value="email"
                                                readonly
                                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="title" class="block text-sm font-semibold leading-6 text-gray-900">{{
                                            $t('mail.title') }}</label>
                                        <div class="mt-2.5">
                                            <input name="title" id="title" :placeholder="$t('mail.title')" v-model="title"
                                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">{{
                                            $t('mail.message') }}</label>
                                        <div class="mt-2.5">
                                            <textarea name="message" id="message" rows="4" :placeholder="$t('mail.message')"
                                                v-model="message"
                                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-10">
                                    <button type="submit" @click="closeModal"
                                        class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                                            $t('btn.reply') }}</button>
                                </div>
                            </form>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  

<script setup>
import { ref, defineProps } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
} from '@headlessui/vue'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';


const isOpen = ref(false)

const props = defineProps(['email'])

function closeModal() {
    isOpen.value = false
}

function openModal() {
    isOpen.value = true
}

const title = ref('')
const message = ref('')

const submitForm = async () => {
    const colRef = collection(db, "replyMail")

    const dataObj = {
        email: props.email,
        title: title.value,
        message: message.value,
    }

    const docRef = await addDoc(colRef, dataObj)
    console.log(docRef.id)

    clearForm();
};

const clearForm = () => {
    title.value = "";
    message.value = "";
};
</script>