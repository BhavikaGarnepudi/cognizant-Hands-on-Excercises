function CourseDetails() {

    const courses = [
        {
            id: 1,
            name: "React",
            duration: "6 Weeks"
        },
        {
            id: 2,
            name: "Angular",
            duration: "5 Weeks"
        },
        {
            id: 3,
            name: "NodeJS",
            duration: "4 Weeks"
        }
    ];

    return (
        <div>
            <h2>Course Details</h2>

            <ul>
                {
                    courses.map((course) => (
                        <li key={course.id}>
                            {course.name} - {course.duration}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CourseDetails;