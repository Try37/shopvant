<template>
  <div class="header">
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'HeaderNav',
  components: {
    [NavBar.name]: NavBar
  },
  props: {
    title: String
  }, // 父组件向子组件传值 传值用法是在父组件调用子组件时绑定属性props可以是数组["title"]也可以是一个object对象，指定传入的值类型指定值类型可以是对个如title:[String,Number]
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped></style>
