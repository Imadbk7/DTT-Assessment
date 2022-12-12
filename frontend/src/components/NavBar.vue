<template>
  <div class="nav">
    <input type="checkbox" id="nav-check">
    <div class="nav-header">
      <div class="nav-title">
        <img src="../.././Frontend_Internship_Test_Slices/img_logo_dtt@3x.png" width="50%" height="30%">
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="nav-links">
      <router-link to="/">Houses</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar.vue"
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}


.nav .nav-links .active-link {
  color: black;
  border-bottom: 2px solid red;
  font-weight: bold;
  font-family: Verdana;
}

.nav {
  height: 75px;
  width: 100%;
  background-color: white;
  position: relative;
}

.nav > * {
  margin-top: 1rem;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #2f2f2f;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
  font-family: Verdana;

}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #2f2f2f;
}

.nav > .nav-links > a:hover {
  background-color: grey;
}

.nav > #nav-check {
  display: none;
}

@media (max-width: 600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }

  .nav > .nav-btn > label:hover, .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #2f2f2f;;
  }

  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: white;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }

  .nav > .nav-links > a {
    display: block;
    width: 100%;
    color: #2f2f2f;
  }

  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }

  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
