import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Trains extends Component {
  state = {
    trains: [],
  };
  componentDidMount() {
    axios.get("https://api.johndoerailways.com/trains")
      .then((response) => {
        this.setState({ trains: response.data });
      })
     .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h1>Trains</h1>
        <table>
          <thead>
            <tr>
              <th>Train Number</th>
              <th>Train Name</th>
              <th>Departure Station</th>
              <th>Arrival Station</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Seat Availability</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
        
              <tr>
                <td>17643</td>
                <td>circar</td>
                <td>coa</td>
                <td>cgl</td>
                <td>4:55 pm</td>
                <td>4:55 pm</td>
                <td>#450</td>
                <td>500</td>
              </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}
export default Trains;