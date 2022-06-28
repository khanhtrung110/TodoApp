import { ref, watchEffect } from 'vue'

const getTodo = (data) => {
  const handleEdit = (item) => {
    data.forEach(project => {
      if (data.id == item.id) {
        data.title = item.title
        data.details = item.details
      }
    });
  }

  const handleDelete = (id) => {
    data = data.filter((item) => {
      return item.id != id
    })
  }

  const handlePost = (item) => {
    data.push(item)
    showAdd.value = false
  }

  
}

