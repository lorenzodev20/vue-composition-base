<template>
  <h1>Lista de Tareas</h1>
  <h4>Todas las tareas {{ all.length  }}</h4>
  <h4>Tareas Pendientes {{ pending.length }}</h4>
  <h4>Tareas Completadas {{ completed.length }}</h4>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup(){
        const store = useStore()
        return{
            all: computed(() => store.getters['allTodos']),
            pending: computed(() => store.getters['pendingTodos']),
            completed: computed(() => store.getters['completedTodos']),
        }
    }
}
</script>

<style>

</style>