import React from "react";
import "./App.css";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import UsersView from "./components/UsersView";


// function FormInput() {
//   return <div>Form Input</div>;
// }

// function UsersView( props) {
//    // props: users (filteredUsers)
//    // button to filter by name 
//       // onClick -> this.sortUsers
//   return <div>Users View</div>;
// }

class App extends React.Component {
  state = {
      allUsers: [],
      filteredUsers: [],
      searchTerm: ""
  }
   // component did mount
      // call API (utils)
         // setState
            // allUsers: [],
            // filteredUsers: [],
   // handleInputChange
      // change (setState) searchTerm
      // filter users based on searchTerm
      // sort if relevant
   // sortUsers
      // using js sort (by string, or if you want to sort by number (DOB))
      // optionally implement, up or down

  render(){
      return (
        <div className="App">
            <Header />
            <FormInput />
            <UsersView />
        </div>
      );
  }
}
export default App;