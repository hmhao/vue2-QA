import ajax from '@/config/ajax'

const action = {
	chooseAnswer({ commit, state }, answer) {
		commit('COUNT_SCORE', answer)
		commit('NEXT_ITEM')
	},

	initGame({ commit, state }) {
		commit('INIT_GAME')
	},

	startGame({ commit, state }) {
		commit('START_GAME')
	},

	getData({ commit, state }) {
		ajax('GET', './static/data.json').
		then(res => {
			commit('GET_DATA', {
				code: 200,
				data: res
			})
			state.gameStart && action.startGame({ commit, state })
		})
	}
}

export default action