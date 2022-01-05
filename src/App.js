import "./App.css";
import user from "./components/Profile/user.json";
import Profile from "./components/Profile/Profile";
import data from "./components/Statistics/data.json";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default App;
