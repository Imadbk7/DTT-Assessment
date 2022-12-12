<template>
  <NavBar/>
  <RouterView/>
</template>


<script>

import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {NavBar},
}
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
  background: #E8E8E8 fixed;

}
</style>
