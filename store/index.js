export const state = () => ({
  allPosts: [],
  featuredPosts: []
  // menPosts: [],
  // womenPosts: [],
  // cartItems: []
})
export const getters = {
  /*
    return items from store
  */
  allPosts: state => state.allPosts,
  featuredPosts: state => state.featuredPosts
  // menPosts: state => state.menPosts,
  // womenPosts: state => state.womenPosts,
  // getCart: state => state.cartItems,
  // getCartTotal: state =>
  //   state.cartItems.length < 1
  //     ? '0'
  //     : state.cartItems
  //       .map(el => el.price * el.quantity)
  //       .reduce((a, b) => a + b)
}
export const actions = {
  // async addItemToCart ({ commit }, cartItem) {
  //   await commit('setCartItem', cartItem)
  // },
  // async deleteCartItem ({ commit }, id) {
  //   await commit('removeCartItem', id)
  // }
}
export const mutations = {
  setPosts: (state, posts) => (state.allPosts = posts),
  setFeaturedPosts: (state, posts) => (state.featuredPosts = posts)
  // setMenPosts: (state, Posts) => (state.menPosts = Posts),
  // setWomenPosts: (state, Posts) => (state.womenPosts = Posts),
  // setCartItem: (state, item) => state.cartItems.push(item),
  // removeCartItem: (state, id) =>
  //   state.cartItems.splice(
  //     state.cartItems.findIndex(el => el.id === id),
  //     1
  //   )
}
