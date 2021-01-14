console.log('Before');

/* getUser(1, (user) => {
    console.log('User', user);
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos);
        // CALLBACK HELL
    });
}); */

// Promise based approach
/* getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits))
    .catch(err => console.log('Error', err.message)); */

async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (error) {
        console.log('Error', error.message);
    }
    
}    
displayCommits();

console.log('After');

function getUser(id) {
    return new Promise((resolve, rejected) => {
        // Kick off some async work..
        setTimeout(() => { 
            console.log('Reading a user from a Database');
            resolve({ id: id, gitHubUsername: 'mosh'});
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            // resolve(['respo1', 'repo2', 'repo3']);
            reject(new Error('Could not get the Repos.'))
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API...');
            resolve(['commit1', 'commit2']);
        }, 2000);
    });
}