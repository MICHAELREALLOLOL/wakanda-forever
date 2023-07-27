sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    NAMOR.setPosition(148, 2)
})
info.onScore(20, function () {
    NAMOR.destroy()
    scene.setBackgroundImage(assets.image`boston-bridge`)
    effects.confetti.startScreenEffect()
    SHURI.sayText("WAKANDA FOREVER!", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    NAMOR.setPosition(148, 2)
})
let NAMOR: Sprite = null
let SHURI: Sprite = null
game.showLongText("When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points! ", DialogLayout.Full)
scene.setBackgroundImage(assets.image`wakanda`)
SHURI = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(SHURI)
SHURI.setStayInScreen(true)
NAMOR = sprites.create(assets.image`namor`, SpriteKind.Enemy)
NAMOR.setPosition(148, 2)
NAMOR.follow(SHURI, 30)
let RIRI = sprites.create(assets.image`riri`, SpriteKind.Guard)
let OKOYE = sprites.create(assets.image`okoye`, SpriteKind.Guard)
controller.moveSprite(RIRI, 34, -53)
controller.moveSprite(OKOYE, -68, -58)
