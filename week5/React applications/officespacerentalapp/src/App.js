import './App.css';
import office1 from './images/office.jpg';
import office2 from './images/office2.jpg';

function App() {

  const officeSpaces = [
    {
      name: "Sky Tower Business Center",
      rent: 55000,
      address: "Madhapur, Hyderabad",
      image: office1
    },
    {
      name: "Tech Park Offices",
      rent: 75000,
      address: "Hitech City, Hyderabad",
      image: office2
    }
  ];

  return (
  <div style={{ textAlign: "center", padding: "20px" }}>
    <h1>Office Space Rental App</h1>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
      }}
    >
      {officeSpaces.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            width: "280px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={office.image}
            alt={office.name}
            style={{
              width: "250px",
              height: "160px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          <h2>{office.name}</h2>

          <p>
            <strong>Rent:</strong>{" "}
            <span
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight: "bold",
              }}
            >
              ₹{office.rent}
            </span>
          </p>

          <p>
            <strong>Address:</strong> {office.address}
          </p>
        </div>
      ))}
    </div>
  </div>
);
}

export default App;