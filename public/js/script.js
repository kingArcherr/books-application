'use strict';

const form = document.querySelector('.form');
const forrmInput = document.querySelector('.form__input');
const headerHeading = document.querySelector('.header-heading');
const headerText = document.querySelector('.header-text');
const bookSection = document.querySelector('.section-book');

const clearAndInsert = (string) => {
  bookSection.innerHTML = '';
  bookSection.insertAdjacentHTML('afterbegin', string);
};

const createBookInfo = () => {
  const bookDetails = fetch(`/books?book=${forrmInput.value}`);

  bookDetails.then((res) => {
    res.json().then((data) => {
      console.log(data);
      if (data.error) clearAndInsert(data.error);
      else {
        const markup = `
         <div class="books">
        <ul class="book">
          <li class="book-details">
            <h4 class="book-heading">Title :</h4>
            <p class="book-text">${
              data.bookInfo.title ? data.bookInfo.title : 'No info Provided'
            }</p>
          </li>

          <li class="book-details">
            <h4 class="book-heading">Authors :</h4>
            <p class="book-text">${
              data.bookInfo.authors ? data.bookInfo.authors : 'No info Provided'
            }</p>
          </li>

          <li class="book-details">
            <h4 class="book-heading">Description:</h4>
            <p class="book-text book-description">${
              data.bookInfo.description
                ? data.bookInfo.description
                : 'No info Provided'
            }</p>
          </li>

          <li class="book-details">
            <h4 class="book-heading">Page Count :</h4>
            <p class="book-text ">${
              data.bookInfo.pageCount
                ? data.bookInfo.pageCount
                : 'No info Provided'
            }</p>
          </li>

          <li class="book-details">
            <h4 class="book-heading">Categories :</h4>
            <p class="book-text ">${
              data.bookInfo.categories
                ? data.bookInfo.categories
                : 'No info Provided'
            }</p>
          </li>

          <li class="book-details">
            <h4 class="book-heading">Average Ratings :</h4>
            <p class="book-text ">${
              data.bookInfo.averageRating
                ? data.bookInfo.averageRating
                : 'No info Provided'
            }</p>
          </li>

          <li class="book-details">
            <h4 class="book-heading">Maturity :</h4>
            <p class="book-text ">${
              data.bookInfo.maturityRating
                ? data.bookInfo.maturityRating
                : 'No info Provided'
            }</p>
          </li>

          <li class="book-details">
            <h4 class="book-heading">Image :</h4>
            <img
              src=${data.bookInfo.imageLinks.smallThumbnail}
              class="book-image"
              alt="Book Image"
            />
          </li>

          <li class="book-details">
            <h4 class="book-heading">Language :</h4>
            <p class="book-text">${
              data.bookInfo.language
                ? data.bookInfo.language
                : 'No info Provided'
            }</p>
          </li>
        </ul>
      </div>
         `;

        clearAndInsert(markup);
      }
    });
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  headerHeading.style.color = '#808080';
  headerText.style.color = '#808080';

  const markup = '<h4 class="book-wait-text">Getting all details 🥰</h4>';

  clearAndInsert(markup);

  createBookInfo();

  forrmInput.value = '';
});

console.log(bookSection);
