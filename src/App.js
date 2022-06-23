import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="infoday">
      <span className="description" id="description">
        Clear
      </span>
      <span className="day" id="currentDate">
        Sunday, 13h33
      </span>
      <span className="update">updated 7 mins ago</span>
    </div>
  );
}
