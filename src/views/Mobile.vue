<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="light blue">
      <van-swipe-item v-for="(image) in images0" :key="image"><van-image :src="image" style="width:100%; height: 100%;" lazy-load /></van-swipe-item>
      <van-swipe-item v-for="(image, index) in images" :key="index"><img v-lazy="image" style="width:100%; height: 100%;" /></van-swipe-item>
    </van-swipe>
    <van-grid :border="false" :column-num="4">
      <van-grid-item :icon="require('@/assets/images/a.png')" text="全部商品" />
      <van-grid-item :icon="require('@/assets/images/b.png')" text="优惠券" />
      <van-grid-item :icon="require('@/assets/images/c.png')" text="积分商品" />
      <van-grid-item :icon="require('@/assets/images/d.png')" text="积分签到" />
    </van-grid>
    <van-cell-group inset>
      <van-cell value="限时拼团" :border="false"/>
      <van-cell>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image :src="require('../assets/images/1.png')" />
            <div>外星人电脑</div>
            <div style="color:orange">￥{{9800}}</div>
          </van-grid-item>
          <van-grid-item>
            <van-image :src="require('@/assets/images/2.png')" />
            <div>耐克运动鞋</div>
            <div style="color:orange">￥{{980}}</div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
            <div>iPhone手机
            </div>
            <div style="color:orange">￥{{5900}}</div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
            <div>苹果电脑</div>
            <div style="color:orange">￥{{19800}}</div>
          </van-grid-item>
          <van-grid-item v-for="(item, i) in goodsList" :key="i">
            <van-image :src="item.pic" />
            <div>{{item.name}}</div>
            <div style="color:orange">￥{{item.price}}</div>
          </van-grid-item>
        </van-grid>
        <!-- loadMore -->
        <van-divider v-if="goodsList.length >= 10" @click="loadMore">
          <span v-show="!showLoadMore">点击加载更多</span>
          <van-loading v-show="showLoadMore" size="18px">加载中...</van-loading>
        </van-divider>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images0: [
                require('@/assets/images/1.png'),
                require('@/assets/images/2.png'),
                require('@/assets/images/3.jpg'),
                require('@/assets/images/4.jpg'),
            ],
            images: [
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-3.jpg',
                'https://img01.yzcdn.cn/vant/apple-4.jpg',
            ],
            value: "苹果",
            goodsList: [],
            showLoadMore: false,
        };
    },
    created() {
      // this.$axios.get('http://127.0.0.1:8082/v1/goods').then(
      //   response => {
      //     console.log(response.data)
      //     this.goodsList = response.data
      //   }
      // )
      this.loadMore()
    },
    methods: {
      loadMore() {
        this.sortFlag = false;
        this.showLoadMore = true;
        // setTimeout(() => {
        //   this.showLoadMore = false;
        //   this.InitTestData();
        // }, 1000);
        this.$axios.get('http://127.0.0.1:8082/v1/goods').then(
          response => {
            this.showLoadMore = false;
            console.log(response.data)
            response.data.forEach(element => {
              this.goodsList.push(element)
            });
            console.log(this.goodsList)
          }
        )
      },
    }
    
};
</script>

<style>
  .my-swipe .van-swipe-item {
    /* color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed; */
    height: 200px;
  }
  .price {
    color: orange;
  }
</style>