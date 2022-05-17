import React, { Component } from "react";
import "./components/Forms.css";
class Inputform extends Component {
  state = {
    Name: "",
    Department: "",
    rating: "",
    employees: []
  };
  changehandler = (e) => {
    // const name=e.target.name
    // console.log(name)
    // console.log(e.target.value)

    this.setState({ [e.target.name]: e.target.value });
    // this.setState({[e.target.name]:e.target.value})
    // this.setState({[e.target.name]:e.target.value})
  };
  submithandler = (e) => {
    e.preventDefault();

    const emptyobj = {
      Name: this.state.Name,
      Department: this.state.Department,
      rating: this.state.rating
    };

    const arr = this.state.employees;
    arr.push(emptyobj);
    this.setState({ employees: arr });
  };

  render() {
    return (
      <>
        <div className="container">
          <h2>EMPLOYEE FEEDBACK FORM</h2>
          <form action="">
            <label className="main" htmlfor="Name">
              Name:
            </label>
            <input
              type="text"
              className="main_name"
              name="Name"
              id="Name"
              required
              value={this.state.Name}
              onChange={this.changehandler}
            />
            <br />
            <label className="main" for="Department">
              Department:
            </label>
            <input
              type="text"
              className="main_name"
              name="Department"
              id="Department"
              required
              value={this.state.Department}
              onChange={this.changehandler.bind(this)}
            />
            <br />
            <label className="main" for="rating">
              Rating:
            </label>
            <input
              type="number"
              className="main_name"
              name="rating"
              id="rating"
              required
              value={this.state.rating}
              onChange={this.changehandler}
            />
            <br />
            <button className="submit1" onClick={this.submithandler}>
              Submit
            </button>
          </form>
        </div>
        <div className="footermain">
          {this.state.employees.map((value, index) => {
            return (
              <div className="footer">
                {index + 1}. Name :<span>{value.Name}</span> | Department :
                <span>{value.Department}</span> | Rating :
                <span>{value.rating}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Inputform;
