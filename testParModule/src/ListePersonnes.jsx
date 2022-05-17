const ListePersonnes = (props) => {
  return (
    <ul>
      {props.personnes.map((personne) => (
        <li>{personne.nom}</li>
      ))}
    </ul>
  );
};
