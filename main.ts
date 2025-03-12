//% color="#000000" icon="\uf1b9"
namespace car {
    //% block="Maju 🚗"
    export function maju() {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P9, 180)
        pins.analogWritePin(AnalogPin.P15, 180)
    }

    //% block="Kiri ⬅️"
    export function kiri() {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P9, 180)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P15, 180)
    }

    //% block="Kanan ➡️"
    export function kanan() {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.analogWritePin(AnalogPin.P8, 180)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.analogWritePin(AnalogPin.P12, 180)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    //% block="Mundur 🔄"
    export function mundur() {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P9, 150)
        pins.analogWritePin(AnalogPin.P12, 150)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    //% block="Stop 🛑"
    export function stop() {
        pins.digitalWritePin(DigitalPin.P11, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
}
