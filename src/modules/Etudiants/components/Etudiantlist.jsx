import EtudiantItem from "./EtudiantItem";

function EtudiantList({ etudiants, deleteEtudiant, updateEtudiant }) {
  return (
    <ul>
      {etudiants.map(e => (
        <EtudiantItem
          key={e.id}
          etudiant={e}
          deleteEtudiant={deleteEtudiant}
          updateEtudiant={updateEtudiant}
        />
      ))}
    </ul>
  );
}

export default EtudiantList;