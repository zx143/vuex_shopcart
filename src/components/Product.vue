<template>
  <!-- 商品列表页面 -->
  <div>
    <h3>商品信息</h3>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in shopList" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <div class="add-btn" @click="addToCart(item)">添加购物车</div>
          </td>
        </tr>
      </tbody>
    </table>
    <cart />
    <br />
    <info />
  </div>
</template>

<script>
// 引入vuex
import { mapGetters, mapActions } from "vuex";

// 引入组件
import cart from "@/components/Cart.vue";
import info from "@/components/Info.vue";

export default {
  name: "product",
  components: {
    cart,
    info
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["shopList"])
  },
  methods: {
    ...mapActions(["addToCart"])
  },
};
</script>

<style lang="less" scope>
@import '../less/cart/cart.less';
</style>