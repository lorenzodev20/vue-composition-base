<template>
  <h1>Lista de Tareas</h1>
  <h4>Tareas Pendientes {{ pending.length }}</h4>
  <hr />
  <button :class="{ active: currentTab === 'all' }" @click="currentTab = 'all'">
    Todos
  </button>
  <button
    :class="{ active: currentTab === 'pending' }"
    @click="currentTab = 'pending'"
  >
    Pendientes
  </button>
  <button
    :class="{ active: currentTab === 'completed' }"
    @click="currentTab = 'completed'"
  >
    Completados
  </button>
  <div>
    <ul>
      <li
        v-for="todo in getTodosByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">Crear ToDo</button>
  <modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header> <h2>Nueva Tarea</h2> </template>
    <template v-slot:body>
      <form @submit.prevent="createTodo(textValue); isOpen=false " >
        <input type="text" name="text" id="text" v-model="textValue" />
        <br /><br />
        <button type="submit">Guardar Tarea</button>
      </form>
    </template>
  </modal>
</template>

<script>
import useTodo from '@/composables/useTodo'
import useModal from '@/composables/useModal'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  },
  setup () {
    const {
      currentTab,
      toggleTodo,
      all,
      pending,
      completed,
      getTodosByTab,
      textValue,
      createTodo
    } = useTodo()
    const { isOpen, openModal, closeModal } = useModal()
    return {
      currentTab,
      toggleTodo,
      all,
      pending,
      completed,
      getTodosByTab,
      isOpen,
      openModal,
      closeModal,
      textValue,
      createTodo
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 300px;
  text-align: left;
}
li {
  cursor: pointer;
}
.active {
  background-color: #2c3e50;
  color: white;
}
.completed {
  text-decoration: line-through;
}
</style>
