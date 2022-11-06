# W8D2-AsyncAwait

## Requirements
Write an asynchronous function and call it with async/await

- Write function called getRandomNumber that returns a promise
- In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
- Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
- Invoke your async function

## Fetch remote data using async/await

- Write an asynchronous function that accepts 1 parameter
  - A city name

- When invoked, this function should use "geocode.xyz" 's API retrieve the city data, which uses a URL formatted as follows:

  ### https://geocode.xyz/seattle?json=1

  - Once retrieved, print to the console the latitude and longitude

  - Invoke your async function with a few cities as a test

<B>(Note: the API will only allow you 2 calls per second, so if you are getting errors, and you think you shouldn't be, try calling fetching only ONCE per execution.)</b>

Then, within your group, please take turns sharing your work. Provide feedback to your teammates on ways to improve what has already been written. 

<B>Submit a link to a GitHub repo containing your code.</b>
