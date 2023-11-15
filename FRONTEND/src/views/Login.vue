<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="text" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" @click="login" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const username = ref('');
const password = ref('');
const items = ref([]);
const clientIP = ref('');
let API_URL = '';

const fetchClientIP = async () => {
  try {
    const response = await axios.get('http://localhost:3000/get-local-ip');
    clientIP.value = response.data;
    API_URL = `http://${clientIP.value['localIpAddress']}:3000/`;
    console.log(API_URL);
  } catch (error) {
    console.error('Error fetching client IP:', error);
  }
};

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL + 'api/auth');
    items.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const login = () => {
  const foundUser = items.value.find(
    (user) => user.username === username.value && user.password === password.value
  );
  if (foundUser) {
    localStorage.setItem('isLog', 'true');
    alert('Success');
    username.value="";
    password.value="";
  }
};


onMounted(async () => {
  await fetchClientIP();
  console.log('Component mounted');
  await fetchData();
});
</script>
