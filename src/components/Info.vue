<template>
  <!-- 结算组件页面 -->
  <div>
    <div class="item-wrapper">
      <div class="item">
        总数:
        <strong>{{totalNum}}</strong>
      </div>
      <div class="item">
        总价:
        <strong>{{totalPrice}}</strong>
      </div>
      <div class="item reset-btn" @click="clearAll">清空购物车</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name:'info',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['totalPrice',"totalNum"])
  },
  methods: {
    ...mapActions(["clearAll"])
  },
}
</script>

<style lang="less" scope>
  .item-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dfdfdf;
  }
  .item {
    flex: 1;
  }
  .reser-btn {
    color: aliceblue;
    background-color: brown;
    cursor: pointer;
  }
</style>