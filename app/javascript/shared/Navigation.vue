<template>
  <nav class="w-full flex justify-between bg-white py-4 px-8">
    <div>
      <span class="text-teal-500 font-bold">InertiaApp</span>
    </div>
    <div class="font-medium">
      <inertia-link href="/" class="text-gray-600 hover:text-gray-800 mr-2">Home</inertia-link>
      <inertia-link href="/notes" class="text-gray-600 hover:text-gray-800">Notes</inertia-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>