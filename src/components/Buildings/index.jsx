import React from 'react';

class Buildings extends React.Component{
  componentDidMount() {
    fetch("http://api.tcapi.dev:3000/buildings")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            buildings: result.buildings
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render(){
    return(
      <div>
        <div>
          <h1>My Buildings</h1>
        </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rooms/Apt</th>
                <th>Address</th>
                <th>Stories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bilal Manzil</td>
                <td>15</td>
                <td>Lahore</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
};

export default Buildings;
