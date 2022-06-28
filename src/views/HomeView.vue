<template>
  <div class="home">
    <div v-if="projects.data.length">
      <AddProject v-if="showAdd" :projects="projects" @post="handlePost" />
      <div v-for="project in projects.data" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @edit ="handleEdit"/>
      </div>
    </div>
  </div>
  <button @click="clickAdd">Add Project</button>
</template>

<script>
import AddProject from '../components/AddProject.vue'
import SingleProject  from "../components/SingleProject.vue";
import { reactive, ref, watch } from "vue"
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
      const showAdd = ref(false)
      let projects = reactive({data:[
        {
          "id": 1,
          "title": "Create new homepage banner",
          "details": "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum.",
          "complete": true
        },
        {
          "id": 2,
          "title": "Make marketing email",
          "details": "Lorem ipsum",
          "complete": false
        },
        {
          "title": "Update the Promso Links",
          "details": "Make sure all the promo links and coupon codes are up to date!!!!!",
          "complete": true,
          "id": 3
        }
      ]})
      const handleEdit = (item) => {
          projects.data.forEach(project => {
              if (project.id == item.id) {
                project.title = item.title
                project.details = item.details
              }
          });
      }
      
      const handleDelete = (id) => {
          projects.data = projects.data.filter((item)=>{
              return item.id != id
          })
      }
     
      const clickAdd = () =>{
        showAdd.value = true
      }
      const handlePost = (item)=>{
        projects.data.push(item)
        showAdd.value = false
      }

      return {
        projects, 
        handleDelete, 
        showAdd, 
        clickAdd,
        handlePost,
        handleEdit
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