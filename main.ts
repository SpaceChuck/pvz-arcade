namespace SpriteKind {
    export const Cursor = SpriteKind.create()
    export const Peashooter = SpriteKind.create()
    export const Pea = SpriteKind.create()
    export const HUD = SpriteKind.create()
    export const Sun = SpriteKind.create()
    export const SunCounter = SpriteKind.create()
    export const Plan = SpriteKind.create()
    export const Plant = SpriteKind.create()
    export const FrozenPea = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Sun, SpriteKind.SunCounter, function (sprite, otherSprite) {
    sprite.destroy()
    SunCount += 25
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile2`, function (sprite, location) {
    tiles.setWallAt(location, true)
    sprite.x += 2
    PlantHealth = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Plant)
    PlantHealth.setPosition(location.x, location.y)
    PlantHealth.lifespan = 25000
})
sprites.onOverlap(SpriteKind.FrozenPea, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.vx = -1
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . f 6 6 6 6 6 6 6 f . . . . 
        . . . f 1 1 1 6 1 1 1 f . . . . 
        . . . f f 1 1 6 f 1 1 f . . . . 
        . . . f 1 1 1 6 1 1 1 f . . . . 
        . . . f 6 6 6 6 6 6 6 f . . . . 
        . . . f e e e 6 6 6 6 f . . . . 
        . . . f e e e 6 6 6 6 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . 8 8 8 d 2 9 8 8 8 . . . . 
        . 8 8 8 8 8 2 2 9 8 8 8 8 8 . . 
        . 8 . 8 8 8 2 9 9 8 8 8 . 8 . . 
        . 8 . 8 8 8 9 9 9 8 8 8 . 8 . . 
        . 6 . 9 9 9 9 . 9 9 9 9 . 6 . . 
        . . . 9 9 9 9 . 9 9 9 9 . . . . 
        . . . 9 9 9 9 . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f 6 6 6 6 6 6 6 f . . . . 
        . . . f 1 1 1 6 1 1 1 f . . . . 
        . . . f f 1 1 6 f 1 1 f . . . . 
        . . . f 1 1 1 6 1 1 1 f . . . . 
        . . . f 6 6 6 6 6 6 6 f . . . . 
        . . . f e e e 6 6 6 6 f . . . . 
        . . . f e e e 6 6 6 6 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . 8 8 8 d 2 9 8 8 8 . . . . 
        . 8 8 8 8 8 2 2 9 8 8 8 8 8 . . 
        . 8 . 8 8 8 2 9 9 8 8 8 . 8 . . 
        . 8 . 8 8 8 9 9 9 8 8 8 . 8 . . 
        . 6 . 9 9 9 9 . 9 9 9 9 . 6 . . 
        . . . 9 9 9 9 . 9 9 9 9 . . . . 
        . . . . . . . . 9 9 9 9 . . . . 
        `],
    1000,
    true
    )
    sprite.startEffect(effects.coolRadial, 100)
    sprite.startEffect(effects.blizzard, 100)
    otherSprite.lifespan += -142857142
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (6 == SelectedPlant) {
        SelectedPlant = 1
    } else {
        SelectedPlant += 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SelectedPlant == 1) {
        if (99 < SunCount && !(tiles.tileAtLocationEquals(mySprite.tilemapLocation(), sprites.builtin.brick))) {
            SunCount += -100
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`Peashooter`)
        }
    } else if (SelectedPlant == 2) {
        if (49 < SunCount && !(tiles.tileAtLocationEquals(mySprite.tilemapLocation(), sprites.builtin.brick))) {
            SunCount += -50
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile1`)
        }
    } else if (SelectedPlant == 3) {
        if (49 < SunCount && !(tiles.tileAtLocationEquals(mySprite.tilemapLocation(), sprites.builtin.brick))) {
            SunCount += -50
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile2`)
        }
    } else if (SelectedPlant == 4) {
        if (199 < SunCount && !(tiles.tileAtLocationEquals(mySprite.tilemapLocation(), sprites.builtin.brick))) {
            SunCount += -200
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile3`)
        }
    } else if (SelectedPlant == 5) {
        if (149 < SunCount && !(tiles.tileAtLocationEquals(mySprite.tilemapLocation(), sprites.builtin.brick))) {
            SunCount += -150
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile4`)
        }
    } else if (SelectedPlant == 6) {
        if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation(), sprites.builtin.brick))) {
            tiles.setWallAt(mySprite.tilemapLocation(), false)
            tiles.setTileAt(mySprite.tilemapLocation(), sprites.castle.tileGrass3)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    grid.snap(mySprite)
})
sprites.onOverlap(SpriteKind.Plant, SpriteKind.Plant, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.Food)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`Peashooter1`, function (sprite, location) {
    tiles.setWallAt(location, true)
    sprite.x += 2
    PlantHealth = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Plant)
    PlantHealth.setPosition(location.x, location.y)
    PlantHealth.lifespan = 6000
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    grid.snap(mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    grid.snap(mySprite)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`Peashooter`, function (sprite, location) {
    tiles.setWallAt(location, true)
    sprite.x += 2
    PlantHealth = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Plant)
    PlantHealth.setPosition(location.x, location.y)
    PlantHealth.lifespan = 5000
})
sprites.onCreated(SpriteKind.FrozenPea, function (sprite) {
    sprite.vx = 25
    sprite.lifespan = 6200
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
sprites.onDestroyed(SpriteKind.Plant, function (sprite) {
    tiles.setWallAt(sprite.tilemapLocation(), false)
    tiles.setTileAt(sprite.tilemapLocation(), sprites.castle.tileGrass1)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.vx = -2.5
    }
})
sprites.onCreated(SpriteKind.Pea, function (sprite) {
    sprite.vx = 25
    sprite.lifespan = 6200
    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.builtin.brick, function (sprite, location) {
    game.splash("The Zombies Ate", "Your Brains!")
    game.over(false)
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.Sun, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    otherSprite.follow(SunCounter, 350)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    grid.snap(mySprite)
})
sprites.onOverlap(SpriteKind.Pea, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.lifespan += -142857142
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile1`, function (sprite, location) {
    tiles.setWallAt(location, true)
    sprite.x += 2
    PlantHealth = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Plant)
    PlantHealth.setPosition(location.x, location.y)
    PlantHealth.lifespan = 1000
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    for (let value of sprites.allOfKind(SpriteKind.Plant)) {
        value.setKind(SpriteKind.Food)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile4`, function (sprite, location) {
    tiles.setWallAt(location, true)
    sprite.x += 2
    PlantHealth = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Plant)
    PlantHealth.setPosition(location.x, location.y)
    PlantHealth.lifespan = 5000
})
let mySprite2: Sprite = null
let random = 0
let zombie: Sprite = null
let SunSmall: Sprite = null
let PlantHealth: Sprite = null
let SunCount = 0
let mySprite: Sprite = null
let SunCounter: Sprite = null
let SelectedPlant = 0
SelectedPlant = 1
SunCounter = sprites.create(assets.image`SunIcon`, SpriteKind.SunCounter)
SunCounter.setPosition(148, 110)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f . . . . . . f f . . . . . . f 
    f . . . . . . f f . . . . . . f 
    f . . . . . . f f . . . . . . f 
    f . . . . . . f f . . . . . . f 
    f . . . . . . f f . . . . . . f 
    f . . . . . . f f . . . . . . f 
    f f f f f f f . . f f f f f f f 
    f f f f f f f . . f f f f f f f 
    f . . . . . . f f . . . . . . f 
    f . . . . . . f f . . . . . . f 
    f . . . . . . f f . . . . . . f 
    f . . . . . . f f . . . . . . f 
    f . . . . . . f f . . . . . . f 
    f . . . . . . f f . . . . . . f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Cursor)
