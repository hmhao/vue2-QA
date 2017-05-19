const GET_DATA = 'GET_DATA'
const NEXT_ITEM = 'NEXT_ITEM'
const COUNT_SCORE = 'COUNT_SCORE'
const INIT_GAME = 'INIT_GAME'
const START_GAME = 'START_GAME'
const STOP_GAME = 'STOP_GAME'

let allData = []
let timeStep = 1000 / 60
let timer = 0
let startTime = 0

const mutations = {
	[GET_DATA](state, payload) {
		if (payload.code == 200) {
			allData = payload.data
			state.canStart = true
			state.questions = getRandom(allData, state.total)
		}
	},

	[NEXT_ITEM](state) {
		if (++state.index >= state.total) {
			mutations[STOP_GAME](state)
		} else {
			state.time = 0
		}
	},

	[COUNT_SCORE](state, payload) {
		let item = state.questions[state.index]
		if (item.answer === payload) {
			state.score += 10
		}
	},

	[INIT_GAME](state) {
		state.index = 0
		state.score = 0
		state.allTime = 0
		state.gameStart = false
		state.gameOver = false
		cancelAnimationFrame(timer)
	},

	[START_GAME](state) {
		state.gameStart = true
		if (state.canStart) {
			startTime = new Date().getTime()
			const update = function() {
				state.time += timeStep
				if (state.time >= state.limitTime) {
					mutations[NEXT_ITEM](state)
				}
				timer = requestAnimationFrame(update)
			}
			timer = requestAnimationFrame(update)
		}
	},

	[STOP_GAME](state) {
		cancelAnimationFrame(timer)
		let now = new Date().getTime()
		state.allTime = ((now - startTime) / 1000).toFixed(2)
		state.gameOver = true
		state.gameStart = false
	}
}

function getRandom (data, count) {
	let ids = []
	let len = data.length
	while (count > 0) {
		let index = Math.floor(Math.random() * len)
		if (ids.indexOf(index) == -1) {
			ids.push(index)
			count--
		}
	}
	let result = []
	ids.forEach((i) => result.push(data[i]))
	return result
}

export default mutations
