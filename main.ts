let count = 0
basic.showIcon(IconNames.Happy)
basic.pause(5000)
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        while (count < 6) {
            if (input.runningTime() > 60000) {
                basic.clearScreen()
            }
            if (input.buttonIsPressed(Button.A)) {
                count += 1
                basic.showNumber(count)
                music.playMelody("C E - - - - - - ", 300)
            }
        }
        basic.showString("OK")
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
        if (input.buttonIsPressed(Button.B)) {
            count = 0
            basic.clearScreen()
            if (input.temperature() < 20) {
                basic.showString("" + (input.temperature()))
                music.playMelody("D F D F D F D F ", 300)
                basic.showIcon(IconNames.Confused)
            } else {
                basic.showString("" + (input.temperature()))
                music.playMelody("G A B A G - D - ", 200)
                music.playMelody("G A B A G - - - ", 200)
                basic.showIcon(IconNames.Heart)
                basic.pause(5000)
                basic.clearScreen()
            }
        }
    }
})
