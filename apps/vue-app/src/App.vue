<script setup>
import { ref } from "vue";
const message = ref("");
const refInput = ref();

function onClick() {
  refInput.value.ExampleMethod("vue app üzerinden çağrıldı");
}
</script>

<template>
  <img
    alt="Vue logo"
    class="logo"
    src="./assets/logo.svg"
    width="125"
    height="125"
  />

  <my-input
    ref="refInput"
    v-model="message"
    label="Name"
    @valueChange="
      (e) => {
        console.log(e);
      }
    "
  ></my-input>
  <p>Name : {{ message }}</p>
  <button @click="onClick">my-input Method test</button>
</template>
