var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(string.toUpperCase())
}
function logWhisper(string) {
  return console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  if (string === "hello") {
  	return "I can\'t hear you!";
	} else if (string === "HELLO") {
	return"YES INDEED";
	} else if (string ==="I love you, Grandma.") {
	return"I love you, too.";
	}
}