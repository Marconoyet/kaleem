import React, {Component} from 'react';
import Axios from 'axios';
import classes from './signPost.css';

class SignPost extends Component {
  state = {
    email: '',
    firstname: '',
    surname: '',
    password: '',
    country: '',
    phone: 0,
    time: '',
    date: '',
    gender: '',
  };

  getFirstname = (event) => {
    const firstname = event.target.value;
    console.log('firstname: ', firstname);
    this.setState({firstname: firstname});
  };

  getSurname = (event) => {
    const surname = event.target.value;
    console.log('surname: ', surname);
    this.setState({surname: surname});
  };

  getPhone = (event) => {
    const phone = event.target.value;
    // console.log("phone: ", phone);
    this.setState({phone: phone});
  };

  getEmail = (event) => {
    const email = event.target.value;
    // console.log("Email: ", email);
    this.setState({email: email});
  };

  getGender = (event) => {
    const gender = event.target.value;
    // console.log("Email: ", email);
    this.setState({gender: gender});
  };

  getDate = (event) => {
    const date = event.target.value;
    // console.log("Email: ", email);
    this.setState({date: date});
  };

  getPassword = (event) => {
    const password = event.target.value;
    // console.log("Password: ", password);
    this.setState({password: password});
  };

  getCountry = (event) => {
    const country = event.target.value;
    // console.log("country: ", country);
    this.setState({country: country});
  };

  getTimeZone = (event) => {
    const time = event.target.value;
    // console.log("Time: ", time);
    this.setState({time: time});
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
    Axios.post('https://localhost:5000/api/auth/signup', {
      // prettier-ignore
      'firstName': this.state.firstname,
      // prettier-ignore
      'surName': this.state.surname,
      // prettier-ignore
      'phone': this.state.phone,
      // prettier-ignore
      'email': this.state.email,
      // prettier-ignore
      'gender': this.state.gender,
      // prettier-ignore
      'date': this.state.date,
      // prettier-ignore
      'password': this.state.password,
      // prettier-ignore
      'country': this.state.country,
      // prettier-ignore
      'timeZone': this.state.time,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submit(e)}>
          <div className={classes.containerImg}>
            <img src={require('./profile.png')} alt="Profile photo" />
          </div>
          <input
            placeholder="First Name"
            id="firstName"
            type="text"
            value={this.state.firstname}
            onChange={(event) => this.getFirstname(event)}
          ></input>

          <input
            placeholder="Last Name"
            id="surName"
            type="text"
            value={this.state.surname}
            onChange={(event) => this.getSurname(event)}
          ></input>

          <input
            placeholder="Phone"
            id="phone"
            type="text"
            onChange={(event) => this.getPhone(event)}
          ></input>

          <input
            placeholder="Email"
            id="email"
            type="text"
            value={this.state.email}
            onChange={(event) => this.getEmail(event)}
          ></input>

          <input
            placeholder="Password"
            id="password"
            type="password"
            value={this.state.password}
            onChange={(event) => this.getPassword(event)}
          ></input>

          <input
            placeholder="Gender"
            id="gender"
            type="text"
            value={this.state.gender}
            onChange={(event) => this.getGender(event)}
          ></input>

          <input
            placeholder="Date Of Birth"
            id="DOT"
            type="text"
            value={this.state.date}
            onChange={(event) => this.getDate(event)}
          ></input>

          <input
            placeholder="Country"
            id="country"
            type="text"
            value={this.state.country}
            onChange={(event) => this.getCountry(event)}
          ></input>

          <input
            className={classes.time}
            placeholder="Time Zone"
            id="time"
            type="text"
            value={this.state.time}
            onChange={(event) => this.getTimeZone(event)}
          ></input>
          <div className={classes.container}>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignPost;
