<template>
    <div class="bg-gray-100">
        <div class="container mx-auto">
            <div role="article" class="bg-gray-100 py-12 md:px-8">
                <div class="px-4 xl:px-0 py-10">
                    <div class="flex flex-col lg:flex-row flex-wrap">
                        <div class="mt-4 lg:mt-0 lg:w-3/5">
                            <div>
                                <h1
                                    class="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12">
                                    {{ $t('f_a_q.frequently_asked_questions') }}</h1>
                            </div>
                        </div>
                        <div class="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                            <div class="pt-2 relative text-gray-600">
                                <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none mt-2">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <input type="text" id="table-search"
                                    class="block p-2 pe-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    :placeholder="$t('f_a_q.search')">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-6 xl:px-0">
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                        <div role="cell" class="bg-gray-100">
                            <div class="bg-white p-5 rounded-md relative h-full w-full">
                                <span><img class="bg-gray-200 p-2 mb-5 rounded-full"
                                        src="https://i.ibb.co/27R6nk5/home-1.png" /></span>
                                <h1 class="pb-4 text-2xl font-semibold">{{ $t('f_a_q.account_overview') }}</h1>
                                <div class="my-5">
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.first_time,_what_do_i_do_next?') }}
                                        </h4>
                                    </div>
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.changing_you_profile_picture_and_other_information') }}</h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.i_didnt_get_a_confirmation_email,_what_should_i_do_next') }}</h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.what_is_the_refund_policy_if_i_have_to_cancel_during_the_month') }}
                                        </h4>
                                    </div>
                                </div>
                                <router-link
                                    class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                    to="">
                                    <p>{{ $t('f_a_q.show_all') }}</p>
                                </router-link>
                            </div>
                        </div>
                        <div role="cell" class="bg-gray-100">
                            <div class="bg-white p-5 rounded-md relative h-full w-full">
                                <span><img class="bg-gray-200 p-2 mb-5 rounded-full"
                                        src="https://i.ibb.co/bdGyLYk/pricetags-1.png" /></span>
                                <h1 class="pb-4 text-2xl font-semibold">{{ $t('f_a_q.subscription_plans') }}</h1>
                                <div class="my-5">
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.first_time,_what_do_i_do_next?') }}
                                        </h4>
                                    </div>
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.changing_you_profile_picture_and_other_information') }}</h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.i_didnt_get_a_confirmation_email,_what_should_i_do_next') }}</h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.what_is_the_refund_policy_if_i_have_to_cancel_during_the_month') }}
                                        </h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.what_is_the_refund_policy?') }}
                                        </h4>
                                    </div>
                                </div>
                                <router-link
                                    class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                    to="">
                                    <p>{{ $t('f_a_q.show_all') }}</p>
                                </router-link>
                            </div>
                        </div>
                        <div role="cell" class="bg-gray-100">
                            <div class="bg-white p-5 rounded-md relative h-full w-full">
                                <span><img class="bg-gray-200 p-2 mb-5 rounded-full"
                                        src="https://i.ibb.co/GT4KHvJ/card-1.png" /></span>
                                <h1 class="pb-4 text-2xl font-semibold">{{ $t('f_a_q.payment_options') }}</h1>
                                <div class="my-5">
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.first_time,_what_do_i_do_next?') }}
                                        </h4>
                                    </div>
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.changing_you_profile_picture_and_other_information') }}</h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.i_didnt_get_a_confirmation_email,_what_should_i_do_next') }}</h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.what_is_the_refund_policy_if_i_have_to_cancel_during_the_month') }}
                                        </h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.what_is_the_refund_policy?') }}
                                        </h4>
                                    </div>
                                </div>
                                <router-link
                                    class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                    to="">
                                    <p>{{ $t('f_a_q.show_all') }}</p>
                                </router-link>
                            </div>
                        </div>
                        <div role="cell" class="bg-gray-100">
                            <div class="bg-white p-5 rounded-md relative h-full w-full">
                                <span><img class="bg-gray-200 p-2 mb-5 rounded-full"
                                        src="https://i.ibb.co/rG4r6NJ/notifications-1.png" /></span>
                                <h1 class="pb-4 text-2xl font-semibold">{{ $t('f_a_q.notification_settings') }}</h1>
                                <div class="my-5">
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.first_time,_what_do_i_do_next?') }}
                                        </h4>
                                    </div>
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.changing_you_profile_picture_and_other_information') }}</h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.i_didnt_get_a_confirmation_email,_what_should_i_do_next') }}</h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.what_is_the_refund_policy_if_i_have_to_cancel_during_the_month') }}
                                        </h4>
                                    </div>
                                </div>
                                <router-link
                                    class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                    to="">
                                    <p>{{ $t('f_a_q.show_all') }}</p>
                                </router-link>
                            </div>
                        </div>
                        <div role="cell" class="bg-gray-100">
                            <div class="bg-white p-5 rounded-md relative h-full w-full">
                                <span><img class="bg-gray-200 p-2 mb-5 rounded-full"
                                        src="https://i.ibb.co/HFC1hqn/people-1.png" /></span>
                                <h1 class="pb-4 text-2xl font-semibold">{{ $t('f_a_q.profile_preferences') }}</h1>
                                <div class="my-5">
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.first_time,_what_do_i_do_next?') }}
                                        </h4>
                                    </div>
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.changing_you_profile_picture_and_other_information') }}</h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.i_didnt_get_a_confirmation_email,_what_should_i_do_next') }}</h4>
                                    </div>
                                </div>
                                <router-link
                                    class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                    to="">
                                    <p>{{ $t('f_a_q.show_all') }}</p>
                                </router-link>
                            </div>
                        </div>
                        <div role="cell" class="bg-gray-100">
                            <div class="bg-white p-5 rounded-md relative h-full w-full">
                                <span><img class="bg-gray-200 p-2 mb-5 rounded-full"
                                        src="https://i.ibb.co/QX80fYm/lock-closed-1.png" /></span>
                                <h1 class="pb-4 text-2xl font-semibold">{{ $t('f_a_q.privacy_and_cookies') }}</h1>
                                <div class="my-5">
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.first_time,_what_do_i_do_next?') }}
                                        </h4>
                                    </div>
                                    <div
                                        class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.changing_you_profile_picture_and_other_information') }}</h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.i_didnt_get_a_confirmation_email,_what_should_i_do_next') }}</h4>
                                    </div>
                                    <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                        <h4 class="text-md text-gray-900 dark:text-gray-100">{{
                                            $t('f_a_q.what_is_the_refund_policy_if_i_have_to_cancel_during_the_month') }}
                                        </h4>
                                    </div>
                                </div>
                                <router-link
                                    class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                                    to="">
                                    <p>{{ $t('f_a_q.show_all') }}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FAQ',
}
</script>