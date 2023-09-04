import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Flight() {
  // State variables for form input and flight data
  const [flightName, setFlightName] = useState('');
  const [flightDestination, setFlightDestination] = useState('');
  const [flightPrice, setFlightPrice] = useState('');
  const [flights, setFlights] = useState([]);
  const [selectedFlightId, setSelectedFlightId] = useState('');

  useEffect(() => {
    // Load flight data when the component mounts
    loadFlights();
  }, []);

  // Function to load flights from the backend
  const loadFlights = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/flight/getall');
      setFlights(response.data);
    } catch (error) {
      console.error('Error loading flights:', error);
    }
  };

  // Function to handle flight registration
  const registerFlight = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/v1/flight/save', {
        flightName,
        flightDestination,
        flightPrice: parseFloat(flightPrice), // Ensure flightPrice is a number
      });
      // Clear form fields and reload flights
      setFlightName('');
      setFlightDestination('');
      setFlightPrice('');
      loadFlights();
      alert('Flight Registration Successful');
    } catch (error) {
      console.error('Flight Registration Failed:', error);
      alert('Flight Registration Failed');
    }
  };

  // Function to handle flight editing
  const editFlight = (flight) => {
    setFlightName(flight.flightName);
    setFlightDestination(flight.flightDestination);
    setFlightPrice(flight.flightPrice.toString()); // Convert flightPrice to string
    setSelectedFlightId(flight._id);
  };

  // Function to handle flight update
  const updateFlight = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8081/api/v1/flight/edit/${selectedFlightId}`, {
        flightName,
        flightDestination,
        flightPrice: parseFloat(flightPrice), // Ensure flightPrice is a number
      });
      // Clear form fields and reload flights
      setFlightName('');
      setFlightDestination('');
      setFlightPrice('');
      setSelectedFlightId('');
      loadFlights();
      alert('Flight Update Successful');
    } catch (error) {
      console.error('Flight Update Failed:', error);
      alert('Flight Update Failed');
    }
  };

  // Function to handle flight deletion
  const deleteFlight = async (flightId) => {
    try {
      await axios.delete(`http://localhost:8081/api/v1/flight/delete/${flightId}`);
      // Reload flights after deletion
      loadFlights();
      alert('Flight Deletion Successful');
    } catch (error) {
      console.error('Flight Deletion Failed:', error);
      alert('Flight Deletion Failed');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Flight Details</h1>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={selectedFlightId ? updateFlight : registerFlight}>
            <div className="form-group">
              <label>Flight Name</label>
              <input
                type="text"
                className="form-control"
                value={flightName}
                onChange={(e) => setFlightName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Flight Destination</label>
              <input
                type="text"
                className="form-control"
                value={flightDestination}
                onChange={(e) => setFlightDestination(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Flight Price</label>
              <input
                type="text"
                className="form-control"
                value={flightPrice}
                onChange={(e) => setFlightPrice(e.target.value)}
              />
            </div>
            <div>
              {selectedFlightId ? (
                <button className="btn btn-warning" type="submit">
                  Update
                </button>
              ) : (
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Flight Name</th>
                <th scope="col">Flight Destination</th>
                <th scope="col">Flight Price</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight) => (
                <tr key={flight._id}>
                  <td>{flight.flightName}</td>
                  <td>{flight.flightDestination}</td>
                  <td>{flight.flightPrice}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm mr-2"
                      onClick={() => editFlight(flight)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteFlight(flight._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Flight;
