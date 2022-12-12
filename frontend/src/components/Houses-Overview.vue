<template>
  <div class="container">
    <div class="page-header">
      <div class="wop-left">
        <h1>Houses</h1>
        <div class="search_container">
          <input class="search_input" type="text" placeholder="Search">
        </div>
      </div>
      <div class="wop-right">
        <button>+ create new</button>
        <button>+ create new</button>

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
}
</script>

<style scoped>

button{
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



.search_input{
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
  background-position: 95% center;
  border-radius: 50px;
  border: 1px solid #575756;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.search_input::placeholder{

  color: color(#575756 a(0.8));
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

</style>
