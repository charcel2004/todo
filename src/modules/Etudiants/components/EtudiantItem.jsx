import { useState } from "react";

function EtudiantItem({ etudiant, deleteEtudiant, updateEtudiant }) {
  const [editing, setEditing] = useState(false);
  const [nom, setNom] = useState(etudiant.nom);
  const [age, setAge] = useState(etudiant.age);

  const handleUpdate = () => {
    updateEtudiant(etudiant.id, { nom, age });
    setEditing(false);
  };

  return (
    <li>
      {editing ? (
        <>
          <input value={nom} onChange={(e) => setNom(e.target.value)} />
          <input value={age} onChange={(e) => setAge(e.target.value)} />
          <button onClick={handleUpdate}>✔</button>
        </>
      ) : (
        <>
          {etudiant.nom} ({etudiant.age} ans)
          <button onClick={() => setEditing(true)}>✏</button>
          <button onClick={() => deleteEtudiant(etudiant.id)}>🗑</button>
        </>
      )}
    </li>
  );
}

export default EtudiantItem;