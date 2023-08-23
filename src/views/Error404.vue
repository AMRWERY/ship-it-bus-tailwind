<template>
  <div class="grid h-screen px-4 place-content-center">
    <div class="text-center">
      <img class="w-auto h-56" src="../../public/uh-oh.svg">

      <h1 class="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Uh-oh!
      </h1>

      <p class="mt-4 text-gray-500">We can't find that page.</p>
      <router-link to="/" class="
          inline-block
          px-5
          py-3
          mt-6
          text-sm
          font-medium
          text-white
          bg-indigo-600
          rounded-xl
          hover:bg-indigo-700
          focus:outline-none focus:ring
        ">Go Back Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404Page',
};
</script>
