<template>
  <div class="bg">
    <h1>Create new listing</h1>
    <form @submit.prevent="submitForm" v-if="!formSubmitted">
      <span>street name*</span><br>
      <input
          v-model="name"
          type="text"
          placeholder="Enter the street name"
      /><br>

      <span>House number*</span><br>
      <input
          v-model="name"
          type="text"
          placeholder="Enter house number"
      /><br>

      <span>Additional (optional)</span><br>
      <input
          v-model="email"
          type="email"
          placeholder="e.g. A"
      /><br>

      <span>Postal code*)</span><br>
      <input
          v-model="email"
          type="email"
          placeholder="e.g. 1000 AA"
      /><br>

      <span>City</span><br>
      <input
          v-model="email"
          type="email"
          placeholder="e.g. Utrecht"
      /><br>

      <h3>Upload picture (PNG or JPG)</h3>
      <div
          class="base-image-input"
          :style="{ 'background-image': `url(${imageData})` }"
          @click="chooseImage"
      >
        <div
            v-if="!imageData"
            :style="{ 'background-image': `url(${imageDefault})` }"
            class="placeholder"
        >
          <img src="../.././Frontend_Internship_Test_Slices/ic_upload@3x.png"/>
        </div>
        <input
            class="file-input"
            ref="fileInput"
            type="file"
            @input="onSelectFile"
        >
      </div>

      <span>Price*</span><br>
      <input
          v-model="email"
          type="text"
          placeholder="e.g. $150.000"
      /><br>

      <span>size</span><br>
      <input
          v-model="email"
          type="text"
          placeholder="e.g. 60m2"
      /><br>

      <span>Garage*</span><br>
      <input
          v-model="email"
          type="text"
          placeholder="select"
      /><br>

      <span>Bedrooms</span><br>
      <input
          v-model="email"
          type="text"
          placeholder="Enter amount"
      /><br>

      <span>Bathrooms</span><br>
      <input
          v-model="email"
          type="text"
          placeholder="Enter amount"
      /><br>

      <span>Construction date*</span><br>
      <input
          v-model="email"
          type="text"
          placeholder="e.g. 1990"
      /><br>

      <span>Description</span><br>
      <input
          v-model="email"
          type="email"
          placeholder="Enter Description"
      /><br>


      <input id="create-button" type="submit" value="Post">
    </form>

    <div v-if="formSubmitted">
      <h3>Form Submitted</h3>
      <p>Name: {{ name }}</p>
      <p>Email: {{ email }}</p>
      <p>Gender: {{ gender }}</p>
      <small>Click on run to launch the app again.</small>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      gender: "",
      formSubmitted: false,
      imageData: null,
      imageDefault: "../.././Frontend_Internship_Test_Slices/img_background@3x.png"
    };
  },
  methods: {
    submitForm: function () {
      this.formSubmitted = true
    },
    chooseImage() {
      this.$refs.fileInput.click()
    },
    onSelectFile() {

      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    }
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

form {
  padding: 10px;
}

input {
  padding: 4px 8px;
  margin: 4px;
}

span {
  font-size: 18px;
  margin: 4px;
  font-weight: 500;
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

.base-image-input {
  display: block;
  width: 200px;
  height: 200px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}

.placeholder {
  background: #F0F0F0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}

.placeholder:hover {
  background: #E0E0E0;
}

.file-input {
  display: none;
}

.bg {
  background-image: url("../.././Frontend_Internship_Test_Slices/img_background@3x.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
