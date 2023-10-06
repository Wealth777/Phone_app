function on() {
    lock.style.display = "block"
    home.style.display = "none"
    calcu.style.display = "none"
    wealth.style.display = "none"
    lightBomb.style.display = "none"
    maualcontainer.style.display = "none"
    setCont.style.display = "none"
    forgame.style.display = "none"
    call.style.display = "none"
}

function off() {
    lock.style.display = "none"
    home.style.display = "none"
    calcu.style.display = "none"
    wealth.style.display = "none"
    lightBomb.style.display = "none"
    maualcontainer.style.display = "none"
    setCont.style.display = "none"
    forgame.style.display = "none"
    call.style.display = "none"
}

function unlock() {
    lock.style.display = "none"
    home.style.display = "block"
    calcu.style.display = "none"
    wealth.style.display = "none"
    lightBomb.style.display = "none"
    maualcontainer.style.display = "none"
    setCont.style.display = "none"
    forgame.style.display = "none"
    call.style.display = "none"
}

let dat = new Date();
displaydat.innerHTML = dat.toDateString();

// var getTimeDate = () => {
//     var a = new Date();
//     let myhrss = a.getHours();
//     let mymins =  a.getMinutes();
//     if (myhrss.toString().length < 2) {
//         // myhrs = "0" + hr;
//     } 

//     if (mymins.toString().length <2) {
//         // mymin = "0" + min;
//     }

//     if (myhrss>12) {
//         myhrss = myhrss-12;
//         displaytim.innerHTML = myhrss + ":" + mymins + " PM"
//     } else {
//         displaytim.innerHTML = myhrss + ":" + mymins + " AM" ;
//     }
// }
// setInterval(function() {
//     getTimeDate();
// }, 1000)


let d = new Date();
displaydate.innerHTML = d.toDateString();

var getTimeDate = () => {
    var j = new Date();
    let myhrs = j.getHours();
    let mymin =  j.getMinutes();
    if (myhrs.toString().length < 2) {
        myhrs = "0" + myhrs;
    } 

    if (mymin.toString().length <2) {
        mymin = "0" + mymin;
    }

    if (myhrs>12) {
        myhrs = myhrs-12;
        displaytime.innerHTML = myhrs + ":" + mymin + " PM"
    } else {
        displaytime.innerHTML = myhrs + ":" + mymin + " AM" ;
    }
}
setInterval(function() {
    getTimeDate();
}, 1000)

function callphone(){
    if (call.style.display = "block") {
        screen.innerHTML = home.style.display = "none"
    } else {
        screen.innerHTML = home.style.display = "block"
    }
}

function calculator() {
    //alert('work')
    //calcu.style.display = "block"
    if (calcu.style.display = "block") {
        screen.innerHTML = home.style.display = "none"
    } else {
        screen.innerHTML = home.style.display = "block"
    }
}

function goBack() {
    home.style.display = "block"
    calcu.style.display = "none"
    wealth.style.display = "none"
    lightBomb.style.display = "none"
    call.style.display = "none"
}

function goBackk() {
    home.style.display = "block"
    calcu.style.display = "none"
    wealth.style.display = "none"
    lightBomb.style.display = "none"
    call.style.display = "none"
}

function weatheApp() {
    //alert('work')
    //calcu.style.display = "block"
    if (wealth.style.display = "block") {
        screen.innerHTML = home.style.display = "none"
    } else {
        screen.innerHTML = home.style.display = "block"
    }
}

const fetchInfo = () => {
    let icons = innerHTML = iconweather;
    let apiKey = '5341093c83daafcc83b0abbc73512196'
    let input = userInput.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then((result) => {
            console.log(result);
            temp.innerHTML = `<h1>${result.main.temp}<span>&#8451</h1>`
            icon.src = `https://api.openweathermap.org/img/w/` + result.weather[0].iconweather + ".png";
            nam.innerHTML = `${result.name}`
            coun.innerHTML = `<span>Country: ${result.sys.country}</span>`
            des.innerHTML = `${result.weather[0].description}`
            wind.innerHTML = `<span>Wind speed:${result.wind.speed}km/h</span>`
            disp.style.color = "red"
            des.style.color = "green"
        })
}

function light() {
    if (screen.innerHTML = lightBomb.style.display = "block") {
        screen.innerHTML = home.style.display = "none"
    } else {
        screen.innerHTML = home.style.display = "block"
    }
}

// function love(){
//     if(screen.innerHTML = loveCal.style.display = "block"){
//         screen.innerHTML = home.style.display = "none"
//     } else{
//         screen.innerHTML = home.style.display = "block"
//     }
// }

// let inputs = []
// var statement = []
// var fig = Math.round(Math.random()*100);

// function cal() {
//     if (male.value !="" && female.value !=""){
//         var Player = {
//             malename: male.value,
//             femalename: female.value
//         }

//         inputs.push(Player)
//         console.log(inputs);
//         male.value = ""
//         female.value = ""
//         display()

