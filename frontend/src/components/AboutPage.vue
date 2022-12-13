<template>
  <h1>About DTT real estate</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
    Lorem Ipsum</p>
  <h1>Design and Development</h1>
  <img src="../.././Frontend_Internship_Test_Slices/img_logo_dtt@3x.png" alt="null"/>
  <p>By DTT</p>
  <a href="https://www.d-tt.nl/">www.d-tt.nl</a>
</template>

<script>
export default {
  name: "AboutPage.vue",

  data() {
    return {
      msg: 'www.d-tt.nl'
    };
  },

  methods: {
    add() {
      return 2
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

h1 {
  font-family: "Open Sans", sans-serif;
}

p {
  font-family: "Open Sans", sans-serif;
}

</style>
