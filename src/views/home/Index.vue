<template>
  <div class="index">
    <van-swipe class="index-swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <van-row class="index-col-2">
      <van-col class="index-row-2" span="6" v-for="(v,index) in badge.icon" :key="v.id">
        <router-link :to="{name:'goodsList'}">
          <img :src="badge.icon[index]">
          <span>{{badge.title[index]}}</span>
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Row, Col } from 'vant'
export default {
  name: 'homeIndex',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg'
      ],
      badge: {
        icon: [
          require('@/assets/icon_nav_01_new.png'),
          require('@/assets/icon_nav_02_new.png'),
          require('@/assets/icon_nav_03_new.png'),
          require('@/assets/icon_nav_04_new.png'),
          require('@/assets/icon_nav_learn.png'),
          require('@/assets/icon_nav_mall.png'),
          require('@/assets/icon_nav_order.png'),
          require('@/assets/icon_nav_pending.png')
        ],
        title: [
          '鞋包馆',
          '运动馆',
          '母婴馆',
          '超市',
          '女装馆',
          '美妆馆',
          '男装馆',
          '更多'
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.index {
  @fonts : 13px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-col-2 {
    background-color: white;

    h4 {
      font-size: @fonts;
      margin-top: 30px;
      color: black;
      font-weight: normal;
    }
  }

  &-row-2 {
    margin-top: 20px;
    height: 70px;
    text-align: center;

    span {
      display: block;
      color: #555;
      font-size: 12px;
      margin-bottom: 10px;
    }

    img {
      width: 60px;
      display: inline-block;
    }
  }
}
</style>
