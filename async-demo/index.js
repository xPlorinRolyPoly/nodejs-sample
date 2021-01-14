console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

/* To deal with async code, there are 3 ways:
    - Callbacks
    - Promises
    - Async/await
*/

function getUser(id) {
    setTimeout(() => { // async function
        console.log('Reading a user from a Database');
        return { id: id, gitHubUsername: 'mosh'};
    }, 2000);
    return 1;
}