import { useState } from "react";
import EtudiantForm from "./components/EtudiantForm";
import EtudiantList from "./components/Etudiantlist";
import {
  addEtudiant,
  deleteEtudiant,
  updateEtudiant
} from "./etudiantSlice";

function EtudiantPage() {
  const [etudiants, setEtudiants] = useState([]);

  return (
    <div className="card">
      <h2>Gestion des étudiants</h2>

      <EtudiantForm
        addEtudiant={(data) =>
          setEtudiants(addEtudiant(etudiants, data))
        }
      />

      <EtudiantList
        etudiants={etudiants}
        deleteEtudiant={(id) =>
          setEtudiants(deleteEtudiant(etudiants, id))
        }
        updateEtudiant={(id, data) =>
          setEtudiants(updateEtudiant(etudiants, id, data))
        }
      />
    </div>
  );
}

export default EtudiantPage;