pins.analogWritePin(AnalogPin.P0, 454)
let isSwitched = 0
let doorgelaten = 0
let weerstand = 0
while (true) {
    if (input.buttonIsPressed(Button.B) && isSwitched == 0) {
        isSwitched = 1
        weerstand = 3.2 - doorgelaten
        basic.showString("" + convertToText(weerstand) + "V")
    } else if (input.buttonIsPressed(Button.A) && isSwitched == 0) {
        isSwitched = 1
        basic.showString(convertToText(pins.analogReadPin(AnalogPin.P0)))
    } else {
        isSwitched = 0
        doorgelaten = Math.trunc(pins.analogReadPin(AnalogPin.P0) / 1024 * 3.2)
        basic.showString("" + convertToText(doorgelaten) + "V")
    }
    basic.pause(100)
}
