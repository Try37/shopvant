<template>
  <div>
    <header-nav title="商品列表"></header-nav>
    <div class="goodsList">
      <van-pull-refresh
        id="goodslist"
        class="goodslist-pull-refresh"
        v-model="isLoading"
        @refresh="onRefresh"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div v-for="item in list" :key="item.id">
            <GoodsItem
              :price="item.price"
              :title="item.title"
              :thumb="item.thumb"
              :tag="item.tag"
              :id="item.id"
              @click.native="goToDetail(item.id)"
            ></GoodsItem>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
import GoodsItem from '@/components/GoodsItem.vue'
import { List, PullRefresh } from 'vant'
export default {
  name: 'goodsList',
  data () {
    return {
      list: [],
      isLoading: false,
      loading: false,
      finished: false
    }
  },
  components: {
    GoodsItem,
    HeaderNav,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh
  },
  methods: {
    goToDetail (id) {
      this.$router.push({
        name: 'goodsDetail',
        params: {
          id
        }
      })
    },
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    },
    onLoad () {
      // console.log("page load");
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          let leg = this.list.length
          let obj = {
            id: leg + 1,
            price: '2.00',
            desc: '商品描述',
            title: '2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
            tag: '标签',
            thumb:
              'http://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
          }
          this.list.push(obj)
        }
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  },
  created () {},
  beforeRouteEnter (to, from, next) {
    // console.log("进入");
    // console.log(to);
    // console.log(from);
    if (from.name === 'goodsDetail') {
      next(vm => {
        // console.log(vm.list);
        document.getElementById('goodslist').scrollTop = vm.scrollTop || 0
      })
    } else {
      next()
    }
  },
  activated () {
    // console.log("activated");
    // console.log(this.$route.meta);
    // console.log(this.scrollTop);
  },
  beforeRouteLeave (to, from, next) {
    // console.log("离开");
    // console.log(to);
    // console.log(from);
    this.scrollTop = document.getElementById('goodslist').scrollTop
    next()
  }
}
</script>

<style lang="less" scoped></style>
