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
  if ("hello") {
  	return "I can`t hear you";
	} else if ("HELLO") {
	return"YES INDEED";
	} else {
	return"I love you, too.";
	}
}