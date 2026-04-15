import { useState } from "react";

function EtudiantForm({ addEtudiant }) {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nom || !age) return;

    addEtudiant({ nom, age });
    setNom("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button>Ajouter</button>
    </form>
  );
}

export default EtudiantForm;