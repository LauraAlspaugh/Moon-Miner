let clickUpgrades = [
    {
        name: 'pickaxe',
        price: 100,
        quantity: 0,
        multiplier: 2
    },
    {
        name: 'knife',
        price: 50,
        quantity: 0,
        multipliers: 1
    }
];

let automaticUpgrades = [
    {
        name: 'rover',
        price: 600,
        quantity: 0,
        multiplier: 20
    },
    {
        name: 'space station',
        price: 800,
        quantity: 0,
        multiplier: 30
    }
];
let autoCheese = 0
let cheese = 1000;
// global variables that store clickAmt AND autoAmt

function increaseCheese() {
    cheese++
    drawCheese()
    drawClickCheese()
}

function drawCheese() {
    let cheeseElement = document.getElementById('cheese')
    // @ts-ignore
    cheeseElement.innerText = cheese
}

function drawClickCheese() {
    let autoCheeseElement = document.getElementById('auto cheese')
    // @ts-ignore
    autoCheeseElement.innerText = autoCheese
    let totalCheese = clickUpgrades.find(clickUpgrade => clickUpgrade.quantity + clickUpgrade.multiplier)

}

function buyPickAxe() {
    let clickUpgrade = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'pickaxe')
    if (cheese >= clickUpgrade.price) {
        cheese -= clickUpgrade.price

        //change data
        clickUpgrade.quantity++
        clickUpgrade.price += 25
        console.log(clickUpgrade)

        // totalCheese = clickUp quantity + total resource


        //update dom
        let buyPickAxeElement = document.getElementById('pickaxe-btn')
        buyPickAxeElement.innerText = clickUpgrade.price

        let addPickAxeElement = document.getElementById('pickaxe')
        addPickAxeElement.innerText = clickUpgrade.quantity


    }
    drawCheese()


}
function buyKnife() {
    let clickUpgrade = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'knife')
    if (cheese >= clickUpgrade.price) {
        cheese -= clickUpgrade.price

        //change data
        clickUpgrade.quantity++
        clickUpgrade.price += 25
        console.log(clickUpgrade)


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
        automaticUpgrade.price += 25
        console.log(automaticUpgrade)


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
        automaticUpgrade.price += 25
        console.log(automaticUpgrade)


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





