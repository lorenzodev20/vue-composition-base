<template>
  <h1>Buscar Pokémon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input
    type="number"
    placeholder="Número del pokémon"
    autofocus
    v-model="pokemonId"
    ref="txtSearchId"
    />
  </form>
  <br />
  <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const pokemonId = ref(1)
    const txtSearchId = ref()
    const onSubmit = () => {
        console.log('Pokémon a buscar', pokemonId.value)
        router.push({ name:'pokemon-id', params:{ id: pokemonId.value }})
    }
    onActivated(()=>{
        // Usamos para mantener la referencia y el focus sobre el input
        txtSearchId.value.select()
    })
    return{
        pokemonId,
        onSubmit,
        txtSearchId
    }
  }
}
</script>

<style></style>
