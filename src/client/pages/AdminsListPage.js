import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

class AdminsListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    render() {
        const { admins } = this.props;
        return (
            <div>
                <h1>Protected List of admins!!!</h1>
                <ul className="collection">
                    {admins.map(user => (
                        <li key={user.id} className="collection-item">{user.name} </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ admins }) => {
    return { admins };
};



export default {
    loadData: ({dispatch}) => dispatch(fetchAdmins()),
    component: connect(
        mapStateToProps,
        { fetchAdmins }
    )(requireAuth(AdminsListPage))
};
