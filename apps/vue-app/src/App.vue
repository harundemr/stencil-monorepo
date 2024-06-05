<script setup>
import { ref } from "vue";
import { MyButton, MyInput } from "wc-vue-lib";
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
    @update:model-value="
      (e) => {
        console.log(e);
      }
    "
  ></my-input>

  <p>v-model test : {{ message }}</p>

  <my-button @click="onClick" label="my-input Method test"></my-button>
</template>
