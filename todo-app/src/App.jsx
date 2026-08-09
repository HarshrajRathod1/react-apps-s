import { useState } from "react";
import { Card } from "./components/card";
import { Register } from "./components/register";
import { Login } from "./components/login";

function App() {
  const [task, setTask] = useState("");
  const [addTask, setAddTast] = useState(["name", "age", "work"]);
  function handleTask(e) {
    setTask(e.target.value);
  }
  function handleAddTask(e) {
    e.praventDefault();
    console.log(task);
  }

  return (
    <div>
      <header className="d-flex justify-content-between align-items-center p-3 bg-light">
        <div className="bi bi-pencil-square fs-4 fw-bold text-primary">
          Todo-App
        </div>
        <div>
          <span>Products</span>
          <span className="mx-5">Features</span>
          <span>Pricing</span>
          <span className="mx-5">Support</span>
        </div>
        <div>
          <button className="btn btn-light text-primary">Log In</button>
          <button className="btn btn-dark text-white mx-4">Get Started</button>
        </div>
      </header>

      <section
        className="row"
        style={{ paddingTop: "80px", paddingBottom: "50px" }}
      >
        <div
          className="col-6"
          style={{ paddingLeft: "70px", paddingRight: "70px",paddingTop:"80px" }}
        >
          <div className="fs-1 fw-bold">Focus on what matters.</div>
          <div className="fs-1 fw-bold text-primary">Get it Done.</div>
          <p className="fs-5" style={{ textAlign: "justify" }}>
            The modern minimalist task manager built for high-focus
            professionals. Reduce cognitive load and organize your workflow
            seamlessly.
          </p>
          <div>
            <button className="btn btn-dark text-white">
              Start for Free <span className="bi bi-arrow-right-circle"></span>
            </button>
            <button className="btn btn-light mx-2">See how it work</button>
          </div>
        </div>

        <div className="col-6">
          <div className="w-75">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a href="#signup" data-bs-toggle="tab" className="nav-link active">Sign Up</a>
              </li>
              <li className="nav-item" data-bs-toggle="tab">
                <a className="nav-link" data-bs-toggle="tab" href="#login">Log In</a>
              </li>
            </ul>
            <div className="tab-content mt-4 p-4">
                <div className="tab-pane active" id="signup">
                  <Register/>
                </div>
                <div className="tab-pane" id="login">
                  <Login/>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="fs-3 text-center fw-medium mt-5">
          Everything you need, nothing you don't.
        </div>
        <div className="fs-5 text-center">
          Designed to stay out of your way while keeping your life perfectly
          structured.
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-5 align-items-center py-5">
          <div>
            <Card
              icon="bi bi-box-seam"
              title="Task Organization"
              text="Group tasks into projects, add tags, and prioritize with a clean drag-and-drop interface."
            />
          </div>
          <div>
            <Card
              icon="bi bi-arrow-repeat"
              title="Seamless Sync"
              text="Your tasks are instantly updated across all your devices, ready wherever you are."
            />
          </div>
          <div>
            <Card
              icon="bi bi-bell"
              title="Smart Reminders"
              text="Never miss a deadline with intelligent notifications that respect your focus hours."
            />
          </div>
        </div>
      </section>

      <footer className="d-flex justify-content-between align-items-center bg-light p-3">
        <div className="bi bi-pencil-square fw-bold">Todo-App</div>
        <div>
          <span>Privacy Policy</span>
          <span className="mx-4">Terms of Services</span>
          <span>Help Center</span>
          <span className="mx-4">Instagram</span>
        </div>
        <div>&copy; 2024 Done Productivity Inc. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
