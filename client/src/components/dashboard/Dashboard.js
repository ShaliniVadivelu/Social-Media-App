// Here we are going to fetch all of the data using  in action and bring it in from redux state and pass it down to other components like exp and edu
import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// Adding the spinner to the dashboard
import Spinner from '../layout/Spinner'; 
import { getCurrentProfile } from '../../actions/profile';
 
const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect (() => {
        getCurrentProfile();
    }, []);
    // Displaying the user name, If user has profile it will has else has not
    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className ="large text-primary"> Dashbaord</h1>
        <p className ="lead">
            <i className ="fas fa-user"></i> Welcome {user && user.name} 
        </p>
        {profile !== null ? 
            <Fragment>has</Fragment> : 
            <Fragment>
            <p> You have not setup a profile yet, please add some info </p>
            <Link to ='/create-profile' className="btn btn-primary my-1"> Create Profile </Link>
            </Fragment>}
        </Fragment>;
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect (mapStateToProps, { getCurrentProfile}) (Dashboard);