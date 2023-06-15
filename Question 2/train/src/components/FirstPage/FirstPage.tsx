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
      <div className="main-container">
        <div className="container">
        <h2 className="heading">MAS HYD Express 12603</h2>
            <div className="container">

                <div className="destination">
                    <div className="row">
                        <p className="p1"> Arrival: 16:45</p>
                        <p className="p2"> Departure: 05:45</p>
                    </div>
                </div>
                    
                <div className="type">
                    <div className="container-items">
                        <div className="mini-container">
                            <div className="items">
                                <p>sleeper</p>
                                <p> Tickets Avalilable</p>
                            </div>
                        </div>

                        <div className="mini-container">
                            <div className="items">
                                <p>
                                    sleeper
                                </p>
                                <p> Tickets Avalilable</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="price">
                    <p>450</p>
                </div>

                </div>
            </div>
        </div>
        
      

      
    );
  }
}
export default Trains;