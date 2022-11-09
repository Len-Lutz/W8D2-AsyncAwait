// This function adds the passed in line to the screen
function displayLine(text) {
    // Send the text to the console
    console.log(text);

    // initialize the list (table)
    let output = `<div>${text}</div>`;
    // send the line to the web page
    document.body.innerHTML += output;
}

function showNum(num, callback) {
    let newLine = `The random number returned was: ${num}`;
    callback(newLine);
}

// create a function that waits half a second and returns a promise
// in the promise we generate a random number between 0 and 100
// if the random number generated is < 25, it rejects it with an error
//   otherwise it resolves it with the generated number
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 100);
            // console.log('Random Number = ' + num);

            if(num > 24) {
                resolve(num);
            } else {
                reject(`Error: Number was < 25  (${num})`)
            }
        }, 500);
    });
}

displayLine('<h2>Getting Random Numbers Between 25 and 100</h2>');

getRandomNumber()
    .then(num => showNum(num, displayLine))
    .catch(err => displayLine(err));

// each of the following calls are delayed incrementally to keep calls in order
setTimeout(() => {
    getRandomNumber()
        .then(num => showNum(num, displayLine))
        .catch(err => displayLine(err));
}, 1000);

setTimeout(() => {
    getRandomNumber()
        .then(num => showNum(num, displayLine))
        .catch(err => displayLine(err));
}, 2000);


// create an asynchronous function that gets the latitude and longitude for the passed in city
async function getLocation(city, callback) {
    let response = await fetch(`https://geocode.xyz/${city}?json=1&auth=4376409060303630461x97281`);
    let displayText = "";

    let data = await response.json();
    if (data.longt != 0.00000) {
        displayText = `For ${city}: Latitude = ${data.latt}, Longitude = ${data.longt}`;
    } else {
        displayText = `Error retrieving data for "${city}": ${data.error.description.substring(3)}`;
    }

    callback(displayText);
}

// each of the following calls are delayed incrementally to keep calls in order
// inform user what we are doing
setTimeout(() => {
    displayLine('<br><h2>Getting Locations for Cities<br>(Chicago, Sydney, Albuquerque, Abqueruer)</h2>')
}, 5000);

// call getLocation function with Chicago
setTimeout(() => {
    getLocation('Chicago', displayLine);
}, 6000);

// call getLocation function with Sydney
setTimeout(() => {
    getLocation('Sydney', displayLine);
}, 7000);
// call getLocation function with Albuquerque
setTimeout(() => {
    getLocation('Albuquerque', displayLine);
}, 8000);

// call getLocation function with Invalid Name
setTimeout(() => {
    getLocation('Abqueruer', displayLine);
}, 9000);
