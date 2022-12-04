let a = Array(...Array(8).keys());
a.reduce((promise, index) => {
  return promise.then(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(index);
        fetch('./package.json').then(console.log);
        resolve(promise);
      }, 3000);
    });
  });
}, Promise.resolve());
