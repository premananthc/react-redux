import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../../actions/userActions';

class Links extends React.Component {
    myAction() {
        console.log('Clicked');
    }

    render() {
        return (
            <div>
                <button onClick={this.myAction}>try me</button>
            </div>
        );
    }
}

Links.propTypes = {};

export default Links;
