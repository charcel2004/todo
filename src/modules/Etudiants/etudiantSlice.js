export const addEtudiant = (etudiants, newEtudiant) => {
  return [...etudiants, { id: Date.now(), ...newEtudiant }];
};

export const deleteEtudiant = (etudiants, id) => {
  return etudiants.filter(e => e.id !== id);
};

export const updateEtudiant = (etudiants, id, updatedData) => {
  return etudiants.map(e =>
    e.id === id ? { ...e, ...updatedData } : e
  );
};