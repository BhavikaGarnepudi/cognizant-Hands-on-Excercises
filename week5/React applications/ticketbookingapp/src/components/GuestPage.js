function GuestPage() {
    return (
        <div>
            <h2>Welcome Guest</h2>

            <h3>Flight Details</h3>

            <table border="1">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Time</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI101</td>
                        <td>Hyderabad</td>
                        <td>Delhi</td>
                        <td>10:00 AM</td>
                    </tr>

                    <tr>
                        <td>AI205</td>
                        <td>Chennai</td>
                        <td>Mumbai</td>
                        <td>2:30 PM</td>
                    </tr>
                </tbody>
            </table>

            <p>Please login to book tickets.</p>
        </div>
    );
}

export default GuestPage;