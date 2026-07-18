function BookDetails() {

    const books = [
        {
            id: 1,
            name: "Master React",
            price: 670
        },
        {
            id: 2,
            name: "Deep Dive into Angular 11",
            price: 800
        },
        {
            id: 3,
            name: "Mongo Essentials",
            price: 450
        }
    ];

    return (
        <div>
            <h2>Book Details</h2>

            <ul>
                {
                    books.map((book) => (
                        <li key={book.id}>
                            {book.name} - ₹{book.price}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default BookDetails;