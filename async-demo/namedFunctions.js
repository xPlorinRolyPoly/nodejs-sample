console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
    console.log('User', user);
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    console.log('Repos', repos);
    getCommits(repos[0], displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

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