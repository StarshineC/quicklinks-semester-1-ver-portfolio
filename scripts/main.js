const date = new Date();
const dayOfWeek = date.getDay();

console.log(dayOfWeek);

setMonday = function(today) {
    if (today==true) {
        document.getElementById("today-of-week").innerHTML = "Monday"
        document.getElementById("time-today-2a").style.display = "block";
        document.getElementById("time-today-1b").style.display = "block";
        document.getElementById("time-today-1a").style.display = "block";
    } else {
        document.getElementById("tomorrow-of-week").innerHTML = "Monday"
        document.getElementById("time-tomorrow-2a").style.display = "block";
        document.getElementById("time-tomorrow-1b").style.display = "block";
        document.getElementById("time-tomorrow-1a").style.display = "block";
    }
}

setTuesday = function(today) {
    if (today==true) {
        document.getElementById("today-of-week").innerHTML = "Tuesday"
        document.getElementById("time-today-3b").style.display = "block";
        document.getElementById("time-today-4a").style.display = "block";
    } else {
        document.getElementById("tomorrow-of-week").innerHTML = "Tuesday"
        document.getElementById("time-tomorrow-3b").style.display = "block";
        document.getElementById("time-tomorrow-4a").style.display = "block";
    }
}

setWednesday = function(today) {
    if (today==true) {
        document.getElementById("today-of-week").innerHTML = "Wednesday"
        document.getElementById("time-today-2b").style.display = "block";
        document.getElementById("time-today-1a").style.display = "block";
    } else {
        document.getElementById("tomorrow-of-week").innerHTML = "Wednesday"
        document.getElementById("time-tomorrow-2b").style.display = "block";
        document.getElementById("time-tomorrow-1a").style.display = "block";
    }
}

setThursday = function(today) {
    if (today==true) {
        document.getElementById("today-of-week").innerHTML = "Thursday"
        document.getElementById("time-today-3a").style.display = "block";
        document.getElementById("time-today-4a").style.display = "block";
    } else {
        document.getElementById("tomorrow-of-week").innerHTML = "Thursday"
        document.getElementById("time-tomorrow-3a").style.display = "block";
        document.getElementById("time-tomorrow-4a").style.display = "block";
    }
}

setFriday = function(today) {
    if (today==true) {
        document.getElementById("today-of-week").innerHTML = "Friday"
        document.getElementById("time-today-2a").style.display = "block";
    } else {
        document.getElementById("tomorrow-of-week").innerHTML = "Friday"
        document.getElementById("time-tomorrow-2a").style.display = "block";
    }
}

setSaturday = function(today) {
    if (today==true) {
        document.getElementById("today-of-week").innerHTML = "Saturday"
        document.getElementById("time-today-none").style.display = "block";
    } else {
        document.getElementById("tomorrow-of-week").innerHTML = "Saturday"
        document.getElementById("time-tomorrow-none").style.display = "block";
    }
}

setSunday = function(today) {
    if (today==true) {
        document.getElementById("today-of-week").innerHTML = "Sunday"
        document.getElementById("time-today-none").style.display = "block";
    } else {
        document.getElementById("tomorrow-of-week").innerHTML = "Sunday"
        document.getElementById("time-tomorrow-none").style.display = "block";
    }
}

if (dayOfWeek==1) { // Monday
    setMonday(true);
    setTuesday(false);
}
else if (dayOfWeek==2) { // Tuesday
    setTuesday(true);
    setWednesday(false);
}
else if (dayOfWeek==3) { // Wednesday
    setWednesday(true);
    setThursday(false);
}
else if (dayOfWeek==4) { // Thursday
    setThursday(true);
    setFriday(false);
}
else if (dayOfWeek==5) { // Friday
    setFriday(true);
    setSaturday(false);
}
else if (dayOfWeek==6) { // Saturday
    setSaturday(true);
    setSunday(false);
}
else if (dayOfWeek==0) { // Sunday
    setSunday(true);
    setMonday(false);
}



var toggleSideMenu = false;

buttonToggleSideMenu = function() {
    if (toggleSideMenu == false) {
        toggleSideMenu = true;
        document.getElementById("side-menu").style.right = "-10rem";
    } else {
        toggleSideMenu = false;
        document.getElementById("side-menu").style.right = "3rem"
    }
}