const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]





function drawPeopleAtJail() {
    let stringOfEmojis = ''

    let peopleAtJail = people.filter(people => people.location == '🏤')
    // console.log(peopleAtJail)

    peopleAtJail.forEach(person => {
        stringOfEmojis += person.picture
    })
    console.log('string of emojis', stringOfEmojis);

    let locationElement = document.getElementById('🏤')
    // @ts-ignore
    locationElement.innerText = stringOfEmojis
}


function drawPeopleAtHospital() {
    let stringOfEmojis = ''

    let peopleAtHospital = people.filter(people => people.location == '🏥')

    peopleAtHospital.forEach(person => {
        stringOfEmojis += person.picture
    })
    console.log('string of emojis', stringOfEmojis);

    let locationElement = document.getElementById('🏥')
    // @ts-ignore
    locationElement.innerText = stringOfEmojis

}

function drawPeople() {
    locations.forEach(location => {

        let peopleAtLocations = people.filter(people => people.location == location)
        console.log('peopleAtLocations', peopleAtLocations);
        let stringOfEmojis = ''
        peopleAtLocations.forEach(location => stringOfEmojis += location.picture)
        let locationElement = document.getElementById(location)
        // @ts-ignore
        locationElement.innerText = stringOfEmojis

    })

}

function batAttack() {
    let attackedPerson = window.prompt("Bat Attack")
    console.log('attacked people', attackedPerson)
}

// function attackPeopleAtJail() {
//     let peopleAtJail = people.filter(people => people.location == '🏤')
//     peopleAtJail.forEach(person => {
//         console.log(person);
//         person.picture = '🦇'
//     })
//     drawPeople()
// }
function attackLocations(selectedLocation) {
    console.log(selectedLocation);
    // let peopleAtLocations = selectedLocation
    // peopleAtLocations.forEach(person => {
    people.forEach(person => {
        if (person.location == selectedLocation) {
            person.picture = '🦇'
        }
    })
    // loop over my people array 
    // inside the loop, add a condition ... does the person.location == selectedLocation?
    // if the condition is true ... change the person.picture to a bat
    // redraw my people
    drawPeople()
}





drawPeopleAtJail()
drawPeopleAtHospital()
drawPeople()


