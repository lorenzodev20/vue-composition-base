<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando ...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <br />
    <router-link :to="{ name: 'pokemon-search' }"> Regresar </router-link>
  </template>
</template>

<script>
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { watch } from 'vue'
import usePokemon from '@/composables/usePokemon'
export default {
  setup () {
    const route = useRoute()
    const { errorMessage, isLoading, pokemon, searchPockemon } = usePokemon(
      route.params.id
    )
    watch(
      () => route.params.id,
      () => searchPockemon(route.params.id)
    )
    onBeforeRouteLeave(()=>{
        // Para confirmar si desea salir de la pagina
        const answer = window.confirm('¿Esta seguro que desea salir?')
        if(!answer) return false
    })
    return {
      errorMessage,
      isLoading,
      pokemon
    }
  }
}
</script>

<style></style>
