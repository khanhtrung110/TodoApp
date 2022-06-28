import { reactive, ref, watch } from "vue"

const getTodo = () => {
  
  const projects = ref({data:[
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

  const showAdd = ref(false)

  const todoEdit = (item) => {
    projects.value.data.forEach(project => {
      if (project.id == item.id) {
        project.title = item.title
        project.details = item.details
      }
    });
  }

  const todoDelete = (id) => {
    projects.value.data = projects.value.data.filter((item) => {
      return item.id != id
    })
  }
  // console.log(projects.value.data)

  const todoPost = (item) => {
    // projects.value.data.push(item)
    projects.value.data.push(item)

    showAdd.value = false
  }

  return {
    todoEdit,
    todoDelete,
    todoPost,
    projects,
    showAdd
  }
}

export default getTodo