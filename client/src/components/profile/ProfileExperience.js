import React from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({ experiene: {
    company,
    title,
    loaciton,
    current,
    to,
    from,
    description
}
}) => <div>
    <h3 className ="text-dark"> {company}</h3>
    <p> 
        <Moment formt='YYYY/MM/DD'> {from} </Moment>-{!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to} </Moment>}
    </p>
    <p>
        <strong> Position: </strong>
    </p>
    <p>
        <strong> Description </strong> {description}
    </p>
    </div>

ProfileExperience.propTypes = {
    experiene:PropTypes.array.isRequired
}

export default ProfileExperience   