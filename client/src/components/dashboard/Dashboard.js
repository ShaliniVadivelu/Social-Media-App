// Here we are going to fetch all of the data using  in action and bring it in from redux state and pass it down to other components like exp and edu
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
    useEffect (() => {
        getCurrentProfile();
    }, []);

    return <div> Dashboard </div>;
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