import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        exact: true,
        ...HomePage
      },
      {
        path: "/users",
        ...UsersListPage
      },
      {
        ...NotFoundPage
      }
    ]
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
