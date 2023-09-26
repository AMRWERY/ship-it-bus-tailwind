<template>
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
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <div class="sm:flex sm:items-start">
                                <div
                                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <i class="fa-solid fa-triangle-exclamation fa-xl h-6 w-6 text-red-600 mt-4"
                                        aria-hidden="true"></i>
                                </div>
                                <div class="mt-3 text-center sm:ms-4 sm:mt-0 sm:text-left">
                                    <div class="mt-2">
                                        <p as="h6" class="text-base font-semibold leading-6 text-gray-900">{{
                                            $t('message.are_you_sure?') }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <button type="button"
                                    class="inline-flex justify-center me-4 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="blockUser(userId)">
                                    {{ $t('btn.block') }}
                                </button>
                                <button type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    {{ $t('btn.no') }}
                                </button>
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
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

export default {
    name: 'UserDialog',

    data() {
        return {
            isOpen: false
        }
    },

    props: ['userId', 'isOpen'],

    components: { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle },

    methods: {
        closeModal() {
            this.isOpen = false
            this.$emit('close', false)
        },

        async blockUser(userId) {
            const userDocRef = doc(db, 'users', userId);

            try {
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    debugger
                    await updateDoc(userDocRef, {
                        blocked: true
                    });
                } else {
                    console.error('User document does not exist.');
                }
            } catch (error) {
                console.error('Error blocking user:', error);
            }
        },
    }
}
</script>  