import { useReducer } from "react";
import "./App.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  PasswordRepeat: "",
  termsAccepted: false
};

function reducer(state, action) {
  return { ...state, [action.input]: action.value };
}

function validateState(state) {
  return (
    state.password === state.PasswordRepeat &&
    state.termsAccepted &&
    state.password.length > 6
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  function handleClick(e) {
    e.preventDefault();
    alert(`Hey ${state.name} you have successfully registered!`);
  }

  function onChange(e) {
    const { name, value, checked } = e.target;
    const action = {
      input: name,
      value: name === "termsAccepted" ? checked : value
    };
    dispatch(action);
  }

  return (
    <div className="App">
      <div className="RegisterFormContainer">
        <h2 className="RegisterContainerHeadline">Register</h2>
        <form className="RegisterForm">
          <input
            className="TextInput"
            type="text"
            name="name"
            placeholder="Name"
            onChange={onChange}
          />

          <input
            className="TextInput"
            type="text"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />

          <input
            className="TextInput"
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />

          <input
            className="TextInput"
            type="password"
            name="PasswordRepeat"
            placeholder="Password repeat"
            onChange={onChange}
          />

          <label className="TouchCheckboxLabel">
            <input
              className="TouCheckbox"
              type="checkbox"
              name="termsAccepted"
              onChange={onChange}
            />
            Accept Terms Of Use!
          </label>
          <button
            disabled={!validateState(state)}
            onClick={handleClick}
            className={!validateState(state) ? "Disabled" : null}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
