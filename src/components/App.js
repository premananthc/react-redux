import React from 'react';
import UserMessage from './userMessage/userMessage';
/* import Links from './links/links'; */

import { connect } from 'react-redux';

import { fetchUser, setUserName } from '../actions/userActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: props.user.name
    };
    this.updateText = this.updateText.bind(this);
  }
  componentWillMount = () => {
    this.props.dispatch(fetchUser()); // Call the action and trigger the dispatch to pass state to the reducers
  }
  updateText = (e) => {
    this.setState({
      nameValue:e.target.value
    })
    // this.props.dispatch(setUserName(this.state.nameValue));
  }

  setName = () => {
    this.props.dispatch(setUserName(this.state.nameValue));
  }

  
  render() {
    console.log('app file', this.props);
    let user = this.props.user;
    return (
      <div>
        <p>Name displayed in App Component:  {user.name}</p>
        <input type="text" onChange={this.updateText} />
        <br />
        <button onClick={this.setName}>Change Name</button>
        {/* Demo to show how the store is passed to the other component */}
        <UserMessage />
      </div>
    )
  }
}

function mapStateToProps(store) {
  return { 
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets 
  }
}

export default connect(mapStateToProps)(App);
