kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0,0,0,1]
})

loadSprite("goal_pole", "character/goal_pole.png")
loadSprite("goomba", "character/goomba.png")
loadSprite("mario", "character/mario.png")
loadSprite("pipe", "character/pipe.png")

loadSound("Mario Death - Sound Effect (HD)", "sounds/Mario Death - Sound Effect (HD).mp3")
loadSound("Mario jump - Gaming Sound Effect (HD)", "sounds/Mario jump - Gaming Sound Effect (HD).mp3")


loadSprite()

screen("game", () => {
   layers(['bg', 'obj', 'ui'], 'obj')


})

start("game")