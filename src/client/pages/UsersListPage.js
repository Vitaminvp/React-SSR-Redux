import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users list app`}</title>
        <meta property="og:title" content="User App" />
      </Helmet>
    );
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        {this.head()}
        <h1>List component!!!</h1>
        <ul className="collection">
          {users.map(user => (
            <li key={user.id} className="collection-item">
              {user.name}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return { users };
};

const mapDispatchToProps = { fetchUsers };

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export { loadData };

export default {
  loadData,
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersListPage)
};
