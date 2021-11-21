// const word = "hello"

const word = "hello"
const grandmaStatement = "I can't hear you!"

function shout() {
    return word.toUpperCase();
}

function whisper() {
    return word.toLowerCase();
}

function logShout() {
    console.log(shout(word))
}


function logWhisper() {
    console.log(whisper(word))
}

function sayHiToGrandma(sentence) {
    if (sentence == "I love you, Grandma.") {
        return "I love you, too."
      } else if (sentence == "HELLO") {
          return "YES INDEED!"
    } else if (sentence = "hello") {
        return "I can't hear you!"
    }
}