<script setup>
import { ref, onMounted } from 'vue';
import { MyButton, MyInput, MyTable } from 'wc-vue-lib';
const message = ref('');
const message1 = ref('');
const refInput = ref();
const refDialog = ref();

function onChange(e) {
  console.log('update:model-value ', e);
}

function onClick() {
  refInput.value.ExampleMethod('vue app üzerinden çağrıldı');
}

function onClickOpenDialog() {
  rows.value = [
  {
      name: 'şaban',
      surname: 'Demir',
      age: '29',
      email: 'harundemir@thy.com',
      id: '8a04',
    },
  ];
  refDialog.value.open(
    () => {
      // ok button callback function
      console.log('ok clicked');
    },
    () => {
      // cancel button callback function
      console.log('cancel clicked');
    },
  );
}

const columns = ref();

const rows = ref();

onMounted(() => {
  columns.value = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name' },
    { key: 'surname', label: 'Surname' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
  ];

  rows.value = [
    {
      name: 'harun',
      surname: 'Demir',
      age: '29',
      email: 'harundemir@thy.com',
      id: '8a04',
    },
    {
      id: '6ee5',
      name: '1',
      surname: '2',
      age: '3',
      email: '4',
    },
    {
      id: 'e940',
      name: '3',
      surname: '4',
      age: '5',
      email: '6',
    },
    {
      id: '6998',
      name: '1',
      surname: '3',
      age: '4',
      email: '5',
    },
    {
      id: 'cf12',
      name: 'Ulaş',
      surname: 'Turan',
      age: '27',
      email: 'ulas@a.com',
    },
    {
      id: 'd71a',
      name: '3',
      surname: '4',
      age: '5',
      email: '6',
    },
  ];
});
</script>

<template>
  <my-layout>
    <div slot="header">
      <h4>my-layout header area</h4>
    </div>
    <div slot="sidebar">
      <h4>my-layout sidebar area</h4>
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="100"
        height="100"
      />
    </div>
    <div slot="content">
      <h4>my-layout content area</h4>

      <my-card header="Example v-model">
        <my-input ref="refInput" v-model="message" label="Name"></my-input>

        <p>v-model test : {{ message }}</p>
      </my-card>
      <br />
      <my-card
        header="Example update:model-value"
        footer="console üzerinden izlenebilir"
      >
        <my-input
          ref="refInput"
          v-model="message1"
          label="Name"
          @update:model-value="onChange"
        ></my-input>
      </my-card>
      harun

      <br />
      <my-card
        header="Example call component method"
        footer="console üzerinden izlenebilir"
      >
        <my-button @click="onClick" label="my-input Method test"></my-button>
      </my-card>
      <br />
      <my-card
        header="Example dialog and open method"
        footer="buton clickleri console üzerinden izlenebilir"
      >
        <my-dialog ref="refDialog"> my dialog is opened! </my-dialog>
        <my-button @click="onClickOpenDialog" label="dialog"></my-button>
      </my-card>
      <br />
      {{ JSON.stringify(columns) }}
      <my-table :columns="columns" :data="rows" test="harun1"></my-table>
    </div>
  </my-layout>
</template>
