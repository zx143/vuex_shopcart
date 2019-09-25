<template>
  <!-- 购物车商品添加 -->
  <div>
    <h3>已选商品</h3>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in carts" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.num}}</td>
          <td>
            <div @click="delGoods(item)" class="del-btn">删除</div>
          </td>
        </tr>
        <tr v-if="!carts.length">
          <td colspan="5">您的购物车是空的,请添加商品!</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// 引入vuex
import { mapActions ,mapGetters } from 'vuex';

export default {
  name:'cart',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters(["carts"])
  },
  methods: {
    ...mapActions(["delGoods"])
  },
}
</script>

<style lang="less" scope>
 @import "../less/cart/cart.less";
</style>