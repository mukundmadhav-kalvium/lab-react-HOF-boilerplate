import React, { Component } from "react";

class HigherOrderComponent extends Component {
  //PROGRESSION 1
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  //PROGRESSION 2
  // display all items
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  //PROGRESSION 3
  // display all items based on usertype
  renderItemsByUserType = () => {
    const data = this.state.userData;
    const filterData = data.filter((item) => {
      return item.user_type == "Designer";
    });
    const mapRows = filterData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  //PROGRESSION 4
  renderItemsByLetterJ = () => {
    const data = this.state.userData;
    const filterByJ = data.filter((item) => {
      return item.name[0] == "J";
    });
    const mapRows = filterByJ.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  //PROGRESSION 5
  renderItemsByAge = () => {
    const data = this.state.userData;
    const filterByAge = data.filter((item) => {
      return item.age > 28 && item.age <= 50;
    });
    const mapRows = filterByAge.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  //PROGRESSION 6
  renderItemsByExperience = () => {
    const data = this.state.userData;
    const filterByExperience = data.filter((item) => {
      return item.user_type == "Designer";
    });
    let totalExp = filterByExperience
      .map((i) => i.years)
      .reduce((accumulator, years) => accumulator + years, 0);
    return totalExp;
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {" "}
          {/* PROGRESSION 2 */}
          <h1>Display all items</h1>
          <div className="display-box">
            <ul>{this.renderItems()} </ul>
          </div>
        </div>

        <div>
          {" "}
          {/* PROGRESSION 3 */}
          <h1>Display based on User Type</h1>
          <div className="display-box">
            <ul>{this.renderItemsByUserType()} </ul>
          </div>
        </div>

        <div>
          {" "}
          {/* PROGRESSION 4 */}
          <h1>Filter all data starting with J</h1>
          <div className="display-box">
            <ul>{this.renderItemsByLetterJ()} </ul>
          </div>
        </div>

        <div>
          {" "}
          {/* PROGRESSION 5 */}
          <h1>
            Filter all data based on age greater than 28 and age less than or
            equal to 50
          </h1>
          <div className="display-box">
            <ul>{this.renderItemsByAge()} </ul>
          </div>
        </div>

        <div>
          {" "}
          {/* PROGRESSION 6 */}
          <h1>Find the total years of the designers</h1>
          <div className="display-box">
            <ul>{this.renderItemsByExperience()} </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;
