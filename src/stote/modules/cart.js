const state = {
  // 商品列表
  shop_list: [{
      id: 11,
      name: '鱼香肉丝',
      price: 12
    },
    {
      id: 12,
      name: '宫爆鸡丁',
      price: 12
    },
    {
      id: 13,
      name: '红烧猪蹄',
      price: 28
    },
    {
      id: 14,
      name: '精致小菜',
      price: 10
    },
    {
      id: 15,
      name: '米饭',
      price: 2
    }
  ],
  // 添加到购物车里的商品（已选商品）
  added: []
}

const getters = {
  // 商品列表
  shopList: state => state.shop_list,
  // 购物车列表
  carts: (state) => {
    return state.added.map(({
      id,
      num
    }) => { // 在 actions中的 只有 id和 num
      // 在原始数据上面进行筛选，通过id匹配
      let product = state.shop_list.find(n => n.id === id)
      // console.error(product)
      // 返回筛选结果
      return {
        ...product,
        num
      }
    })
  },
  // 计算总价
  totalPrice: (state, getters) => {
    var prices = 0
    getters.carts.forEach(n => {
      prices += n.price * n.num
    })
    return prices
  },
  // 计算总数
  totalNum: (state, getters) => {
    var nums = 0
    getters.carts.forEach(n => {
      nums += n.num
    })
    return nums
  }
}

// actions异步操作
const actions = {
  // 添加购物车
  addToCart: (context, product) => {
    context.commit('add', {
      id: product.id
    })
  },
  // 清空购物车
  clearAll({
    commit
  }) {
    commit('clear')
  },
  // 删除指定商品
  delGoods({
    commit
  }, product) {
    commit('delete', {
      id: product.id
    })
  }
}

// mutations
const mutations = {
  // 执行购物车操作
  add(state, {
    id
  }) {
    let record = state.added.find(n => n.id === id)
    if (!record) {
      state.added.push({
        id,
        num: 1
      })
    } else {
      record.num++
    }
  },
  // 清空
  clear(state) {
    state.added = []
  },
  delete(state, {
    id
  }) {
    state.added.forEach((n, i) => {
      if (n.id === id) {
        state.added.splice(i, 1)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
