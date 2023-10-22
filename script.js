let playerState = 1
let tictactoeState = {
	0: [0, 0, 0],
	1: [0, 0, 0],
	2: [0, 0, 0]
}

const getPlayerColor = (state) => {
	if (state === 1) { return 'red' }
	if (state === 2) { return 'blue' }
	throw new Error('Invalid player state')
}

const checkWin = () => {
	for (const [key, value] of Object.entries(tictactoeState)) {
		if ((value[0] === value[1] && value[1] === value[2] && value[0] !== 0)) {
			alert(`${getPlayerColor(value[0])} wins!`)
			location.reload()
		}

		if (tictactoeState[0][key] === tictactoeState[1][key] && tictactoeState[1][key] === tictactoeState[2][key] && tictactoeState[0][key] !== 0) {
			alert(`${getPlayerColor(tictactoeState[0][key])} wins!`)
			location.reload()
		}

		if (tictactoeState[0][0] === tictactoeState[1][1] && tictactoeState[1][1] === tictactoeState[2][2] && tictactoeState[0][0] !== 0) {
			alert(`${getPlayerColor(tictactoeState[0][0])} wins!`)
			location.reload()
		}

		if (tictactoeState[0][2] === tictactoeState[1][1] && tictactoeState[1][1] === tictactoeState[2][0] && tictactoeState[0][2] !== 0) {
			alert(`${getPlayerColor(tictactoeState[0][2])} wins!`)
			location.reload()
		}
	}

	if (tictactoeState[0].every((cell) => cell !== 0) && tictactoeState[1].every((cell) => cell !== 0) && tictactoeState[2].every((cell) => cell !== 0)) {
		alert('Draw!')
		location.reload()
	}
}

let game_div = document.getElementById('gamefield')
let player_color_span = document.getElementById('player-color')
player_color_span.innerText = getPlayerColor(playerState)

for (const [key, value] of Object.entries(tictactoeState)) {
	let row = document.createElement('div')
	row.className = 'row'

	for (let i = 0; i < value.length; i++) {
		let cell = document.createElement('div')
		cell.className = 'cell'
		cell.onclick = () => {
			if (tictactoeState[key][i] === 0) {
				tictactoeState[key][i] = playerState
				cell.classList.add(getPlayerColor(playerState))

				playerState = playerState === 1 ? 2 : 1
				player_color_span.innerText = getPlayerColor(playerState)

				setTimeout(() => { checkWin() }, 100)
			}
		}
		row.appendChild(cell)
	}

	game_div.appendChild(row)
}