let home = 0
let away = 0
let bottomScore = 0
let newScore = 0








function homePlusOne() {
    home++
    console.log('score increase', home);
    let scoreElm = document.getElementById('homeScore')
    // @ts-ignore
    scoreElm.innerText = home
}

function awayPlusOne() {
    away++
    console.log('score increase', away);
    let scoreElm = document.getElementById('awayScore')
    scoreElm.innerText = away
}
function homePlusThree() {
    home += 3
    console.log('score increase by three', home);
    let scoreElm = document.getElementById('homeScore')
    scoreElm.innerText = home
}
function awayPlusThree() {
    away += 3
    console.log('score increase by three', away);
    let scoreElm = document.getElementById('awayScore')
    scoreElm.innerText = away
}
function resetButton() {
    home * newScore
    console.log('score reset', home);
    let scoreElm = document.getElementById('home')
    scoreElm.innerText = newScore
}