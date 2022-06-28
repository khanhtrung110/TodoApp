<template>
  <div class="home">
      <AddProject v-if="showAdd" :projects="projects" @post="todoPost" />
      <div v-for="project in projects.data" :key="project.id">
        <SingleProject :project="project" @delete="todoDelete" @edit ="todoEdit"/>
      </div>
  </div>
  <button @click="clickAdd">Add Project</button>
  <button @click="change1">A = A + 1</button>
  <button @click="change2">B = B + 1</button>
  <p>Number +A = {{ acomp }}</p>
  <p>Number +B = {{ bcomp }}</p>
</template>

<script>
import { reactive, ref, toRef,toRefs } from '@vue/reactivity';
import AddProject from '../components/AddProject.vue'
import SingleProject  from "../components/SingleProject.vue";
import getTodo from '../composables/getTodo'
import { computed, watch, watchEffect } from '@vue/runtime-core';

export default {
  name: 'Home',
  props: {
    data: {
      type: Object, 
      default: {
        id: 1,
        name: ["s"]
      }
    }
  },
  components: {
    SingleProject,
    AddProject
    },
    setup(){
      const { todoEdit, todoDelete, todoPost, projects, showAdd } = getTodo();
      const a  = ref(0)
      const b = ref(0)
      const number = ref(20)
      const clickAdd = () =>{
        showAdd.value = true
      }
      const change1 =()=>{
       
        return a.value += 1
      }
      const change2 = () =>{
        return b.value += 1
      }
     
     const acomp = computed(()=>{
         return b.value;
      }) 
      const bcomp = computed(()=>{
         return b.value + a.value
      })
      const hehe = toRef(projects.value, 'data')
      
      return {
        projects, 
        todoDelete, 
        showAdd, 
        clickAdd,
        todoEdit,
        todoPost,
        showAdd,
        change1,
        change2,
        a,
        b,
        acomp,
        bcomp
      }
    },
}
</script>
<style scoped>
   button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
  }
</style>