console.log('Before');
getUser(1, (user) => {
    console.log('User', user);
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos);
        // CALLBACK HELL
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => { // async function
        console.log('Reading a user from a Database');
        callback({ id: id, gitHubUsername: 'mosh'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['respo1', 'repo2', 'repo3']);
    }, 2000);
}