input.onGesture(Gesture.LogoUp, function () {
    while (true) {
        player.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    while (true) {
        player.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    while (true) {
        player.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    while (true) {
        player.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
})
let player: game.LedSprite = null
let food = game.createSprite(randint(0, 4), randint(0, 4))
player = game.createSprite(2, 2)
basic.forever(function () {
	
})
