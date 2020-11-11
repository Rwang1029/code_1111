let x = 0
let y = 0
basic.forever(function () {
	
})
basic.forever(function () {
    x = 2
    y = 2
    for (let index = 0; index <= 4; index++) {
        led.plot(2, y - index)
        led.plot(x - index, 2)
        led.plot(2, y + index)
        led.plot(x + index, 2)
        basic.pause(100)
    }
})
