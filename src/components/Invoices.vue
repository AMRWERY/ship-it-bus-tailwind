<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Card -->
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
                                        <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16"
                                            height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <!-- End Input -->
                        </div>

                        <!-- Table -->
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-slate-800">
                                <tr>
                                    <th scope="col" class="pl-6 py-3 text-left">
                                        <label for="hs-at-with-checkboxes-main" class="flex">
                                            <input type="checkbox"
                                                class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                id="hs-at-with-checkboxes-main">
                                            <span class="sr-only">Checkbox</span>
                                        </label>
                                    </th>

                                    <th scope="col" class="pr-6 py-3 text-left">
                                        <div class="flex items-center gap-x-2">
                                            <span
                                                class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Order
                                            </span>
                                        </div>
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-left">
                                        <div class="flex items-center gap-x-2">
                                            <span
                                                class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Date
                                            </span>
                                        </div>
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-left">
                                        <div class="flex items-center gap-x-2">
                                            <span
                                                class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Customer
                                            </span>
                                        </div>
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-left">
                                        <div class="flex items-center gap-x-2">
                                            <span
                                                class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Payment Status
                                            </span>
                                        </div>
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-left">
                                        <div class="flex items-center gap-x-2">
                                            <span
                                                class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Payment Method
                                            </span>
                                        </div>
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-right"></th>
                                </tr>
                            </thead>

                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="pl-6 py-2">
                                            <label for="hs-at-with-checkboxes-1" class="flex">
                                                <input type="checkbox"
                                                    class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    id="hs-at-with-checkboxes-1">
                                                <span class="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="pr-6 py-2">
                                            <a class="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                                                href="#">#35463</a>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <span class="text-sm text-gray-600 dark:text-gray-400">Aug 17, 2020, 5:48
                                                (ET)</span>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <span class="text-sm text-gray-600 dark:text-gray-400">Jase Marley</span>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <span
                                                class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                                Paid
                                            </span>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <div class="flex items-center gap-x-2">
                                                <svg class="w-5 h-5" width="400" height="248" viewBox="0 0 400 248"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip05asd)">
                                                        <path d="M254 220.8H146V26.4H254V220.8Z" fill="#FF5F00" />
                                                        <path
                                                            d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z"
                                                            fill="#EB001B" />
                                                        <path
                                                            d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z"
                                                            fill="#F79E1B" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip05asd">
                                                            <rect width="400" height="247.2" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span class="text-sm text-gray-600 dark:text-gray-400">•••• 4242</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-1.5 flex justify-end">
                                            <div class="group inline-flex items-center">
                                                <div class="hs-tooltip inline-block">
                                                    <div class="px-4 py-1.5">
                                                        <router-link
                                                            class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                                            to="">
                                                            <button type="button"
                                                                class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <i class="fa-regular fa-pen-to-square"></i>
                                                            </button>
                                                        </router-link>
                                                    </div>
                                                </div>
                                                <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
                                                    <div class="py-1.5">
                                                        <router-link
                                                            class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                                            to="">
                                                            <button type="button"
                                                                class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white  focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <i class="fa-regular fa-trash-can"></i>
                                                            </button>
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="pl-6 py-2">
                                            <label for="hs-at-with-checkboxes-3" class="flex">
                                                <input type="checkbox"
                                                    class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    id="hs-at-with-checkboxes-3">
                                                <span class="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="pr-6 py-2">
                                            <a class="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                                                href="#">#12453</a>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <span class="text-sm text-gray-600 dark:text-gray-400">Aug 17, 2020, 1:54
                                                (ET)</span>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <span class="text-sm text-gray-600 dark:text-gray-400">Nicky Olvsson</span>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <span
                                                class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-green-200">
                                                <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
                                                    </path>
                                                </svg>
                                                Pending
                                            </span>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <div class="flex items-center gap-x-2">
                                                <svg class="w-5 h-5" width="400" height="248" viewBox="0 0 400 248"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip01gj493)">
                                                        <path d="M254 220.8H146V26.4H254V220.8Z" fill="#FF5F00" />
                                                        <path
                                                            d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z"
                                                            fill="#EB001B" />
                                                        <path
                                                            d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z"
                                                            fill="#F79E1B" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip01gj493">
                                                            <rect width="400" height="247.2" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span class="text-sm text-gray-600 dark:text-gray-400">•••• 3535</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-1.5 flex justify-end">
                                            <div class="group inline-flex items-center">
                                                <div class="hs-tooltip inline-block">
                                                    <div class="px-4 py-1.5">
                                                        <router-link
                                                            class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                                            to="">
                                                            <button type="button"
                                                                class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <i class="fa-regular fa-pen-to-square"></i>
                                                            </button>
                                                        </router-link>
                                                    </div>
                                                </div>
                                                <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
                                                    <div class="py-1.5">
                                                        <router-link
                                                            class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                                            to="">
                                                            <button type="button"
                                                                class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white  focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <i class="fa-regular fa-trash-can"></i>
                                                            </button>
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="pl-6 py-2">
                                            <label for="hs-at-with-checkboxes-4" class="flex">
                                                <input type="checkbox"
                                                    class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    id="hs-at-with-checkboxes-4">
                                                <span class="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="pr-6 py-2">
                                            <a class="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                                                href="#">#84223</a>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <span class="text-sm text-gray-600 dark:text-gray-400">Aug 17, 2020, 1:04
                                                (ET)</span>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <span class="text-sm text-gray-600 dark:text-gray-400">David Nunez</span>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <span
                                                class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200">
                                                <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z">
                                                    </path>
                                                </svg>
                                                Declined
                                            </span>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <div class="flex items-center gap-x-2">
                                                <svg class="w-5 h-5" width="400" height="400" viewBox="0 0 400 400"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip2)">
                                                        <path
                                                            d="M127.346 386.446L134.276 342.434L118.841 342.076H45.1374L96.3574 17.3073C96.5099 16.315 97.0139 15.4105 97.7775 14.7588C98.5411 14.107 99.5136 13.7514 100.518 13.7567H224.792C266.048 13.7567 294.52 22.3419 309.385 39.2872C316.354 47.2365 320.793 55.5435 322.939 64.6852C325.191 74.2773 325.231 85.7376 323.032 99.7151L322.873 100.735V109.691L329.842 113.64C335.162 116.335 339.944 119.981 343.952 124.398C349.914 131.194 353.769 139.833 355.399 150.074C357.081 160.607 356.525 173.14 353.769 187.33C350.589 203.652 345.449 217.868 338.506 229.501C332.381 239.921 324.145 248.947 314.327 255.998C305.106 262.543 294.149 267.512 281.762 270.691C269.758 273.818 256.072 275.395 241.061 275.395H231.39C224.474 275.395 217.756 277.885 212.483 282.35C207.218 286.863 203.725 293.098 202.626 299.945L201.898 303.906L189.656 381.478L189.099 384.327C188.953 385.227 188.702 385.678 188.331 385.983C187.971 386.277 187.523 386.44 187.059 386.446H127.346Z"
                                                            fill="#253B80" />
                                                        <path
                                                            d="M336.44 101.769C336.069 104.14 335.645 106.565 335.168 109.056C318.779 193.199 262.71 222.267 191.1 222.267H154.639C145.882 222.267 138.502 228.626 137.137 237.265L118.47 355.656L113.183 389.216C112.973 390.547 113.053 391.908 113.419 393.205C113.785 394.502 114.428 395.704 115.303 396.729C116.178 397.754 117.265 398.577 118.488 399.142C119.712 399.707 121.044 399.999 122.391 400H187.059C194.717 400 201.222 394.436 202.428 386.884L203.064 383.598L215.239 306.331L216.021 302.091C217.213 294.513 223.732 288.948 231.39 288.948H241.061C303.715 288.948 352.762 263.511 367.097 189.9C373.086 159.15 369.986 133.473 354.14 115.415C349.118 109.829 343.12 105.205 336.44 101.769V101.769Z"
                                                            fill="#179BD7" />
                                                        <path
                                                            d="M319.295 94.9324C314.063 93.4186 308.739 92.2371 303.357 91.3949C292.723 89.7606 281.975 88.9764 271.215 89.0499H173.81C170.103 89.047 166.517 90.3704 163.701 92.7809C160.885 95.1913 159.024 98.5298 158.455 102.193L137.733 233.436L137.137 237.265C137.783 233.087 139.902 229.278 143.113 226.527C146.323 223.776 150.411 222.265 154.639 222.267H191.1C262.71 222.267 318.779 193.186 335.168 109.056C335.658 106.565 336.069 104.14 336.439 101.769C332.115 99.5009 327.608 97.5997 322.965 96.085C321.748 95.6812 320.525 95.2969 319.295 94.9324V94.9324Z"
                                                            fill="#222D65" />
                                                        <path
                                                            d="M158.455 102.193C159.019 98.5287 160.879 95.1887 163.697 92.7795C166.515 90.3702 170.103 89.0516 173.81 89.0631H271.216C282.755 89.0631 293.527 89.8183 303.357 91.4082C310.01 92.4537 316.57 94.0174 322.979 96.085C327.815 97.6881 332.306 99.5827 336.453 101.769C341.328 70.6737 336.413 49.5021 319.6 30.331C301.065 9.22565 267.612 0.189941 224.805 0.189941H100.531C91.7866 0.189941 84.3275 6.54938 82.9761 15.2009L31.2129 343.308C30.9718 344.832 31.0635 346.389 31.4818 347.874C31.9 349.358 32.6349 350.734 33.6358 351.908C34.6367 353.081 35.8799 354.024 37.2799 354.671C38.6799 355.318 40.2034 355.654 41.7457 355.656H118.47L137.734 233.436L158.455 102.193Z"
                                                            fill="#253B80" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip2">
                                                            <rect width="400" height="400" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span class="text-sm text-gray-600 dark:text-gray-400">••••@gmail.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap">
                                        <div class="px-6 py-1.5 flex justify-end">
                                            <div class="group inline-flex items-center">
                                                <div class="hs-tooltip inline-block">
                                                    <div class="px-4 py-1.5">
                                                        <router-link
                                                            class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                                            to="">
                                                            <button type="button"
                                                                class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <i class="fa-regular fa-pen-to-square"></i>
                                                            </button>
                                                        </router-link>
                                                    </div>
                                                </div>
                                                <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
                                                    <div class="py-1.5">
                                                        <router-link
                                                            class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                                            to="">
                                                            <button type="button"
                                                                class="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white  focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <i class="fa-regular fa-trash-can"></i>
                                                            </button>
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- End Table -->

                        <!-- Footer -->
                        <div
                            class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                            <div class="max-w-sm space-y-3">
                                <select
                                    class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option selected>9</option>
                                    <option>20</option>
                                </select>
                            </div>

                            <div>
                                <div class="inline-flex gap-x-2">
                                    <button type="button"
                                        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        Prev
                                    </button>

                                    <button type="button"
                                        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                        Next
                                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- End Footer -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Card -->
    </div>
</template>

<script>
import('preline')

export default {
    name: 'Invoices'
}
</script>