//     }else{
//         alert("You need to fill up all input")
//     }

//     if (fig <=30){
//         result.innerHTML = "<h1>You do not macth</h1>"
//        console.log("RUN FOR YOUR LIFE")
//        displayer.innerHTML ="<h2>RUN FOR YOUR LIFE</h2>"
//     }else if(fig <=49){
//         result.innerHTML = "<h1>You do not macth</h2>"
//         console.log("RUN FOR YOUR LIFE")
//         displayer.innerHTML ="<h2>Watch are closely before you take a silly step</h2>"
//     }else if(fig <=50){
//         result.innerHTML = "<h1>You macth</h1>"
//         console.log("RUN FOR YOUR LIFE")
//         displayer.innerHTML ="<h2>Sit down and think twice</h2>"
//     }else if(fig <=70){
//         result.innerHTML = "<h1>You macth</h1>"
//         console.log("RUN FOR YOUR LIFE")
//         displayer.innerHTML ="<h2>Give her a trier</h2>"
//     }else if(fig <=90){
//         result.innerHTML = "<h1>You macth</h1>"
//         console.log("RUN FOR YOUR LIFE")
//         displayer.innerHTML ="<h2>Go and propose</h2>"
//     }else if(fig <=100){
//         result.innerHTML = "<h1>You macth</h1>"
//         console.log("RUN FOR YOUR LIFE")
//         displayer.innerHTML ="<h2>Go and Propose, don't think twice</h2>"
//     }

//     localStorage.setItem('names',JSON.stringify(inputs))
// }

// function display(){
//     result.innerHTML = ""
//     disp.innerHTML = ""
//     displayer.innerHTML = ""
//     his.innerHTML = "" 
//     rel.innerHTML = ""
//     disp.innerHTML = `<h3 class="fig">${fig}%</h3>`

//     for (i=0; i< inputs.length; i++){
//         disp.innerHTML +=`
//         <p>${inputs[i].malename} is ${fig}% to marry ${inputs[i].femalename}</p>
//         <p>${statement}</p>
//         `
//     }
// }

// function newPage() {
//     his.innerHTML += `
//         <h1>HISTORY</h1>
//     `

//     let allNames = []

//     allNames = JSON.parse(localStorage.getItem("names"))

//     for (let index = 0; index < allNames.length; index++) {

//         rel.innerHTML += `
//             <div>${allNames[index].malename} and ${allNames[index].femalename} are a ${fig} match</div>
//             <button onclick="deleteAll()" >Delete All</button>
//         `
//     }
// }

// function deleteAll() {
//     // allnames.splice(0)
//     rel.innerHTML =''
// }

function settings() {
    if (screen.innerHTML = setCont.style.display = "block") {
        screen.innerHTML = home.style.display = "none"
    } else {
        screen.innerHTML = home.style.display = "block"
    }
}

function gooBack() {
    home.style.display = "block"
    setCont.style.display = "none"
    calcu.style.display = "none"
    wealth.style.display = "none"
    lightBomb.style.display = "none"
    //loveCal.style.display = "none"
    setCont.style.display = "none"
    forgame.style.display = "none"
    maualcontainer.style.display = "none"
}

function gooBackk() {
    home.style.display = "block"
    setCont.style.display = "none"
    calcu.style.display = "none"
    wealth.style.display = "none"
    lightBomb.style.display = "none"
    //loveCal.style.display = "none"
    setCont.style.display = "none"
    forgame.style.display = "none"
    maualcontainer.style.display = "none"
}

function manual() {
    if (screen.innerHTML = maualcontainer.style.display = "block") {
        screen.innerHTML = home.style.display = "none"
        calcu.style.display = "none"
        wealth.style.display = "none"
        lightBomb.style.display = "none"
        //loveCal.style.display = "none"
        setCont.style.display = "none"

    } else {
        screen.innerHTML = home.style.display = "block"
    }
}

function manualBack(){
    home.style.display = "none"
    setCont.style.display = "none"
    calcu.style.display = "none"
    wealth.style.display = "none"
    lightBomb.style.display = "none"
    //loveCal.style.display = "none"
    setCont.style.display = "block"
    forgame.style.display = "none"
    maualcontainer.style.display = "none"
}

function manualBackk(){
    home.style.display = "block"
    setCont.style.display = "none"
    calcu.style.display = "none"
    wealth.style.display = "none"
    lightBomb.style.display = "none"
    //loveCal.style.display = "none"
    setCont.style.display = "none"
    forgame.style.display = "none"
    maualcontainer.style.display = "none"
}

function game() {
    if (screen.innerHTML = forgame.style.display = "block") {
        screen.innerHTML = home.style.display = "none"
        calcu.style.display = "none"
        wealth.style.display = "none"
        lightBomb.style.display = "none"
        //loveCal.style.display = "none"
        setCont.style.display = "none"

    } else {
        screen.innerHTML = home.style.display = "block"
    }
}