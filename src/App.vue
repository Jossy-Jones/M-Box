<template>
  <Header></Header>
  <router-view />
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "M-box",
  components: { Header },
};
</script>
