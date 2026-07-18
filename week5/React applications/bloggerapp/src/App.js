import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Blogger Application</h1>

            {showBooks && <BookDetails />}

            <hr />

            {showBlogs ? <BlogDetails /> : <p>No Blogs Available</p>}

            <hr />

            {showCourses && <CourseDetails />}
        </div>
    );
}

export default App;