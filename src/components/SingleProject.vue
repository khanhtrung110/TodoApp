<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <i @click="deleteProject" class="fa fa-trash"></i>
        <i @click="changeUpdate" class="fa fa-edit"></i>
        <i @click="toggeComplete" class="fa fa-check"></i>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
    <div class="overlay" v-if="showEdit">
      <input type="text" placeholder="Title" v-model="titleEdit" />
      <input type="text" placeholder="details" v-model="detailsEdit" />
      <button @click="updateProject">Edit</button>
    </div>
  </div>
</template>

<script>
import { ref, toRef, watch, toRefs, watchEffect } from "vue";
export default {
  props: ["project", "id"],
  setup(props, context) {
    const showDetails = ref(false);
    const showEdit = ref(false);
    const titleEdit = ref("");
    const detailsEdit = ref("");
    const { details, title, idRef, complete } = toRefs(props.project);

    const deleteProject = () => {
      context.emit("delete", props.project.id);
    };
    const updateProject = () => {
      showEdit.value = false;
      context.emit("edit", {
        id:props.project.id,
        title: titleEdit.value,
        details: detailsEdit.value
      });
    };
    const changeUpdate = () => {
      showEdit.value = true;
    };
    const toggeComplete = () => {
      complete.value = true;
    };
    return {
      showDetails,
      deleteProject,
      updateProject,
      toggeComplete,
      showEdit,
      changeUpdate,
      titleEdit,
      detailsEdit
    };
  },
};
</script>

<style scoped>
.overlay {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
input {
  width: 40%;
}
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icons i {
  font-size: 19px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.icons i:hover {
  color: #777;
}

.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00ce89;
}

button {
  display: block;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>