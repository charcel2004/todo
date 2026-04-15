import { useState } from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import TodoPage from "../modules/Todos/TodoPage";
import EtudiantPage from "../modules/Etudiants/EtudiantPage";

function Dashboard() {
  const [page, setPage] = useState("todos");

  return (
    <div className="dashboard">
      <Sidebar setPage={setPage} />

      <div className="main">
        <Navbar />

        <div className="content">
          {page === "todos" && <TodoPage />}
          {page === "students" && <EtudiantPage />}
          {page === "teachers" && <div>Teachers</div>} 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;