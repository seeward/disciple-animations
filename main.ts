namespace SpriteKind {
    export const fish = SpriteKind.create()
}
namespace StatusBarKind {
    export const faith = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "up"
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e e e e e e e e e e f . 
        . f e e e e e e e e e e f . 
        . f e e e e e e e e e e f . 
        . . f e e e e e e e e f . . 
        . . . f d e e e e d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f e e e f . . 
        . . . f f f . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e e e e e e e e e e f . 
        . f e e e e e e e e e e f . 
        . f e e e e e e e e e e f . 
        . . f e e e e e e e e f f . 
        . . . f d e e e e d f d d f 
        . f f 4 f d d d d f 4 4 d f 
        . f d 4 4 f f f f 4 4 f f . 
        . f d d 4 4 4 4 4 4 4 f . . 
        . f d d 4 4 4 4 4 4 4 f . . 
        . f f 4 f f f f f f 4 f . . 
        . . f 4 4 4 f 4 4 4 4 f . . 
        . . . f f f f f 4 4 4 f . . 
        . . . . . . . f e e e f . . 
        . . . . . . . . f f f . . . 
        `,img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e e e e e e e e e e f . 
        . f e e e e e e e e e e f . 
        . f e e e e e e e e e e f . 
        . . f e e e e e e e e f . . 
        . . . f d e e e e d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f e e e f . . 
        . . . f f f . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e e e e e e e e e e f . 
        . f e e e e e e e e e e f . 
        . f e e e e e e e e e e f . 
        . . f e e e e e e e e f . . 
        . . f f d e e e e d f . . . 
        . f 4 4 f d d d d f f f . . 
        . f 4 4 4 f f f f f d d f . 
        . f 4 4 4 4 4 4 4 f d d f . 
        . . f f 4 4 4 4 4 f d d f . 
        . . f 4 f f f f f f 4 f . . 
        . . f 4 4 4 4 f 4 4 4 f . . 
        . . f 4 4 4 f f f f f f . . 
        . . f e e e f . . . . . . . 
        . . . f f f . . . . . . . . 
        `],
    100,
    true
    )
})
function addLoavesAndFishes () {
    list = [sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f d e 5 5 5 e 5 5 e 5 5 5 e . 
        f d e d d 5 e d d e d d 5 e d f 
        f e d d d e d d e d d d e d d f 
        f e d d d e d d e d d d e d d f 
        f d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d f 
        . f f f f f f f f f f f f f f . 
        `, SpriteKind.fish), sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f d e 5 5 5 e 5 5 e 5 5 5 e . 
        f d e d d 5 e d d e d d 5 e d f 
        f e d d d e d d e d d d e d d f 
        f e d d d e d d e d d d e d d f 
        f d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d f 
        . f f f f f f f f f f f f f f . 
        `, SpriteKind.fish), sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f d e 5 5 5 e 5 5 e 5 5 5 e . 
        f d e d d 5 e d d e d d 5 e d f 
        f e d d d e d d e d d d e d d f 
        f e d d d e d d e d d d e d d f 
        f d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d f 
        . f f f f f f f f f f f f f f . 
        `, SpriteKind.fish), sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f d e 5 5 5 e 5 5 e 5 5 5 e . 
        f d e d d 5 e d d e d d 5 e d f 
        f e d d d e d d e d d d e d d f 
        f e d d d e d d e d d d e d d f 
        f d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d f 
        . f f f f f f f f f f f f f f . 
        `, SpriteKind.fish), sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f d e 5 5 5 e 5 5 e 5 5 5 e . 
        f d e d d 5 e d d e d d 5 e d f 
        f e d d d e d d e d d d e d d f 
        f e d d d e d d e d d d e d d f 
        f d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d f 
        . f f f f f f f f f f f f f f . 
        `, SpriteKind.fish)]
    for (let value of list) {
        tiles.placeOnRandomTile(value, sprites.castle.tilePath5)
    }
    fish2 = sprites.create(img`
        . b b b d b d b . . . . . . 
        b b b b d b d b d b d b . b 
        b f b b d b d b d b d b d b 
        b b b b b b b b b b b b b b 
        b b b b d d b d b d b d d b 
        . b b b d d b d b d b d . b 
        `, SpriteKind.fish)
    tiles.placeOnRandomTile(fish2, sprites.castle.tilePath5)
    mySprite2 = sprites.create(img`
        . b b b d b d b . . . . . . 
        b b b b d b d b d b d b . b 
        b f b b d b d b d b d b d b 
        b b b b b b b b b b b b b b 
        b b b b d d b d b d b d d b 
        . b b b d d b d b d b d . b 
        `, SpriteKind.fish)
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tilePath5)
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    facing = "forward"
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d 3 f d d d f . 
        . . f d d d d f d d d f . . 
        . . . f d d d f d d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f e e e f . . 
        . . . f f f . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . f f d d d f d d f f . . 
        . f d 4 f d d d d f 4 d f . 
        f d d 4 4 f f f f 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f f f f f . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . f f d d d f d d f f . . 
        . f d 4 f d d d d f 4 d f . 
        f d d 4 4 f f f f 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f e e e f . . 
        . . . f f f . . f f f . . . 
        `,img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . . f d d d f d d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f f f f f . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . . f d d d f d d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f f f f f . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . . f d d d f d d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f e e e f . . 
        . . . f f f . . f f f . . . 
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "left"
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        f e d d e e e e e e e e f . 
        . f d f d d e e e e e e f . 
        . f d f d d e e e d e e f . 
        . . f d d d d d d d e f . . 
        . . . f d d d d d d f . . . 
        . . . . f f f f f f . . . . 
        . . . f 4 4 f 4 4 4 f . . . 
        . . . f 4 f f f 4 4 f . . . 
        . . . f 4 f d f 4 4 f . . . 
        . . . . f f d f 4 4 f . . . 
        . . . . f f d f f f . . . . 
        . . . f 4 f f f 4 f . . . . 
        . . . f 4 4 4 4 4 f . . . . 
        . . . . f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        f e d d e e e e e e e e f . 
        . f d f d d e e e e e e f . 
        . f d f d d e e e d e e f . 
        . . f d d d d d d d e f . . 
        . . f f d d d d d d f . . . 
        . . f d f f f f f f d f . . 
        . f d d 4 4 4 4 4 f d d f . 
        . . f 4 4 4 4 4 4 f d d f . 
        . f e f 4 4 f 4 4 4 f f . . 
        f e e e f 4 f 4 4 4 f f . . 
        . f e e e f . f f f e e f . 
        . . f e f . . . f e e f . . 
        . . . f . . . . . f f . . . 
        `,img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        f e d d e e e e e e e e f . 
        . f d f d d e e e e e e f . 
        . f d f d d e e e d e e f . 
        . . f d d d d d d d e f . . 
        . . . f d d d d d d f . . . 
        . . . . f f f f f f . . . . 
        . . . f 4 4 f 4 4 4 f . . . 
        . . . f 4 f f f 4 4 f . . . 
        . . . f 4 f d f 4 4 f . . . 
        . . . . f f d f 4 4 f . . . 
        . . . . f f d f f f . . . . 
        . . . f 4 f f f 4 f . . . . 
        . . . f 4 4 4 4 4 f . . . . 
        . . . . f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        f e d d e e e e e e e e f . 
        . f d f d d e e e e e e f . 
        . f d f d d e e e d e e f . 
        . . f d d d d d d d e f . . 
        . . f f d d d d d d f . . . 
        . . f d f f f f f f d f . . 
        . f d d 4 4 4 4 4 f d d f . 
        . . f 4 4 4 4 4 4 f d d f . 
        . f f f 4 4 f 4 4 4 f e . . 
        f e e f f 4 f 4 4 4 e e f . 
        . f e f f f . f f f e e f . 
        . . f e f . . . f e e f . . 
        . . . f . . . . . f f . . . 
        `],
    100,
    true
    )
})
function setupGame () {
    scene.setBackgroundColor(9)
    tiles.setTilemap(tiles.createTilemap(hex`4000100002020201010101010101020202010102020201010202020101010101010101010101010101010101020202010101010101010101010101010101010101010101020302010101010101010203020101020302010102030201010101010101010101010101010101010203020101010101010101010101010101010101010101010203020101020202010102030201010203020101020302010101010101010101010101010101010102030201010101010101010101010101010101010101010102030201010203020101020302010102030201010202020101010101010101010101010101010101020302010101010101020202020202020202020101010101020302010102030201010203020101020302010101010101010101010101010101010101010101010203020101010101010201010101010101010201010101010203020101020302010102030201010203020101010101010101010101010101010101010101010102030201010101010102010101010101010102010101010102030201010203020101020202010102030201010101010101010101010101010101010101010101020302010101010101020101010101010101010101010101020302010102030201010101010101020302010102020201010101010101010101010101010101010203020101010101010201010101010101010101010101010203020101020302010101010101010203020101020302010101010101010101010101010101010102030201010101010102010101010101010101010101010102030201010203020101020202010102030201010203020101010101010101010101010101010101020302010101010101020101010101010101020101010101020302010102030201010203020101020302010102030201010101010101010101010101010101010203020101010101010201010101010101010201010101010203020101020302010102030201010203020101020302010101010101010101010101010101010102030201010101010102020202020202020202010101010102030201010203020101020302010102030201010203020101010101010101010101010101010101020302010101010101010101010101010101010101010101020202010102030201010203020101020202010102030201010101010101010101010101010101010202020101010101010101010101010101010101010101010101010101020302010102030201010101010101020302010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020101020202010101010101010202020101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
        2 2 2 . . . . . . . 2 2 2 . . 2 2 2 . . 2 2 2 . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
        2 . 2 . . . . . . . 2 . 2 . . 2 . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . 
        2 . 2 . . 2 2 2 . . 2 . 2 . . 2 . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . 
        2 . 2 . . 2 . 2 . . 2 . 2 . . 2 . 2 . . 2 2 2 . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . 
        2 . 2 . . 2 . 2 . . 2 . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . 2 . . . . . . . . 2 . . . . . 
        2 . 2 . . 2 . 2 . . 2 . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . 2 . . . . . . . . 2 . . . . . 
        2 . 2 . . 2 . 2 . . 2 2 2 . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . 2 . . . . . . . . . . . . . . 
        2 . 2 . . 2 . 2 . . . . . . . 2 . 2 . . 2 2 2 . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . 2 . . . . . . . . . . . . . . 
        2 . 2 . . 2 . 2 . . . . . . . 2 . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . 2 . . . . . . . . . . . . . . 
        2 . 2 . . 2 . 2 . . 2 2 2 . . 2 . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . 2 . . . . . . . . 2 . . . . . 
        2 . 2 . . 2 . 2 . . 2 . 2 . . 2 . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . 2 . . . . . . . . 2 . . . . . 
        2 . 2 . . 2 . 2 . . 2 . 2 . . 2 . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . 
        2 . 2 . . 2 . 2 . . 2 . 2 . . 2 . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 . . 2 . 2 . . 2 . 2 . . 2 2 2 . . 2 . 2 . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
        . . . . . 2 . 2 . . 2 . 2 . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . 2 2 2 . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.castle.tileGrass1], TileScale.Sixteen))
    statusbar = statusbars.create(20, 4, StatusBarKind.faith)
    statusbar.value = 0
    mySprite = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . . f d d d f d d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f e e e f . . 
        . . . f f f . . f f f . . . 
        `, SpriteKind.Player)
    statusbar.attachToSprite(mySprite)
    mySprite.setPosition(20, 240)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d 3 f d d d f . 
        . . f d d d d f d d d f . . 
        . . . f d d d f d d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f e e e f . . 
        . . . f f f . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . f f d d d f d d f f . . 
        . f d 4 f d d d d f 4 d f . 
        f d d 4 4 f f f f 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f f f f f . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . f f d d d f d d f f . . 
        . f d 4 f d d d d f 4 d f . 
        f d d 4 4 f f f f 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f e e e f . . 
        . . . f f f . . f f f . . . 
        `,img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . . f d d d f d d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f f f f f . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . . f d d d f d d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f f f f f . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . . f d d d f d d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f e e e f . . 
        . . . f f f . . f f f . . . 
        `],
    200,
    true
    )
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    info.setScore(0)
    basket = sprites.create(img`
        . . e f f e . . 
        . e . . . . e . 
        . e . . . . e . 
        . e . . . . e . 
        . e . . . . e . 
        e f e e e e f e 
        . e e e e e e . 
        . . e e e e . . 
        `, SpriteKind.Food)
    basket.setPosition(62, 13)
    hasBasket = false
    facing = "forward"
    showInstructions = false
    addLoavesAndFishes()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "right"
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e e e e e e e e d e f . 
        f e e e e e e e e d d d f . 
        . f e e e e e e d d f d f . 
        . f e e d d e e d d f d f . 
        . . f e d d d d d d d f . . 
        . . . f d d d d d d f . . . 
        . . . . f f f f f f . . . . 
        . . . f 4 4 f 4 4 4 f . . . 
        . . . f 4 f f f 4 4 f . . . 
        . . . f 4 f d f 4 4 f . . . 
        . . . . f f d f 4 4 f . . . 
        . . . . f f d f f f . . . . 
        . . . f 4 f f f 4 f . . . . 
        . . . f 4 4 4 4 4 f . . . . 
        . . . . f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e e e e e e e e d e f . 
        f e e e e e e e e d d d f . 
        . f e e e e e e d d f d f . 
        . f e e d d e e d d f d f . 
        . . f e d d d d d d d f . . 
        . . f f d d d d d d f . . . 
        . . f d f f f f f f d f . . 
        . f d d 4 4 4 4 4 f d d f . 
        . . f 4 4 4 4 4 4 f d d f . 
        . f e f 4 4 f 4 4 4 f f . . 
        f e e e f 4 f 4 4 4 f f . . 
        . f e e e f . f f f e e f . 
        . . f e f . . . f e e f . . 
        . . . f . . . . . f f . . . 
        `,img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e e e e e e e e d e f . 
        f e e e e e e e e d d d f . 
        . f e e e e e e d d f d f . 
        . f e e d d e e d d f d f . 
        . . f e d d d d d d d f . . 
        . . . f d d d d d d f . . . 
        . . . . f f f f f f . . . . 
        . . . f 4 4 f 4 4 4 f . . . 
        . . . f 4 f f f 4 4 f . . . 
        . . . f 4 f d f 4 4 f . . . 
        . . . . f f d f 4 4 f . . . 
        . . . . f f d f f f . . . . 
        . . . f 4 f f f 4 f . . . . 
        . . . f 4 4 4 4 4 f . . . . 
        . . . . f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e e e e e e e e d e f . 
        f e e e e e e e e d d d f . 
        . f e e e e e e d d f d f . 
        . f e e d d e e d d f d f . 
        . . f e d d d d d d d f . . 
        . . f f d d d d d d f . . . 
        . . f d f f f f f f d f . . 
        . f d d 4 4 4 4 4 f d d f . 
        . . f 4 4 4 4 4 4 f d d f . 
        . f f f 4 4 f 4 4 4 f e . . 
        f e e f f 4 f 4 4 4 e e f . 
        . f e f f f . f f f e e f . 
        . . f e f . . . f e e f . . 
        . . . f . . . . . f f . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fish, function (sprite, otherSprite) {
    if (hasBasket) {
        otherSprite.destroy()
        info.changeScoreBy(1)
        basket.setImage(img`
            . . e f f e . . 
            . e . . . . e . 
            . e c c c c e . 
            c e c c c c e c 
            c e c c c c e c 
            e f e e e e f e 
            . e e e e e e . 
            . . e e e e . . 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "forward"
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . . f d d d f d d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f e e e f . . 
        . . . f f f . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f f . 
        . . . f d d d f d d f d d f 
        . f f 4 f d d d d f 4 4 d f 
        . f d 4 4 f f f f 4 4 f f . 
        . f d d 4 4 4 4 4 4 4 f . . 
        . f d d 4 4 4 4 4 4 4 f . . 
        . f f 4 f f f f f f 4 f . . 
        . . f 4 4 4 f 4 4 4 4 f . . 
        . . . f f f f f 4 4 4 f . . 
        . . . . . . . f e e e f . . 
        . . . . . . . . f f f . . . 
        `,img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . . f d d d d f d d d f . . 
        . . . f d d d f d d f . . . 
        . . f 4 f d d d d f 4 f . . 
        . f d 4 4 f f f f 4 4 d f . 
        f d d 4 4 4 4 4 4 4 4 d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        f d d f 4 4 4 4 4 4 f d d f 
        . f f 4 f f f f f f 4 f f . 
        . . f 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 f f 4 4 4 f . . 
        . . f e e e f f e e e f . . 
        . . . f f f . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . . f e e e e e e e e f . . 
        . f e d e e e e e e e e f . 
        . f d d d d e e e e e d f . 
        . f d d d f d d f d d d f . 
        . f f d d d d f d d d f . . 
        . . f f d d d f d d f . . . 
        . f 4 4 f d d d d f f f . . 
        . f 4 4 4 f f f f f d d f . 
        . f 4 4 4 4 4 4 4 f d d f . 
        . . f f 4 4 4 4 4 f d d f . 
        . . f 4 f f f f f f 4 f . . 
        . . f 4 4 4 4 f 4 4 4 f . . 
        . . f 4 4 4 f f f f f f . . 
        . . f e e e f . . . . . . . 
        . . . f f f . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (showInstructions) {
        statusbar.value = 10
        hasBasket = true
    } else {
        showInstructions = true
        game.splash("Gather 5 loaves", "and 2 fish")
    }
})
let showInstructions = false
let hasBasket = false
let basket: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite2: Sprite = null
let fish2: Sprite = null
let list: Sprite[] = []
let mySprite: Sprite = null
let facing = ""
setupGame()
game.onUpdate(function () {
    if (hasBasket) {
        if (facing == "forward" || facing == "up") {
            basket.setPosition(mySprite.x + -7, mySprite.y + 8)
        } else {
            basket.setPosition(mySprite.x + -3, mySprite.y + 8)
        }
    }
    if (info.score() >= 3) {
        statusbar.value = 10
    }
    if (info.score() >= 5) {
        statusbar.value = 75
    }
    if (info.score() == 7) {
        statusbar.value = 100
    }
})
