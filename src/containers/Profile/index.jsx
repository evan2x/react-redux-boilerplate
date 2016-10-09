
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Card from 'components/card';

import {
  fetchUser,
  fetchNowDate
} from 'actions';

class Profile extends React.Component {

  componentDidMount() {
    let {actions} = this.props;

    actions.fetchUser('190886981');
    actions.fetchNowDate();
  }

  dateNow() {
    let date = this.props.date;

    if (!(date instanceof Date)) return '';

    let year = date.getFullYear(),
      month = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }

  render() {
    let {
      username,
      email,
      github,
      avatar
    } = this.props;

    return (
      <section>
        <h1>Profile</h1>
        <p>Date: {this.dateNow()}</p>
        <Card name={username} email={email} avatar={avatar} github={github} />
      </section>
    );
  }
}

function select(state) {
  let {user, date} = state;

  return {
    username: user.name,
    uid: user.id,
    email: user.email,
    github: user.github,
    avatar: user.avatar,
    date
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchUser,
      fetchNowDate
    }, dispatch)
  }
}

export default connect(select, mapDispatchToProps)(Profile);
