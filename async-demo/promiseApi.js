const p = Promise.resolve({id: 1}); // can be used in unit tests
p.then(result => console.log(result));

const pr = Promise.reject(new Error('Reason for rejection..'));
pr.catch(err => console.log(err));


// Promises in Parallel 

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation 1..');
        resolve(1);
        //reject(new Error('Something failed.'))
    }, 2000);
})

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation 2..');
        resolve(2);
    }, 2000);
})

/* Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(err.message)); */
Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(err.message));