import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// import { fetchUser } from '../../actions/userActions';

class UserMessage extends React.Component {
    render() {
        return (
            <div><p>This is user Message component Name: <strong>{this.props.user.name}</strong></p></div>
        );
            }
        }
        
function mapStateToProps(store) {
  return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets 
        }
}
export default connect(mapStateToProps)(UserMessage);
