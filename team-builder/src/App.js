import "./App.css";
import defaultFriends from "./data";
import { useState } from "react";

const initialFormValues = {
  ///// TEXT INPUTS /////
  username: "",
  email: "",
  ///// DROPDOWN /////
  role: "",
};

function App() {
  const [friends, setFriends] = useState(defaultFriends);

  const [values, setValues] = useState(initialFormValues);
  // console.log("this is", formValues);

  const onChange = (event) => {
    // console.log("yes we changed!");
    const name = event.target.name;
    const value = event.target.value;
    update(name, value);
  };

  const update = (inputName, inputValue) => {
    const newValues = {
      ...values,
      [inputName]: inputValue,
    };
    setValues(newValues);
  };

  const submit = (evt) => {
    const { username, email, role } = values;
    evt.preventDefault();
    if ()alert
      setFriends([
        ...friends,

        { username: username.trim(), email: email.trim(), role: role.trim() },
      ]);

    setValues(initialFormValues);
  };

  return (
    <div className="App">
      <div>
        <h1 className="title">My Team Member List</h1>
        {friends.map((friend) => {
          return (
            <h3 key={friend.id}>
              I am {friend.username} and {friend.role}
              <br />
              My email is {friend.email}
            </h3>
          );
        })}
        {/* make the form */}
        <form onSubmit={submit}>
          <label htmlFor="usernameInput">
            username:
            <input
              onChange={onChange}
              type="text"
              name="username"
              value={values.username}
            />
          </label>
          <br />
          <label htmlFor="emailInput">
            Email:
            <input
              onChange={onChange}
              type="text"
              name="email"
              value={values.email}
            />
          </label>
          <br />
          <label>
            Role:
            <select onChange={onChange} name="role" value={values.role}>
              <option> --- Select a Role --- </option>
              <option>Designer</option>
              <option>Developer</option>
              <option>Security Dog</option>
            </select>
          </label>
          <br />

          <button>Submit!</button>
        </form>
      </div>
    </div>
  );
}

export default App;
