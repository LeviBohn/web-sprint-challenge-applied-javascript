import axios from "axios";
const articlesURL = 'http://localhost:5001/api/articles';

const Card = (article) => {

  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const authorImgContainer = document.createElement('div');
  const authorImg = document.createElement('img')
  const by = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  authorImgContainer.classList.add('img-container')

  headline.textContent = article.headline;
  authorImg.setAttribute('src', article.authorPhoto);
  by.textContent = 'By ' + article.authorName;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(authorImgContainer);
  authorImgContainer.appendChild(authorImg);
  author.appendChild(by);

  return card;



  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}
console.log(Card({headline: 'Breaking News', authorPhoto: 'photo', authorName: 'Samantha'}))


const cardAppender = (selector) => {
  axios.get('http://localhost:5001/api/articles')
    .then(res => {
      console.log(res.data.articles);
      let articles = res.data.articles;
      for (let key in articles) {
        console.log(key);
        const array = articles[key];
        console.log(array);
        for (let item of array) {
          console.log(item);
          const card = Card(item);
          let section = document.querySelector(selector);
          section.appendChild(card);
        }
      }
    })
    .catch(err => {
      console.log("this isn't working");
    })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
