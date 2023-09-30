let clickUpgrades = [
    {
        name: 'pickaxe',
        price: 10,
        quantity: 0,
        multiplier: 2
    },
    {
        name: 'knife',
        price: 5,
        quantity: 0,
        multiplier: 1
    }
];

let automaticUpgrades = [
    {
        name: 'rover',
        price: 60,
        quantity: 0,
        multiplier: 6
    },
    {
        name: 'space station',
        price: 80,
        quantity: 0,
        multiplier: 8
    }
];
let autoCheese = 0
let clickCheese = 1
let cheese = 0;
// global variables that store clickAmt AND autoAmt

function increaseCheese() {
    cheese += clickCheese

    drawCheese()
    // drawClickCheese()
}
function totalCheese() {
    let newClickCheese = clickCheese + cheese
}
function drawCheese() {
    let cheeseElement = document.getElementById('cheese')
    // @ts-ignore
    cheeseElement.innerText = cheese
}

function drawClickCheese() {
    let clickCheeseElement = document.getElementById('click-cheese')
    // @ts-ignore
    clickCheeseElement.innerText = clickCheese
}

function buyPickAxe() {
    let clickUpgrade = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'pickaxe')
    if (cheese >= clickUpgrade.price) {
        cheese -= clickUpgrade.price
        drawCheese()
        debugger
        //change data
        clickUpgrade.quantity++
        clickUpgrade.price += 5
        // console.log(clickUpgrade)

        clickCheese += clickUpgrade.multiplier
        // console.log('this is click cheese', clickCheese);
        drawClickCheese()
        // cheese = clickCheese + cheese
        // drawCheese()


        //update dom
        let buyPickAxeElement = document.getElementById('pickaxe-btn')
        // @ts-ignore
        buyPickAxeElement.innerText = clickUpgrade.price

        let addPickAxeElement = document.getElementById('pickaxe')
        // @ts-ignore
        addPickAxeElement.innerText = clickUpgrade.quantity


    }
}


function buyKnife() {
    let clickUpgrade = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'knife')
    if (cheese >= clickUpgrade.price) {
        cheese -= clickUpgrade.price

        //change data
        clickUpgrade.quantity++
        clickUpgrade.price += 5
        console.log(clickUpgrade)

        clickCheese += clickUpgrade.multiplier
        drawClickCheese()

        //update dom
        let buyKnifeElement = document.getElementById('knife-btn')
        // @ts-ignore
        buyKnifeElement.innerText = clickUpgrade.price

        let addKnifeElement = document.getElementById('knife')
        // @ts-ignore
        addKnifeElement.innerText = clickUpgrade.quantity


    }
    drawCheese()


}
function buyRover() {
    let automaticUpgrade = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == 'rover')
    if (cheese >= automaticUpgrade.price) {
        cheese -= automaticUpgrade.price

        //change data
        automaticUpgrade.quantity++
        automaticUpgrade.price += 6
        console.log(automaticUpgrade)

        autoCheese += automaticUpgrade.multiplier
        drawClickCheese()





        //update dom
        let buyRoverElement = document.getElementById('rover-btn')
        // @ts-ignore
        buyRoverElement.innerText = automaticUpgrade.price

        let addRoverElement = document.getElementById('rover')
        // @ts-ignore
        addRoverElement.innerText = automaticUpgrade.quantity


    }
    drawCheese()


}
function buySpaceStation() {
    let automaticUpgrade = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == 'space station')
    if (cheese >= automaticUpgrade.price) {
        cheese -= automaticUpgrade.price

        //change data
        automaticUpgrade.quantity++
        automaticUpgrade.price += 8
        console.log(automaticUpgrade)

        autoCheese += automaticUpgrade.multiplier



        //update dom
        let buySpaceStationElement = document.getElementById('space-station-btn')
        // @ts-ignore
        buySpaceStationElement.innerText = automaticUpgrade.price

        let addSpaceStationElement = document.getElementById('space station')
        // @ts-ignore
        addSpaceStationElement.innerText = automaticUpgrade.quantity


    }
    drawCheese()


}
function collectAutoUpgrades() {
    automaticUpgrades.forEach(automaticUpgrade => cheese += (automaticUpgrade.quantity * automaticUpgrade.multiplier))
    console.log('does this auto upgrade work ', cheese)
    drawCheese()
}





setInterval(collectAutoUpgrades, 3000);