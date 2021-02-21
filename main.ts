let janken = 0
let music2 = 0
let count = 0
music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
basic.showIcon(IconNames.Happy)
basic.pause(9000)
soundExpression.hello.play()
basic.clearScreen()
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        while (count < 6) {
            if (input.runningTime() > 60000) {
                basic.clearScreen()
            }
            if (input.pinIsPressed(TouchPin.P0)) {
                count += 1
                basic.showNumber(count)
                music.playMelody("C E - - - - - - ", 300)
                basic.clearScreen()
            }
        }
        music2 = randint(0, 1)
        basic.showString("OK")
        if (music2 == 0) {
            basic.showIcon(IconNames.Chessboard)
            music.playMelody("- C - C - A - G ", 300)
            music.playMelody("A C5 A G A A C G ", 300)
            music.playMelody("A C5 A G A A C C ", 300)
            music.playMelody("F F C C F G F C5 ", 300)
            music.setTempo(300)
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(466, music.beat(BeatFraction.Double))
            music.playMelody("A G G F F F - F ", 300)
            music.playMelody("F G A G G G - C ", 300)
            music.playMelody("C - D D D - - - ", 300)
            count = 0
            basic.pause(5000)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.Heart)
            music.playMelody("E - E E E - F G ", 300)
            music.playMelody("G - G G G G G A ", 300)
            music.playMelody("A - A F F - E F ", 300)
            music.playMelody("F F - - C C D D ", 300)
            music.playMelody("E E E - E E E - ", 300)
            music.playMelody("E E E - E E E - ", 300)
            music.playMelody("D - E - D C C C ", 300)
            count = 0
            basic.pause(5000)
            basic.clearScreen()
        }
    } else if (input.buttonIsPressed(Button.B)) {
        count = 0
        basic.clearScreen()
        if (input.temperature() < 20) {
            basic.showString("" + (input.temperature()))
            music.playMelody("D F D F D F D F ", 300)
            basic.showIcon(IconNames.Confused)
            basic.pause(5000)
            basic.clearScreen()
        } else {
            basic.showString("" + (input.temperature()))
            music.playMelody("G A B A G - D - ", 200)
            music.playMelody("G A B A G - - - ", 200)
            basic.showIcon(IconNames.Happy)
            basic.pause(5000)
            basic.clearScreen()
        }
    } else if (input.buttonIsPressed(Button.A)) {
        janken = randint(0, 2)
        if (janken == 0) {
            basic.showString("G")
            soundExpression.happy.play()
            basic.pause(2000)
            basic.showIcon(IconNames.Asleep)
        } else if (janken == 1) {
            basic.showString("C")
            soundExpression.slide.play()
            basic.pause(2000)
            basic.showIcon(IconNames.Surprised)
        } else {
            basic.showString("P")
            soundExpression.yawn.play()
            basic.pause(2000)
            basic.showLeds(`
                . # . # .
                . . . . .
                # # # # #
                . # . # .
                . . # . .
                `)
        }
        basic.clearScreen()
        while (!(input.buttonIsPressed(Button.AB))) {
            if (input.buttonIsPressed(Button.AB)) {
                basic.showIcon(IconNames.Sad)
                soundExpression.sad.play()
                basic.pause(2000)
                basic.clearScreen()
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                basic.showIcon(IconNames.Happy)
                soundExpression.twinkle.play()
                basic.pause(2000)
                basic.clearScreen()
                break;
            } else {
                if (input.pinIsPressed(TouchPin.P0)) {
                    break;
                }
            }
        }
    } else if (input.logoIsPressed()) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            # # # # #
            . . . . .
            `)
        music.setTempo(120)
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.pause(5000)
        basic.clearScreen()
    }
})
