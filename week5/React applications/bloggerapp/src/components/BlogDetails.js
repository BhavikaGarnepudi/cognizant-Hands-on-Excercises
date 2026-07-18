function BlogDetails() {

    const blogs = [
        {
            id: 1,
            title: "React Learning",
            author: "Scott"
        },
        {
            id: 2,
            title: "Installation",
            author: "John"
        }
    ];

    return (
        <div>
            <h2>Blog Details</h2>

            <ul>
                {
                    blogs.map((blog) => (
                        <li key={blog.id}>
                            {blog.title} - {blog.author}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default BlogDetails;