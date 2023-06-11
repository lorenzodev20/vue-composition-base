import { ref } from 'vue'

const useConter = () => {
    const counter = ref(5)
    return {
      counter,
      increase: () => counter.value++,
      decrease: () => counter.value--
    }
}

export default useConter