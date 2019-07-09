import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <h1>List component!!!</h1>
        <ul className="collection">
          {users.map(user => (
            <li key={user.id} className="collection-item">{user.name} </li>
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
