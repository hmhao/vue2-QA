export default {
  index (state, getters) {
    return state.index + 1
  },
  item (state, getters) {
    return state.questions.length ? state.questions[state.index] : null
  },
  content (state, getters) {
    let item = getters.item
    return item ? item.question : ''
  },
  chooses (state, getters) {
    let item = getters.item
    return item ? item.chooses : []
  },
  score (state, getters) {
    return state.score
  },
  time (state, getters) {
    return Math.max(0, Math.min(state.time / state.limitTime, 1)) * 100
  },
  gameOver (state, getters) {
    return state.gameOver
  }
}