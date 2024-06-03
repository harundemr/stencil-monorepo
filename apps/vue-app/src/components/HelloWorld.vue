<script setup>
import { ref } from "vue";
const message = ref("");
const refInput = ref();

function onClick() {
  console.log(refInput.value);
  refInput.value.ExampleMethod();
}
</script>

<template>
  <div class="greetings">
    <my-input ref="refInput" v-model="message" label="harun" @valueChange="(e)=>{console.log(e)}"></my-input>
    <!-- <MyInput ref="refInput" v-model="message" label="MyInput" @valueChange="(e)=>{console.log(e)}"/> -->
    <p>model value : {{ message }}</p>
    <button @click="onClick">click</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
