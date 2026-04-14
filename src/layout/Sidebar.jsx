function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>Mini crud</h2>

      <button onClick={() => setPage("todos")}> Taches</button>
      <button onClick={() => setPage("students")}> Etudiants</button>
      <button onClick={() => setPage("teachers")}>Professeur</button>
      <button onClick={() => setPage("teachers")} className="logout">Logout</button>
    </div>
  );
}

export default Sidebar;