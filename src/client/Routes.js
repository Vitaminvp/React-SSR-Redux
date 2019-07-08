import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

export default [
  {
    path: "/",
    exact: true,
    ...HomePage
  },
  {
    path: "/user",
    ...UsersListPage
  }
];

// class Routes extends Component {
//     render() {
//         return (
//             <div>
//                <Route exact path="/" component={HomePage}/>
//                {/*<Route path="/h" component={() => "hiiiiiiiii"}/>*/}
//                <Route path="/users" component={UsersList}/>
//             </div>
//         );
//     }
// }
