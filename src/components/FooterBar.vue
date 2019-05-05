<template>
  <div class="FooterBar">
    <van-tabbar v-model="active" @change="changeNav">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import { mapState } from 'vuex'
export default {
  name: 'FooterBar',
  data () {
    return {
      active: ''
    }
  },
  computed: { ...mapState(['activeBarIndex']) },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  methods: {
    changeNav (index) {
      // 会先执行store中的action然后由action调用mutations是属于异步方法可以在action中执行异步方法
      // this.$store.dispatch('setIndex', index)
      this.$store.commit('setIndex', index)
    }
  },
  created () {
    this.active = this.activeBarIndex
  }

}
</script>

<style scoped></style>
