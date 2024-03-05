const postElements = {
  pageWrap: document.getElementById("pageWrap"),
  cardWrap: document.getElementById("cardWrap"),
  loaderEl: null,
};

export function createAlert(errorMessage, time = 5000) {
  const wrapper = document.createElement("div");
  const pageWrap = postElements.pageWrap;
  wrapper.className = "alert alert-error max-w-64 absolute bottom-2 right-6";
  wrapper.innerHTML = /*html*/ ` <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 26C22.9 26 22 25.1 22 24V16C22 14.9 22.9 14 24 14C25.1 14 26 14.9 26 16V24C26 25.1 25.1 26 24 26ZM26 34H22V30H26V34Z" fill="#E92C2C" />
    </svg>
        <div class="flex flex-col">
        <span>Error</span>
        <span class="text-content2">${errorMessage}</span>
    </div>`;
  if (pageWrap) {
    pageWrap.appendChild(wrapper);
  }
  setTimeout(function () {
    pageWrap.removeChild(wrapper);
  }, time);
}

function createCard(cardContent) {
  const wrapper = document.createElement("div");
  const cardWrap = postElements.cardWrap;
  wrapper.className = "card";
  wrapper.innerHTML = /*html*/ `<div class="card-body">
        <h2 class="card-header">${cardContent.title}</h2>
        <p class="text-content2">
          ${cardContent.body}
        </p>
      </div>`;
  if (cardWrap) {
    cardWrap.appendChild(wrapper);
  }
}

export function createCards(data) {
  data.forEach(function (item) {
    createCard(item);
  });
  /* const cardElms = cloneData.map(function (d) {
    return  `
    <div class="card">
      <div class="card-body">
        <h2 class="card-header">${d.title}</h2>
        <p class="text-content2">
          ${d.body}
        </p>
      </div>
    </div>
  `;
  }); */

  /*   const array = ["Петро", "Андрій", "Василь"];

  const sum = array.reduce(function (accumValue, currentValue, index) {
    return { ...accumValue, [index]: currentValue };
  }, {});

  const animals = ["ant", "bison", "camel", "duck", "elephant"];
  console.log("animals", animals);
  console.log("___slice", animals.slice(-2));
  console.log("___Splice", animals.splice(1, 2));
  console.log("after", animals); */
  // accum
  // 1 => {}     {[0]: "Петро"}
  // accum
  // 2 => {[0]: "Петро"} { [0]: "Петро", [1]: "Андрій"}
  // 3 => { [0]: "Петро", [1]: "Андрій"}, {[0]: "Петро", [1]: "Андрій", [2]: "Василь"}

  // console.log(names);
  /*  const newData = [];
  data.forEach(function (d, i) {
    newData.push({
      body: d.body,
      title: d.title,
      name: `Hello from this index ${i}`,
    });

    return createCard(d);
  });

  const newDataFromMap = data
    .map(function (d, i) {
       return {
         body: d.body,
         title: d.title,
         name: `Hello from this index ${i}`,
       };
    })
    .filter(function (d) {
      if (d !== undefined) {
        return d;
      }
    });
  console.log("data___", data);
  console.log("newData_____", newData);
  console.log("newDataFromMap____", newDataFromMap); */
  /*   for (let i = 0; i < data.length; i++) {
    createCard(data[i]);
  } */
}

export function createPreloader(loadMsg = "Loading") {
  const wrapper = document.createElement("div");
  const pageWrap = postElements.pageWrap;
  postElements.loaderEl = wrapper;
  wrapper.className = "flex justify-center my-5";
  wrapper.innerHTML = /*html*/ `<div class="flex flex-row gap-2 items-center">
              <h6 class="text-base">${loadMsg}</h6>
              <div class="spinner-wave">
                <div class="spinner-wave-dot"></div>
                <div class="spinner-wave-dot"></div>
                <div class="spinner-wave-dot"></div>
                <div class="spinner-wave-dot"></div>
              </div>
            </div>`;

  if (pageWrap) {
    pageWrap.appendChild(wrapper);
  }
}

export function deleteLoader() {
  const loaderEl = postElements.loaderEl;
  const pageWrap = postElements.pageWrap;
  if (loaderEl) {
    pageWrap.removeChild(loaderEl);
  }
}
