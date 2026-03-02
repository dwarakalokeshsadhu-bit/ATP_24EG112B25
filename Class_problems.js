// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)
class Book {
    title;
    author;
    pages;
    isAvailable;
    constructor(title, author, pages, isAvailable=true) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable; 
    }
    borrow() {
        this.isAvailable = false;
    }

    
    returnBook() {
        this.isAvailable = true;


    }
    getInfo() {

        return console.log(`"The ${this.title} by ${this.author} (${this.pages})  and are ${this.isAvailable}"`)
    }
    isLongBook() {
        if(this.pages > 300)
            return true
        else 
            return false
    }
}


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.

let b1 = new Book("Harry Potter", "The Hobbit",199,true)
let b2 = new Book("ben 10", "Max Tension",200,true)
let b3 = new Book("Shin chan", "Suzuka",99,true)
let b4 = new Book("Dragon Booster", "kaay",743,false)
let b5 = new Book("hiedi", "loki",322,false)

//   2. Perform the following operations:

//       i. Display info of all books
b1.getInfo()
b2.getInfo()
b3.getInfo()
b4.getInfo()
b5.getInfo()

//       ii. Borrow 2 books and show their availability status
b1.borrow()
b2.borrow()
b1.getInfo()
b2.getInfo()

//       iii. Return 1 book and show updated status
b1.returnBook()
b1.getInfo()

//       iv. Count how many books are "long books" (more than 300 pages)
let longBooksCount = 0;
let books = [b1, b2, b3, b4, b5];       
for (let book of books) {
    if (book.isLongBook()) {
        longBooksCount++;
    }
}
console.log(`Number of long books: ${longBooksCount}`);

//       v. List all available books
console.log("Available books:")
for (let book of books) {
    if (book.isAvailable) {
        console.log(`- ${book.title} by ${book.author}`);
    }
}
