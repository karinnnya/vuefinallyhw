<template>
  <div class="title">
    <h2 class="">
      {{ title }}
    </h2>
    <h3>
      {{ engTitle }}
    </h3>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap");

h3 {
  font-family: "Climate Crisis";
}
</style>

<script>
export default {
  name: "titleComponent",
  props: {
    title: String,
    engTitle: String,
  },
};
</script>
