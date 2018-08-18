export default {
  changeCity (state, city) {
    state.city = city
    // 存一个localStorage
    try {
      localStorage.city = city
    } catch (e) {
    }
  }
}
