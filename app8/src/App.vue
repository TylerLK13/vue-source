<template>
<body>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  </head>

  <div class="row" id="app">
    <div class="col-md-3" id="accountIn">
      <h2>Create Account</h2>
      <fieldset class="col-md-2">
        <input id="username" type="text" value="" placeholder="Username" minlength="4" required>
        <input id="password" type="password" value="" placeholder="Password" minlength="8" autocomplete="new-password" pattern="[0-9a-zA-Z.!#$%&'*+/=?^_`{|}~-]" required>
        <input id="password2" type="password" value="" placeholder="Repeat Password" required>
        <input id="emailIn" type="email" placeholder="Email Address" pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)" required>
        <input id="phoneIn" type="tel" placeholder="Phone #" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
        <img :src = "profilePic.url"/>
        <input id="profImgIn" type="file" accept="image/*, .pdf">
      </fieldset>
    </div>

  <!--
    <div class="col-md-3" id="accountOut">
      <h4>Summary</h4>
      <img src:"">
      <p></p>


    </div>
  -->
  </div>
</body>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { onMounted, onUpdated } from 'vue'

const usernameRef = ref(null)

const username = ref('')
const password = ref('')
const password2 = ref('')
const disabled = ref(true)

const validUsername = ref(false)
const validPassword = ref(false)
const passwordsMatch = ref(false)

const usernameErrorRef = ref(null)
const passwordErrorRef = ref(null)
const password2ErrorRef = ref(null)

const profilePic = ref('')

watch(profilePic, () => {
  console.log('watching profilePic')
  console.log()

})

let count = 0
watch(usernameRef, () => {
  console.log('watching usernameRef')
  console.log(usernameRef.value)
  console.log(count++)
  usernameRef.value.value = "jmama"
})

function componentUpdate(elm) {
  console.log("password changed")
  console.log(elm.value)
  console.log(passwordErrorRef.value)
  if (passwordErrorRef.value != null && elm.value.length > 0) {
    validPassword.value = (elm.value.length >= 8)
    passwordErrorRef.value.innerHTML = (validPassword.value) ?
      "&nbsp;" : "Minimum length: 8 characters"
  }
}

watch(username, () => {
  validUsername.value = (username.value.length >= 4)
  usernameErrorRef.value.innerHTML = (validUsername.value) ?
    "&nbsp;" : "Minimum length: 4 characters"
  usernameRef.value.setAttribute("data", "hello")
})

watch([password, password2], () => {
  passwordsMatch.value = (password.value === password2.value)
  password2ErrorRef.value.innerHTML = (passwordsMatch.value || password2.value.length == 0) ?
    "&nbsp;" : "Passwords do not match"
})

watch([validUsername, validPassword, passwordsMatch], async () => {
  disabled.value = !(validUsername.value && validPassword.value && passwordsMatch.value)
  console.log(disabled.value)
  if (!disabled.value) usernameRef.value.value = ''
})

function submit() {
  let mssg = username.value + ", " + password.value
  console.log(mssg)
}
/*
onMounted(() => {
  usernameRef.value.focus();
})
*/
onUpdated(() => {
  console.log(usernameRef.value.value)
})

</script>

<style>
#app{
  margin: 30px;
}
#accountIn{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 20px;
  border-style: solid;
  border-color: rgb(100, 112, 174);
  border-width: 1px;
  border-radius: 20px;
  text-align: center;
}

input{
  border-style:solid; 
  border-color: rgb(127, 137, 190);
  border-width: 1px;
  border-radius: 5px;
  padding: 3px;
}

#accountOut{
  font-family:'Times New Roman', Times, serif ;
  margin: 30px;
  border-color: black;
  border-style: solid;
  border-width: 3px;
}

</style>