<template>
  <div class="container">
    <div class="page-header">
      <div class="wop-left">
        <h1>Houses</h1>
        <div class="search_container">
          <input class="search_input" type="search" placeholder="Search">
        </div>
      </div>
      <div class="wop-right">
        <router-link
            to="/CreateListing"
            custom
            v-slot="{ navigate }"
        >
          <button @click="navigate" id="create-button">+ CREATE NEW</button>
        </router-link>
        <div class="button b2" id="button-10">
          <input type="checkbox" class="checkbox"/>
          <div class="knobs">
            <span>Price</span>
          </div>
          <div class="layer"></div>
        </div>
      </div>
    </div>
    <div class="list-item">
      <p>name</p>
      <p>price</p>
      <p>adres</p>
      <p>pictogrammen</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Houses-Overview.vue",


  methods: {
    toggle() {
      if (!this.isActive) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Open+Sans');

button {
  height: 35%;
  width: 100%;
}

.wop-left {
  border: solid black;
  width: 40%;
  height: 8rem;
  position: absolute;
  left: auto;
}

.wop-right {
  border: solid black;
  position: absolute;
  height: 8rem;
  right: 0;
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end
}

.page-header {
  position: relative;
  height: 8rem;
  display: flex;
  border: solid green;
}

.container {
  border: solid red;
  position: relative;
  width: 60%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3%;
}

.search_input {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  width: 100%;
  padding: 12px 24px;
  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;
  color: #575756;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 1% center;
  border-radius: 50px;
  border: 1px solid #575756;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.list-item {
  margin-top: 3%;
}

.search_input::placeholder {
  color: #575756;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/*-----------------*/
.button {
  position: relative;
  width: 74px;
  height: 36px;
  overflow: hidden;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

#button-10 .knobs:before,
#button-10 .knobs:after,
#button-10 .knobs span {
  position: absolute;
  top: 4px;
  width: 20px;
  height: 10px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  border-radius: 2px;
  transition: 0.3s ease all;
}

#button-10 .knobs:before {
  content: "";
  left: 4px;
  background-color: #f44336;
}

#button-10 .knobs:after {
  content: "Size";
  right: 4px;
  color: #4e4e4e;
}


#create-button {
  border-radius: 10%;
  background-color: #EB5440;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
}

#create-button:hover {
  background-color: darkred;
  color: white;
  cursor: pointer;
}

#button-10 .knobs span {
  display: inline-block;
  left: 4px;
  color: #fff;
  z-index: 1;
}

#button-10 .checkbox:checked + .knobs span {
  color: #4e4e4e;
  background-color: #C3C3C3;
}

#button-10 .checkbox:checked + .knobs:before {
  left: 42px;
  background-color: #f44336;
}

#button-10 .checkbox:checked + .knobs:after {
  color: #fff;
}
</style>
