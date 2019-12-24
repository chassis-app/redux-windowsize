const windowSizeReducer = (
	state = {
		width: typeof window === "object" ? window.innerWidth || 100 : 100,
		height: typeof window === "object" ? window.innerHeight || 100 : 100,
		fontSize:
			typeof document === "object"
				? parseFloat(getComputedStyle(document.body).fontSize) || 16
				: 16,
		position:
			typeof document === "object"
				? document.body.scrollTop || document.documentElement.scrollTop || 0
				: 0
	},
	{ type, data }
) => {
	switch (type) {
		case "windowSize.UpdateSize":
			return Object.assign({}, state, {
				width: data.width,
				height: data.height
			})
		case "windowSize.UpdatePosition":
			return Object.assign({}, state, { position: data.position })
		case "windowSize.UpdateFontSize":
			return Object.assign({}, state, { fontSize: data.fontSize })
		default:
			console.log("default called")
			return state
	}
}

exports.getSizeAction = () => {
	return {
		type: "windowSize.UpdateSize",
		data: {
			width: typeof window === "object" ? window.innerWidth : 100,
			height: typeof window === "object" ? window.innerHeight : 100
		}
	}
}

exports.getPositionAction = () => {
	return {
		type: "windowSize.UpdatePosition",
		data: {
			position:
				typeof document === "object"
					? document.body.scrollTop || document.documentElement.scrollTop || 0
					: 0
		}
	}
}

exports.reducer = { windowSize: windowSizeReducer }
