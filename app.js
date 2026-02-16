const condition = true;

const myPromise = new Promise((resolve, reject) => {
  condition ? resolve('Success!') : reject('Failure!');
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
