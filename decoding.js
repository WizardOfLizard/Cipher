

let message = "sarah"

//hello endolia industries.  this is a challenge.  if you understand this, well done.  i used a personally-made program to encode this.  direct message me the word 'axolotl' and i'll know you won.

let splitMessage = message.split("")

let num = 1

let encoded = splitMessage.map((letter) => {
    let number = 0
    if (letter === "a") {
        number = 1
    } else if (letter === "b") {
        number = 2
    } else if (letter === "c") {
        number = 3
    } else if (letter === "d") {
        number = 4
    } else if (letter === "e") {
        number = 5
    } else if (letter === "f") {
        number = 6
    } else if (letter === "g") {
        number = 7
    } else if (letter === "h") {
        number = 8
    } else if (letter === "i") {
        number = 9
    } else if (letter === "j") {
        number = 10
    } else if (letter === "k") {
        number = 11
    } else if (letter === "l") {
        number = 12
    } else if (letter === "m") {
        number = 13
    } else if (letter === "n") {
        number = 14
    } else if (letter === "o") {
        number = 15
    } else if (letter === "p") {
        number = 16
    } else if (letter === "q") {
        number = 17
    } else if (letter === "r") {
        number = 18
    } else if (letter === "s") {
        number = 19
    } else if (letter === "t") {
        number = 20
    } else if (letter === "u") {
        number = 21
    } else if (letter === "v") {
        number = 22
    } else if (letter === "w") {
        number = 23
    } else if (letter === "x") {
        number = 24
    } else if (letter === "y") {
        number = 25
    } else if (letter === "z") {
        number = 26
    } else {
        return letter
    }
    let shifted = number - num
    num ++
    for (i = 0;shifted < 0;i = 0) {
        shifted += 26
        if (shifted >= 0) {
            i ++
        }
    }
    if (shifted > 26) {
        shifted = shifted % 26
    }
    if (shifted === 0) {
        shifted = 26
    }
    if (shifted === 1) {
        return "a"
    } else if (shifted === 2) {
        return "b"
    } else if (shifted === 3) {
        return "c"
    } else if (shifted === 4) {
        return "d"
    } else if (shifted === 5) {
        return "e"
    } else if (shifted === 6) {
        return "f"
    } else if (shifted === 7) {
        return "g"
    } else if (shifted === 8) {
        return "h"
    } else if (shifted === 9) {
        return "i"
    } else if (shifted === 10) {
        return "j"
    } else if (shifted === 11) {
        return "k"
    } else if (shifted === 12) {
        return "l"
    } else if (shifted === 13) {
        return "m"
    } else if (shifted === 14) {
        return "n"
    } else if (shifted === 15) {
        return "o"
    } else if (shifted === 16) {
        return "p"
    } else if (shifted === 17) {
        return "q"
    } else if (shifted === 18) {
        return "r"
    } else if (shifted === 19) {
        return "s"
    } else if (shifted === 20) {
        return "t"
    } else if (shifted === 21) {
        return "u"
    } else if (shifted === 22) {
        return "v"
    } else if (shifted === 23) {
        return "w"
    } else if (shifted === 24) {
        return "x"
    } else if (shifted === 25) {
        return "y"
    } else if (shifted === 26) {
        return "z"
    }
})

let joinedEncoded = encoded.join("")

console.log(joinedEncoded)