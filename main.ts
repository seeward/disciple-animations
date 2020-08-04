controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
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
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
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
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`4000100004040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040401030303020404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040401030303030302040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040401030303030303030204040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040303030303030304040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040403030303030303040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404030303030303030404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile7], TileScale.Sixteen))
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
    . . f d d d d f d d d f . . 
    . . f f d d d f d d f f . . 
    . f d 4 f d d d d f 4 d f . 
    f d d 4 4 f f f f 4 4 d d f 
    f d d f 4 4 4 4 4 4 f d d f 
    f d d f 4 4 4 4 f f f d d f 
    . f f 4 f f f f 4 4 4 f f . 
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
    f d d f 4 4 4 4 f f f d d f 
    . f f 4 f f f f 4 4 4 f f . 
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
100,
true
)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
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
            . . f d d d d f d d d f . . 
            . . f f d d d f d d f f . . 
            . f d 4 f d d d d f 4 d f . 
            f d d 4 4 f f f f 4 4 d d f 
            f d d f 4 4 4 4 4 4 f d d f 
            f d d f 4 4 4 4 f f f d d f 
            . f f 4 f f f f 4 4 4 f f . 
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
            f d d f 4 4 4 4 f f f d d f 
            . f f 4 f f f f 4 4 4 f f . 
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
        100,
        true
        )
    }
})
