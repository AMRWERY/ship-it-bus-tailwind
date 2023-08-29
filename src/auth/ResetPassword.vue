<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Reset Password
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <FormKit type="form" id="my-form" class="space-y-6" :actions="false" @submit="resetPassword(email)">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <FormKit id="email" name="email" type="email" autocomplete="email" validation="required|email"
                            validation-label="e-mail" message-class="text-red-600" placeholder="your email"
                            outer-class="mb-5" label-class="block mb-1 font-bold text-sm"
                            inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                            input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            help-class="text-xs text-gray-500" v-model.trim="email" />
                    </div>
                </div>

                <div>
                    <button @click="resetPassword(email)"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Reset
                    </button>
                </div>
            </FormKit>

            <p class="mt-10 text-center text-sm text-gray-500">
                <router-link to="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Back to
                    Login</router-link>
            </p>
        </div>
    </div>
    <snackbar v-if="showSnackbar" :message="successMessage" />
</template>


<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import snackbar from '@/reusable/Snackbar.vue';

const email = ref('')
const showSnackbar = ref(false)
const successMessage = ref("Reset Password sent. check your inbox")

const store = useStore();

const resetPassword = () => {
    store.dispatch('resetUserPassword', {
        email: email.value,
    });
    showSnackbar.value = true;
};
</script>