// const divs = document.querySelectorAll('.container > div')
// divs.forEach(div => {
//     div.addEventListener('click', (e) => {
//         console.log(e.target.parentElement);
//         e.target.style.backgroundColor = 'green';
//     });
// });

function blankInput() {
    // Check if the form receive blank input
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    if (title == '' || author == '' || pages == '') {
        if (title == '') {
            return 'title';
        } else if (author == '') {
            return 'author';
        } else if (pages == '') {
            return 'pages';
        }
    } else {
        return false;
    };

    
}

function getBookInfo(index) {
    // Get book information from the form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readPrompt = document.getElementById('read-prompt').checked;
    
    switch(index) {
        case 0: return title; break;
        case 1: return author; break;
        case 2: return pages; break;
        case 3: return readPrompt; break;
    }
}

function Book(getBookInfo) {
    // Create book object
    this.title = getBookInfo(0);
    this.author = getBookInfo(1);
    this.pages = getBookInfo(2);
    this.readPrompt = getBookInfo(3);
}

function addNewBook(book) {
    // Add new book to the table
    const table = document.querySelector('table');
    const row = document.createElement('tr');
    const title = `<td>${book.title}</td>`;
    const author = `<td>${book.author}</td>`;
    const pages = `<td>${book.pages}</td>`;
    if (book.readPrompt) {
        readPrompt = `<td><i class="fa-solid fa-check"></i></td>`;
    } else {
        readPrompt = `<td><i class="fa-solid fa-xmark"></i></td>`;
    };
    const trashIcon = `<td><i class="fa-solid fa-trash remove-button"></i></td>`;
    
    row.innerHTML = `${title}\n${author}\n${pages}\n${readPrompt}\n${trashIcon}`;
    table.appendChild(row);
}

document.addEventListener('click', (e) => {
    if (e.target.className.includes('remove-button')) {
        removeBook(e);
    };
})

function removeBook(event) {
    event.target.parentElement.parentElement.remove();
}

const addBookButton = document.getElementById('add-book-button');
addBookButton.addEventListener('click', () => {
    if (!blankInput()) {
        let book = new Book(getBookInfo);
        addNewBook(book);
        book = null;
    } else {
        // Form has blank input
        // console.log(blankInput());
        const blank = document.getElementById(blankInput());
        blank.setAttribute('class', 'blank');
    };
    
});