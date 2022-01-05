import "./App.css";
import user from "./components/Profile/user.json";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
}

export default App;