let PlantSelector1 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    `, SpriteKind.Cursor)
let PlantSelector2 = sprites.create(img`
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Cursor)
mySprite.setPosition(8, 8)
mySprite.setStayInScreen(true)
mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
controller.moveSprite(mySprite, 100, 100)
game.onUpdate(function () {
    if (SelectedPlant == 1) {
        PlantSelector1.setPosition(8, 88)
        PlantSelector2.setPosition(8, 104)
    } else if (SelectedPlant == 2) {
        PlantSelector1.setPosition(24, 88)
        PlantSelector2.setPosition(24, 104)
    } else if (SelectedPlant == 3) {
        PlantSelector1.setPosition(40, 88)
        PlantSelector2.setPosition(40, 104)
    } else if (SelectedPlant == 4) {
        PlantSelector1.setPosition(56, 88)
        PlantSelector2.setPosition(56, 104)
    } else if (SelectedPlant == 5) {
        PlantSelector1.setPosition(72, 88)
        PlantSelector2.setPosition(72, 104)
    } else if (SelectedPlant == 6) {
        PlantSelector1.setPosition(88, 88)
        PlantSelector2.setPosition(88, 104)
    }
    grid.snap(PlantSelector1)
    grid.snap(PlantSelector2)
})
game.onUpdate(function () {
    SunCounter.sayText(SunCount)
    if (game.runtime() < 40000) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    }
})
game.onUpdate(function () {
    if (72 < mySprite.y) {
        mySprite.y = 72
    } else if (mySprite.x < 24) {
        mySprite.x = 24
    }
})
game.onUpdateInterval(5000, function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        SunSmall = sprites.create(assets.image`SunSmall`, SpriteKind.Sun)
        SunSmall.setPosition(value.x, value.y)
        SunSmall.lifespan = 5000
        SunSmall.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
})
game.onUpdateInterval(randint(15000, 25000), function () {
    for (let index = 0; index < randint(2, 25); index++) {
        zombie = sprites.create(img`
            . . . . f f f f f f f . . . . . 
            . . . f 7 7 7 7 7 7 7 f . . . . 
            . . . f 1 1 1 7 1 1 1 f . . . . 
            . . . f f 1 1 7 f 1 1 f . . . . 
            . . . f 1 1 1 7 1 1 1 f . . . . 
            . . . f 7 7 7 7 7 7 7 f . . . . 
            . . . f e e e 7 7 7 7 f . . . . 
            . . . f e e e 7 7 7 7 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . e e e d 2 d e e e . . . . 
            . e e e e e 2 2 d e e e e e . . 
            . e . e e e 2 d d e e e . e . . 
            . e . e e e d d d e e e . e . . 
            . 7 . 8 8 8 8 . 8 8 8 8 . 7 . . 
            . . . 8 8 8 8 . 8 8 8 8 . . . . 
            . . . 8 8 8 8 . 8 8 8 8 . . . . 
            `, SpriteKind.Enemy)
        random = randint(0, 4)
        zombie.setPosition(tiles.getTileLocation(10, random).x, tiles.getTileLocation(10, random).y)
        zombie.vx = -2.5
        zombie.lifespan = 1000000000
        zombie.setFlag(SpriteFlag.GhostThroughSprites, false)
        animation.runImageAnimation(
        zombie,
        [img`
            . . . . f f f f f f f . . . . . 
            . . . f 7 7 7 7 7 7 7 f . . . . 
            . . . f 1 1 1 7 1 1 1 f . . . . 
            . . . f f 1 1 7 f 1 1 f . . . . 
            . . . f 1 1 1 7 1 1 1 f . . . . 
            . . . f 7 7 7 7 7 7 7 f . . . . 
            . . . f e e e 7 7 7 7 f . . . . 
            . . . f e e e 7 7 7 7 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . e e e d 2 d e e e . . . . 
            . e e e e e 2 2 d e e e e e . . 
            . e . e e e 2 d d e e e . e . . 
            . e . e e e d d d e e e . e . . 
            . 7 . 8 8 8 8 . 8 8 8 8 . 7 . . 
            . . . 8 8 8 8 . 8 8 8 8 . . . . 
            . . . 8 8 8 8 . . . . . . . . . 
            `,img`
            . . . . f f f f f f f . . . . . 
            . . . f 7 7 7 7 7 7 7 f . . . . 
            . . . f 1 1 1 7 1 1 1 f . . . . 
            . . . f f 1 1 7 f 1 1 f . . . . 
            . . . f 1 1 1 7 1 1 1 f . . . . 
            . . . f 7 7 7 7 7 7 7 f . . . . 
            . . . f e e e 7 7 7 7 f . . . . 
            . . . f e e e 7 7 7 7 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . e e e d 2 d e e e . . . . 
            . e e e e e 2 2 d e e e e e . . 
            . e . e e e 2 d d e e e . e . . 
            . e . e e e d d d e e e . e . . 
            . 7 . 8 8 8 8 . 8 8 8 8 . 7 . . 
            . . . 8 8 8 8 . 8 8 8 8 . . . . 
            . . . . . . . . 8 8 8 8 . . . . 
            `],
        1000,
        true
        )
    }
})
game.onUpdateInterval(7000, function () {
    SunSmall = sprites.create(assets.image`SunSmall`, SpriteKind.Sun)
    tiles.placeOnTile(SunSmall, tiles.getTileLocation(randint(1, 9), 0))
    SunSmall.y = -8
    SunSmall.lifespan = 45000
    SunSmall.setFlag(SpriteFlag.GhostThroughWalls, false)
    SunSmall.vy = 10
})
game.onUpdateInterval(4000, function () {
    for (let value of tiles.getTilesByType(assets.tile`Peashooter`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Pea)
        mySprite2.setPosition(value.x, value.y)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Pea)
        mySprite2.setPosition(value.x, value.y)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 7 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Pea)
        mySprite2.setPosition(value.x + 15, value.y)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 9 9 9 9 f . . . . . 
            . . . . . f 9 9 9 9 f . . . . . 
            . . . . . f 9 9 9 9 f . . . . . 
            . . . . . f 9 9 9 9 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.FrozenPea)
        mySprite2.setPosition(value.x, value.y)
    }
})
