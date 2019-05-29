'use strict';

// Basic ES6 Promise syntax
// 3 posible states pending, resolved, rejected
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Worked');
    } else {
        reject('Error, broken')
    }
})

promise
    .then(result => `${result}!`)
    .then(result2 => {
        console.log(result2)
    })
    // catches every error in the chain
    .catch(() => console.log('error'))

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'Hi')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1500, 'Pookie')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(...values)
    })

// real application of Promises
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
        return fetch(url)
            .then(response => response.json())
    }))
    .then(results => console.table(...results))
    .catch(console.log("error"))


// --------------- Solve the questions below: ---------------------------------

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise4000 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "success")
})

// #2) Run the above promise and make it console.log "success"
promise4000.then(msg => console.log(msg))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve('success').then(val => console.log(val));

// #4) Catch this error and console log 'Ooops something went wrong'
// Promise.reject('failed')
Promise.resolve('success').then(val => console.log()).catch(console.log('something went wrong!'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const hrefs = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(hrefs.map(href => {
        return fetch(href)
            .then(response => response.json())
    }))
    .then(results => console.table(results))
    .catch(console.log('error fetching hrefs'))


fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(result => console.table(result));

// ------------------------------ ASYNC AWAIT : ------------------------------------
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.table(...data)
}

fetchUsers()

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(response => response.json())
        ))
        console.table('users: ', ...users);
        // console.table('posts: ', ...posts)
        // console.table('albums: ', ...albums)
    } catch {
        console.log('error getData failed fetching data urls');
        }
    }

getData();

// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
    .then(response => response.json())
    .then(console.log)

async function fetchStarship() {
    try {
        const starship = await fetch('https://swapi.co/api/starships/9/')
        const data = await starship.json();
        console.table(...data)
    } catch {
        console.log('error fetching starship data');
    }
}
fetchStarship()

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const fetchData = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const URLS = async function () {
    const [users, posts, albums] = await Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
    ));
    console.table('users', ...users);
    console.table('post', posts);
    console.table('albums', albums);
}

//  finally
const getData2 = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(async function (urls) {
            const response = await fetch(urls);
            return response.json();
        }));
        console.table('users', users);
        console.table('posta', posts);
        console.table('albums', albums);
    } catch (err) {
        console.log('ooooooops', err);
    } finally {
        console.log('finally always runs with or without error, finally does not pass any value')
    }
}
getData2();

// for await of
const getData3 = async function () {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data)
    }
}

getData3();

async function fetchStarWars () {
    await fetch("https://swapi.co/api/people").then(console.table(data.json()))
}
fetchStarWars();