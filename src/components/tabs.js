import axios from "axios";
const tabsURL = 'http://localhost:5001/api/topics';

const Tabs = (topics) => {
  const tabsContainer = document.createElement('div');
  tabsContainer.classList.add('topics');
  topics.forEach(item => {
    const topicTab = document.createElement('div');
    topicTab.classList.add('tab');
    topicTab.textContent = item;
    tabsContainer.appendChild(topicTab);
  })
  return tabsContainer;
}
console.log(Tabs([tabsURL]));

// const tab1 = document.createElement('div');
// const tab2 = document.createElement('div');
// const tab3 = document.createElement('div');
// const tab4 = document.createElement('div');
// const tab5 = document.createElement('div');

// topicTabs.classList.add('topics')
// tab1.classList.add('tab');
// tab2.classList.add('tab');
// tab3.classList.add('tab');
// tab4.classList.add('tab');
// tab5.classList.add('tab');

// tab1.textContent = 'javascript';
// tab2.textContent = 'technology';
// tab3.textContent = 'bootstrap';
// tab4.textContent = 'jquery';
// tab5.textContent = 'node.js';

// topicTabs.appendChild(tab1);
// topicTabs.appendChild(tab2);
// topicTabs.appendChild(tab3);
// topicTabs.appendChild(tab4);
// topicTabs.appendChild(tab5);

// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">technology</div>
// </div>
//

const tabsAppender = (selector) => {
  axios.get(tabsURL)
    .then(res => {
      console.log(res.data.topics);
      let topicTabs = Tabs(res.data.topics);
      console.log(selector);
      let section = document.querySelector(selector);
      section.appendChild(topicTabs);
    })
    .catch(err => {
      console.log("this isn't working");
    })

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
