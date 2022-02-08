// as we are using function, importing useState
import React, {Fragment, useState} from 'react'; 
// connect used to connect the alert with components
import { connect } from 'react-redux';   
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

import './App.css';

const Register = ({ setAlert }) => { // instead of using props.setAlert we changed props to setAlert
  const  [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password,password2 } = formData;

// change the name to value of the input, instead of using name, can use e.taget.name..
  const onChange = e => 
    setFormData({ ...formData, [e.target.name]: e.target.value}); 

// onSubmit function
  const onSubmit =async  e => {     
    e.preventDefault();
    if(password !== password2) {
      setAlert('Passwords do not match', 'danger');  // this msg willbe passed to action
    } else {
      console.log("SUCESS");
    }
  };
   return <Fragment> 
   <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit ={e => onSubmit(e)}>
        <div className="form-group">
          <input 
          type="text" 
          placeholder="Name" 
          name="name" 
          value={name} 
  // onChange function
          onChange= {e=> onChange(e)}  
          required 
        />
        </div>
        <div className="form-group">
        <input 
          type="email" 
          placeholder="Email Address" 
          name="email" 
          value={email} 
          onChange= {e=> onChange(e)} 
          required 
        />
          <small className="form-text">
          This site uses Gravatar so if you want a profile image, use a Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} 
            onChange= {e=> onChange(e)} 
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2} 
          onChange= {e=> onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
   </Fragment>;
   
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
}
export default connect(
  null, 
  { setAlert }
  ) (Register); 
