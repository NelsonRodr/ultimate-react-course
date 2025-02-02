const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(1);
book;

// Destruct instance variables into own variables
// variables must be called the same as in the object

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
pages;
console.log(author, title, genres);

// Destruct array- into own variables
// does not rely on the variable names but on the order of the array

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [firstGenre, secondGenre] = genres;
console.log(firstGenre, secondGenre);

//rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

//spread operator
const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  //Overwriting an existing property
  pages: 1210,
};

updatedBook;

// Template Literals (= Python f-strings)
const summary = `${title}, is a book with ${pages} pages and published in ${
  publicationDate.split("-")[0]
} The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

// Ternaries Instead of if/else Statements
const pagesRange = pages > 1000 ? "over a thousand" : "less than 10000";
pagesRange;
console.log(`The book has ${pagesRange} pages.`);

// Arrow Functions (= Python lambda functions)

// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

// Short-Circuiting And Logical Operators
// operator doesn't even look at the second value if something is false
// we can use this like an if statement
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "Some string");

//falsy: 0, '', null, undefined
//first string will be converted to true
console.log("jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

// when language is undefined it will assign "NOT TRANSLATED"
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";

spanishTranslation;

//if the reviewsCount is 0 we want to display it nonetheless -> not possible with ||
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

// Optional Chaining

function getTotalReviewCount(book) {
  // When we are not sure if the property exists when can use ? then it will not lead to an error
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0; // so that it will not return NaN we put ?? 0
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

// Array map (= Python list comprehension)

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const books = getBooks();
books;

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
essentialData;

// Array Filter
const longBooks = books.filter((book) => book.pages > 500);
longBooks;

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

// More efficient
// const longBooksWithMovie = books.filter(
//   (book) => book.pages > 500 && book.hasMovieAdaptation
// );

// Array Reduce
// acc is accumulator, but can also called everything we want
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// Array Sort
// to not affect arr use slice() !
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b); // We must not understand this, just remember a - b for ascending and b - a to sort it descending
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// Working with immutable Arrays

// 1) Add book object to array

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array

const booksAfterDelete = books.filter((book) => book.id !== 3); // Book with id 3 gets filtered out
booksAfterDelete;

// 3) Update book objects in the array

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 2000 } : book
);
booksAfterUpdate;

// API fetch (asynchron)

// fetch("http://jsonplaceholder.typicode.com/todos") // javascript does not wait for response
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("jonas");

async function getTodos() {
  const res = await fetch("http://jsonplaceholder.typicode.com/todos"); // await can only be used in async fucntions
  const data = await res.json();
  console.log(data);
}

getTodos();
