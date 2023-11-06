class Book {
    constructor({ id, title, description, author }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
    }
};

class Library {
    constructor()  {
        this.books = [];
    }

    addBook(bookInfo) {
        if (!bookInfo.title || !bookInfo.description || !bookInfo.author){
            return 'Provide all the fields.'
        }

        const book = new Book({
            id: this.books.length + 1,
            ...bookInfo
        });

        this.books.push(book);

        return this.books
    }

    getBooks() {
        return this.books;
    }

    removeBookById(id) {
        const bookIndex = this.books.findIndex(book => book.id === id);

        if (bookIndex === -1) {
            return 'NOT_FOUND';
        }

        this.books.splice(bookIndex, 1);

        return 'Success';
    }

    getBookById(id) {
        const book = this.books.find(book => book.id === id);
        return book ? book : 'NOT_FOUND';
    }

    updateBookByid(id, changes) {
        const bookIndex = this.books.findIndex(book => book.id === id);

        if (bookIndex === -1) {
            return 'NOT_FOUND';
        }

        const book = this.books[bookIndex];

        this.books[bookIndex] = {
            id: id,
            title: changes.title || book.title,
            description: changes.description || book.description,
            author: changes.author || book.author
        };

        return this.books[bookIndex]
    };
};
