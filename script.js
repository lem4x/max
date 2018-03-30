// The Mastery Calculator lets you enter how many hours you practice per day on average
// and will tell you how much time it will take you to reach Mastery (or 10 000 hours)

// userInputSkill "What do you want to master?"
// userInputTime "How many hours do you practice each day on average?"

// RF1: How often do you practice a week?
// RF2: How long are these sessions on average?
// RF3: RF1 * RF2

// hour = 1;
// day = 24 * hours
// week = 7 * day
// month = * 4 * week
// year = 12 * month

// mastery >= 10000 * hours
// output = "It will take you " + years + " or " +  months  + " or " +  weeks
// + " or " +   days " to master " + userInputSkill " if you keep practicing "
// + userInputTime + " a day."

// RF4: Display in Circles (CSS)



let hour = 1;
let day = 24 * hour;
let week = 7 * day;
let month = 4 * week;
let year = 12 * month;
let totalTime = 10000;

let userInputSkill = window.prompt("What do you want to master?");
let userInputTime = window.prompt("How many hours do you practice each day?");

function getDuration () {
  window.prompt("How many hours do you practice each day?");
  let result = Math.floor(totalTime / userInputTime);
  alert('It will take you ' + result + ' days to master ' + userInputSkill '. Good luck!');
};

getDuration();
