const Header = (title, date, temp) => {
  const headerContainer = document.createElement('div');
  const headerDate      = document.createElement('span');
  const headerTitle     = document.createElement('h1');
  const headerTemp      = document.createElement('span');

  headerContainer.classList.add("header");
  headerDate.classList.add("date");
  headerTemp.classList.add("temp");

  headerDate.textContent =  date;
  headerTitle.textContent = title;
  headerTemp.textContent =  temp;

  headerContainer.appendChild(headerDate);
  headerContainer.appendChild(headerTitle);
  headerContainer.appendChild(headerTemp);

  return headerContainer;


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}
Header('Bloomtech Times', 'JANUARY 6, 2021', '26');

const headerAppender = (selector) => {
  document.querySelector(selector).appendChild(Header('Bloomtech Times', 'JANUARY 6, 2021', '26'));
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}


export { Header, headerAppender }
