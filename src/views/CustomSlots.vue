<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>
  <Modal v-if="isOpen" @on:close="closeModal" title="Hola Mundo">
    <template v-slot:header>
      <h2>Titulo del modal</h2>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Salir</button>
    </template>
    <template v-slot:body>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
    </template>
    <!-- <template v-slot:exposed="slotProps">
      {{ slotProps }}
    </template> -->
  </Modal>
</template>

<script>
import useModal from '@/composables/useModal'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  },
  setup () {
    const { isOpen, openModal, closeModal } = useModal()

    return {
      isOpen,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped></style>
