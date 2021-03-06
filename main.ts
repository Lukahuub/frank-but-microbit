input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let speed = 500
let fruit = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    fruit.change(LedSpriteProperty.Y, 1)
    basic.pause(speed)
    if (fruit.get(LedSpriteProperty.Y) == 4) {
        if (fruit.get(LedSpriteProperty.X) == player.get(LedSpriteProperty.X)) {
            game.addScore(1)
            speed += -10
        } else {
            game.gameOver()
        }
        fruit.set(LedSpriteProperty.X, randint(0, 4))
        fruit.set(LedSpriteProperty.Y, 0)
    }
})
