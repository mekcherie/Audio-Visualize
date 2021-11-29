// -------------------------------------------------------
// Draws bars
// Draw some bars in a rainbow

/**
 * 
 * @param {UINT8 Array} frequencyArray 
 * @param {canvas context} ctx 
 * @param {number} width 
 * @param {number} height 
 */

 function render(frequencyArray, ctx, width, height) {
	// Clear the canvas
	ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
	ctx.fillRect(0, 0, width, height)
	ctx.fill()

	// calculate the number of lines and the step between each line
	const bars = frequencyArray.length 
	const colorStep = 360 / bars

    ctx.lineWidth = 3

    const halfW = width * 0.10
    const halfH = height * 0.5

    const qx = width * 0.50
    const qy = height * 0.25

	frequencyArray.forEach((f, i) => {
        const clockStep = Math.PI * 7 / 12
        // const centerX = width / 2
        // const centerY = height / 2

        const w = f / 255 * width
        const h = f / 255 * height

        const x1 = qx - w * 0.5
        const y1 = halfH - h * 0.5
        const x2 = (qx * 3) - w * 0.5
        const y2 = (qy * 3) - h * 0.5

        const radius = f / 255 * 300
		// Begin a new path
		ctx.beginPath()
		// Draw a circle of radius
        ctx.arc(x1, y1, radius, 0, clockStep)
        ctx.arc(x2, y1, radius, 0, clockStep)
        ctx.arc(x2, y2, radius, 0, clockStep)
        ctx.arc(x1, y2, radius, 0, clockStep)
		// set stroke color
		ctx.strokeStyle = `hsla(${colorStep * i}, 100%, 50%, 0.9)`
		// stroke path
		ctx.stroke()

    })
}

export default render