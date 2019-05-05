<template>
  <div class="home">
    <router-view />
    <FooterBar></FooterBar>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterBar from '@/components/FooterBar.vue'
import { Button, Cell } from 'vant'

export default {
  name: 'home',
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    FooterBar
  }
}
</script>
