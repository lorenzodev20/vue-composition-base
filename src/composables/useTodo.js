import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodo = () => {
    const store = useStore()
    const currentTab = ref('all')
    const textValue  = ref('')

    const toggleTodo = (id) => {
        store.commit('toggleTodo', id)
    }
    const createTodo = (textValue) => {
        store.commit('createTodo',textValue)
    }
    return {
        currentTab,
        toggleTodo,
        all: computed(() => store.getters['allTodos']),
        pending: computed(() => store.getters['pendingTodos']),
        completed: computed(() => store.getters['completedTodos']),
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
        createTodo,
        textValue
    }

}

export default useTodo