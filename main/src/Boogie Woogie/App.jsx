import React from "react";
import "./style.css";
import klijentiData from "./klijentiData";

function Todo() {
  return (
      <div className="container">
        <h1>Todos</h1>

        <table className="table">
          <thead>
            <tr className="naslovi">
              <th>UserId</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {klijentiData.map((item) => (
              <tr key={item.id}>
                <td className="user">{item.userId}</td>
                <td className="title">{item.title}</td>
                <td className="completed">{item.completed ? "✔️" : "❌"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default Todo;
