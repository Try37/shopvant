<template>
  <van-col span="12" class="goodsItem">
    <img :src="thumb" />
    <div class="goodsItem-title">{{ title }}</div>
    <div class="goodsItem-price">
      &yen;<span class="price">{{ price }}</span>
    </div>
    <div class="goodsItem-tag">
      <van-tag mark type="danger">
        <span>{{ tag }}</span>
      </van-tag>
    </div>
  </van-col>
</template>

<script>
import { Row, Col, Tag } from 'vant'
export default {
  name: 'GoodsItem',
  components: { [Row.name]: Row, [Col.name]: Col, [Tag.name]: Tag },
  props: {
    thumb: String,
    price: String,
    title: String,
    tag: String,
    id: [String, Number]
  }
}
</script>

<style lang="less" scoped>
.goodsItem {
  @font: 14px;
  img {
    width: 100%;
    display: block;
  }

  &-title {
    font-size: @font;
    padding: 0px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-price {
    padding: 0px 5px;
    font-size: 12px;
    color: #e93b3d;

    .price {
      font-size: 18px;
      padding-left: 3px;
      display: inline-block;
    }
  }

  &-tag {
    padding: 0px 5px;
  }
}
</style>
