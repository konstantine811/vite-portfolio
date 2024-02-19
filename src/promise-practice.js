console.log("request data");

/* setTimeout(function () {
  console.log("Preparing data....");
  const data = {
    title: "Some title data",
    status: 200,
    name: "Your name is Volodya",
  };
  setTimeout(function () {
    data.update = true;
    console.log("Data recieved", data);
  }, 2000);
}, 2000); */

/* class Pr {
    constructor(calback) {
        calback(this.resolve, this.reject);
    }


    resolve() {

    }

    reject() {

    }
} */
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Preparing data....");
    const data = {
      title: "Some title data",
      status: 200,
      name: "Your name is Volodya",
    };
    if (data) {
      resolve(data);
    } else {
      reject("Not data");
    }
  }, 2000);
});

promise
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        data.update = true;
        resolve(data);
      }, 2000);
    });
  })
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(data);
      });
    });
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error("from promise: ", error);
  })
  .finally(function () {
    console.log("finally");
  });

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, { title: "Clouds", type: "empty" });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, { country: "Kyiv", long: 342, lat: 4235.4534 });
});

Promise.race([promise1, promise2])
  .then(function (res) {
    console.log(res);
    const p = res[0];
    const p2 = res[1];
    console.log({ ...p, ...p2 });
  })
  .catch(function (e) {
    console.error(e);
  });

/* document.getElementById("#submit").addEventListener("submit", function (e) {
  e.preventDefault();
  const value = document.getElementById("#inputValue");
  if (value >= 1 && value <= 100) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
      });
  } else {
  }
}); */

const inputValue = 85;

Promise.all([
  fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}`),
  fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}/comments`),
])
  .then(function (res) {
    return Promise.all(res.map((i) => i.json()));
  })
  .then(function (res) {
    console.log(res);
  });

fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}`)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    createPostElement(res);
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${inputValue}/comments`
    );
  })
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log("comments", res);
  });

function createPostElement(res) {
  console.log("post element", res);
}
