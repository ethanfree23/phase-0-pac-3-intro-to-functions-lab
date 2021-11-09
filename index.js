"Hello!".toUpperCase();
//1
function shout(string) {
    return string.toUpperCase();
}
//2
function whisper(string) {
    return string.toLowerCase();
}
//3
function logShout(string) {
    return console.log(string.toUpperCase())
}
//4
'hello'.logwhisper
function logWhisper(string) {
    return console.log(whisper('hello'));
}




function sayHiToGrandma(sentence) {
    if (sentence == "I love you, Grandma.") {
        return "I love you, too."
    } else if (sentence == shout(sentence)) {
        return "YES INDEED!"
    } else if (sentence == whisper(sentence)) {
        return "I can't hear you!"
    }
}



// describe('sayHiToGrandma(string)', function() {
//     it('returns "I can\'t hear you!" if `string` is lowercase', function() {
//       expect(sayHiToGrandma('hello')).toEqual("I can't hear you!");
//     })
//   
//     it('returns "YES INDEED!" if `string` is uppercase', function() {
//       expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!");
//     })
//   
//     it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
//       expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.");




