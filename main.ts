namespace SpriteKind {
    export const fish = SpriteKind.create()
    export const hungry = SpriteKind.create()
    export const jesus = SpriteKind.create()
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
        . 1 1 1 c 1 c 1 . . . . . . 
        1 1 1 1 c 1 c 1 c 1 c 1 . 1 
        1 2 1 1 c 1 c 1 c 1 c 1 c 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 c c 1 c 1 c 1 c c 1 
        . 1 1 1 c c 1 c 1 c 1 c . 1 
        `, SpriteKind.fish)
    tiles.placeOnRandomTile(fish2, sprites.castle.tilePath5)
    mySprite2 = sprites.create(img`
        . 1 1 1 c 1 c 1 . . . . . . 
        1 1 1 1 c 1 c 1 c 1 c 1 . 1 
        1 2 1 1 c 1 c 1 c 1 c 1 c 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 c c 1 c 1 c 1 c c 1 
        . 1 1 1 c c 1 c 1 c 1 c . 1 
        `, SpriteKind.fish)
    tiles.placeOnRandomTile(mySprite2, sprites.castle.tilePath5)
    addMultitudes()
}
function addMultitudes () {
    makeJesus()
    children = [
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 5 f . f 5 f . 
        f 5 5 6 6 6 5 5 f 
        f 5 6 6 6 6 6 5 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e f f f f f e f 
        f f f d f d f f f 
        . f f f f f f f . 
        . . f f 2 f f . . 
        . f 4 f . f 4 f . 
        f 4 4 4 4 4 4 4 f 
        f 4 4 4 4 4 4 4 f 
        . f f f 4 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e e e e e e e f 
        f e e f e f e e f 
        . f e e e e e f . 
        . . f e 2 e f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d f d f d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 3 f . f 3 f . 
        f 3 3 5 5 5 3 3 f 
        f 3 5 5 5 5 5 3 f 
        . f f f 5 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 f 
        f 5 d d d d d 5 f 
        f d d e d e d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 f f f 2 2 f 
        f 2 f f f f f 2 f 
        . f f f f f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . f f f f f . . 
        . f e e e e e f . 
        f e e e e e e e f 
        f e d d d d d e f 
        f d d 9 d 9 d d f 
        . f d d d d d f . 
        . . f d 2 d f . . 
        . f 2 f . f 2 f . 
        f 2 2 6 6 6 2 2 f 
        f 2 6 6 6 6 6 2 f 
        . f f f 6 f f f . 
        . f f . . . f f . 
        `, SpriteKind.hungry)
    ]
    woman = [
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f f f f f f f f . . 
        . f f f f f f f f f f . 
        f f f f f d d f f f f f 
        f f f d d d d d d f f f 
        f f d d f d d f d d f f 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 6 f f f f 6 3 f . 
        f 3 3 6 6 6 6 6 6 3 3 f 
        f 3 f 6 6 6 6 6 6 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e e e e f . 
        f e e e e d d e e e f f 
        e e e d d d d d d e e e 
        e f d d f d d f d d e e 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 5 f f f f 5 3 f . 
        f 3 3 5 5 5 5 5 5 3 3 f 
        f 3 f 5 5 5 5 5 5 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e e e e f . 
        f e e e e d d e e e f f 
        e e e d d d d d d e e e 
        e f d d f d d f d d e e 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 5 f f f f 5 3 f . 
        f 3 3 5 5 5 5 5 5 3 3 f 
        f 3 f 5 5 5 5 5 5 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 d d 5 5 5 f f 
        5 5 5 d d d d d d 5 5 5 
        5 f d d 8 d d 8 d d 5 5 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 4 4 f f f f 4 4 f . 
        f 4 4 4 4 4 4 4 4 4 4 f 
        f 4 f 4 4 4 4 4 4 f 4 f 
        . f f 4 4 f f 4 4 f f . 
        . . f 4 4 f f 4 4 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 d d 5 5 5 f f 
        5 5 5 d d d d d d 5 5 5 
        5 f d d 8 d d 8 d d 5 5 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f a 5 f f f f 5 a f . 
        f a a 5 5 5 5 5 5 a a f 
        f a f 5 5 5 5 5 5 f a f 
        . f f a a f f a a f f . 
        . . f a a f f a a f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e e e e f . 
        f e e e e d d e e e f f 
        e e e d d d d d d e e e 
        e f d d f d d f d d e e 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 5 f f f f 5 3 f . 
        f 3 3 5 5 5 5 5 5 3 3 f 
        f 3 f 5 5 5 5 5 5 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e e e e f . 
        f e e e e d d e e e f f 
        e e e d d d d d d e e e 
        e f d d f d d f d d e e 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 5 f f f f 5 3 f . 
        f 3 3 5 5 5 5 5 5 3 3 f 
        f 3 f 5 5 5 5 5 5 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f f f f f f f f . . 
        . f f f f f f f f f f . 
        f f f f f e e f f f f f 
        f f f e e e e e e f f f 
        f f e e f e e f e e f f 
        f f e e e e e e e e f f 
        . . f e f f f f e f . . 
        . . f f e e e e f f . . 
        . f 3 9 f f f f 9 3 f . 
        f 3 3 9 9 9 9 9 9 3 3 f 
        f 3 f 9 9 9 9 9 9 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f f f f f f f f . . 
        . f f f f f f f f f f . 
        f f f f f d d f f f f f 
        f f f d d d d d d f f f 
        f f d d 9 d d 9 d d f f 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 2 f f f f 2 3 f . 
        f 3 3 2 2 2 2 2 2 3 3 f 
        f 3 f 2 2 2 2 2 2 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e e e e f . 
        f e e e e d d e e e f f 
        e e e d d d d d d e e e 
        e f d d f d d f d d e e 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 5 f f f f 5 3 f . 
        f 3 3 5 5 5 5 5 5 3 3 f 
        f 3 f 5 5 5 5 5 5 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f 2 2 2 2 2 2 f . . 
        . f 2 2 2 2 2 2 2 2 f . 
        f 2 2 2 2 d d 2 2 2 f f 
        2 2 2 d d d d d d 2 2 2 
        2 f d d f d d f d d 2 2 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 7 7 f f f f 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f 
        f 7 f 7 7 7 7 7 7 f 7 f 
        . f f 7 7 f f 7 7 f f . 
        . . f 7 7 f f 7 7 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e e e e f . 
        f e e e e d d e e e f f 
        e e e d d d d d d e e e 
        e f d d f d d f d d e e 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 5 f f f f 5 3 f . 
        f 3 3 5 5 5 5 5 5 3 3 f 
        f 3 f 5 5 5 5 5 5 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e e e e f . 
        f e e e e d d e e e f f 
        e e e d d d d d d e e e 
        e f d d f d d f d d e e 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 5 f f f f 5 3 f . 
        f 3 3 5 5 5 5 5 5 3 3 f 
        f 3 f 5 5 5 5 5 5 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f f f f f f f f . . 
        . f f f f f f f f f f . 
        f f f f f e e f f f f f 
        f f f e e e e e e f f f 
        f f e e f e e f e e f f 
        f f e e e e e e e e f f 
        . . f e f f f f e f . . 
        . . f f e e e e f f . . 
        . f 3 a f f f f a 3 f . 
        f 3 3 a a a a a a 3 3 f 
        f 3 f a a a a a a f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e e e e f . 
        f e e e e d d e e e f f 
        e e e d d d d d d e e e 
        e f d d f d d f d d e e 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 5 f f f f 5 3 f . 
        f 3 3 5 5 5 5 5 5 3 3 f 
        f 3 f 5 5 5 5 5 5 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e e e e f . 
        f e e e e d d e e e f f 
        e e e d d d d d d e e e 
        e f d d f d d f d d e e 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 5 f f f f 5 3 f . 
        f 3 3 5 5 5 5 5 5 3 3 f 
        f 3 f 5 5 5 5 5 5 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e e e e f . 
        f e e e e d d e e e f f 
        e e e d d d d d d e e e 
        e f d d f d d f d d e e 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 5 f f f f 5 3 f . 
        f 3 3 5 5 5 5 5 5 3 3 f 
        f 3 f 5 5 5 5 5 5 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e e e e f . 
        f e e e e d d e e e f f 
        e e e d d d d d d e e e 
        e f d d f d d f d d e e 
        f f d d d d d d d d f f 
        . . f d f f f f d f . . 
        . . f f d d d d f f . . 
        . f 3 5 f f f f 5 3 f . 
        f 3 3 5 5 5 5 5 5 3 3 f 
        f 3 f 5 5 5 5 5 5 f 3 f 
        . f f 3 3 f f 3 3 f f . 
        . . f 3 3 f f 3 3 f . . 
        `, SpriteKind.hungry)
    ]
    multiudes = [
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f f f f f f f f . . 
        . f f f f f f d f f f . 
        . f f f f d d d d f f . 
        . f f d f d d f d f f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f f f d d f f f . . 
        . . f f f f f f f f . . 
        . f 8 b f f f f b 8 f . 
        f 8 8 b b b b b b 8 8 f 
        f 8 f b b b b b b f 8 f 
        . f f 8 8 f f 8 8 f f . 
        . . f 8 8 f f 8 8 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 d 5 5 f . 
        . f 5 5 5 d d d d 5 f . 
        . f 5 d f d d f d 5 f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c 6 f f f f 6 c f . 
        f c c 6 6 6 6 6 6 c c f 
        f c f 6 6 6 6 6 6 f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f f f f f f f f . . 
        . f f f f f f e f f f . 
        . f f f e e e e e f f . 
        . f f e f e e f e f f . 
        . f e e e e e e e e f . 
        . f e e e f f e e e f . 
        . . f f f f f f f f . . 
        . . f f f e e f f f . . 
        . f 5 5 f f f f 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 f 
        f 5 f 5 5 5 5 5 5 f 5 f 
        . f f 5 5 f f 5 5 f f . 
        . . f 5 5 f f 5 5 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f e e f f f f e e f . 
        f e e e e e e e e e e f 
        f e f e e e e e e f e f 
        . f f e e f f e e f f . 
        . . f e e f f e e f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f 2 2 2 2 2 2 f . . 
        . f 2 2 2 2 2 d 2 2 f . 
        . f 2 2 2 d d d d 2 f . 
        . f 2 d f d d f d 2 f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f e e f f f f e e f . 
        f e e e e e e e e e e f 
        f e f e e e e e e f e f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 e 5 5 f . 
        . f 5 5 5 e e e e 5 f . 
        . f 5 e f e e f e 5 f . 
        . f e e e e e e e e f . 
        . f e e e f f e e e f . 
        . . f e f e e f e f . . 
        . . f f e e e e f f . . 
        . f 8 b f f f f b 8 f . 
        f 8 8 b b b b b b 8 8 f 
        f 8 f b b b b b b f 8 f 
        . f f 8 8 f f 8 8 f f . 
        . . f 8 8 f f 8 8 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f f f f f f f f . . 
        . f f f f f f d f f f . 
        . f f f f d d d d f f . 
        . f f d f d d f d f f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c 1 f f f f 1 1 f . 
        f c c 1 1 1 1 1 1 1 1 f 
        f c f 1 1 1 1 1 1 f 1 f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d 8 d d 8 d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f e e f d f . . 
        . . f f e e e e f f . . 
        . f c 4 f f f f 4 c f . 
        f c c 4 4 4 4 4 4 c c f 
        f c f 4 4 4 4 4 4 f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f 7 7 f f f f 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 f 
        f 7 f 7 7 7 7 7 7 f 7 f 
        . f f 7 7 f f 7 7 f f . 
        . . f 7 7 f f 7 7 f . . 
        `, SpriteKind.hungry),
    sprites.create(img`
        . . . f f f f f f . . . 
        . . f e e e e e e f . . 
        . f e e e e e d e e f . 
        . f e e e d d d d e f . 
        . f e d f d d f d e f . 
        . f d d d d d d d d f . 
        . f d d d f f d d d f . 
        . . f d f d d f d f . . 
        . . f f d d d d f f . . 
        . f c b f f f f b c f . 
        f c c b b b b b b c c f 
        f c f b b b b b b f c f 
        . f f c c f f c c f f . 
        . . f c c f f c c f . . 
        `, SpriteKind.hungry)
    ]
    for (let value2 of multiudes) {
        tiles.placeOnRandomTile(value2, sprites.castle.tilePath5)
        value2.follow(mySprite3, 20)
    }
    for (let value3 of woman) {
        tiles.placeOnRandomTile(value3, sprites.castle.tilePath5)
        value3.follow(mySprite3, 20)
    }
    for (let value4 of children) {
        tiles.placeOnRandomTile(value4, sprites.castle.tilePath5)
        value4.follow(mySprite3, 20)
    }
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
function makeJesus () {
    canHeal = false
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . 
        . 5 5 5 5 5 5 5 5 5 . 
        5 . . f f f f f . . 5 
        5 . f e e e e e f . 5 
        . 5 5 5 5 5 5 5 5 5 . 
        f e e d d d d d e e f 
        f e d d 8 d 8 d d e f 
        f e d d d d d d d e f 
        f e d d d f d d d e f 
        . f d d d f d d d f . 
        . f f d d d d d f f . 
        f 1 1 f f f f f 1 1 f 
        f 1 1 1 1 1 1 1 1 1 f 
        f f f f f f f f f f f 
        f 1 1 1 1 1 1 1 1 1 f 
        . f f f f f f f f f . 
        `, SpriteKind.jesus)
    tiles.placeOnRandomTile(mySprite3, sprites.castle.tilePath5)
    mySprite3.setVelocity(50, 50)
    mySprite3.setFlag(SpriteFlag.BounceOnWall, true)
}
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
    basket.setPosition(75, 240)
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
        if (info.score() == 7) {
            basket.startEffect(effects.halo, 5000)
        }
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.hungry, function (sprite, otherSprite) {
    if (info.score() >= 7 && canHeal) {
        info.changeScoreBy(1)
        otherSprite.startEffect(effects.hearts, 2000)
        pause(100)
        otherSprite.destroy()
    }
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.jesus, function (sprite, otherSprite) {
    if (info.score() >= 7) {
        canHeal = true
        sprite.startEffect(effects.halo, 5000)
    }
})
let showInstructions = false
let hasBasket = false
let basket: Sprite = null
let statusbar: StatusBarSprite = null
let canHeal = false
let mySprite3: Sprite = null
let multiudes: Sprite[] = []
let woman: Sprite[] = []
let children: Sprite[] = []
let mySprite2: Sprite = null
let fish2: Sprite = null
let list: Sprite[] = []
let mySprite: Sprite = null
let facing = ""
setupGame()
game.onUpdate(function () {
    if (info.score() == children.length + woman.length + multiudes.length + 7) {
        game.over(true)
    }
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
