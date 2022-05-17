class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  static getNouvellePersonneVide() {
    return new Personne("", 0);
  }
}

const ListePersonnes = (props) => {
  return (
    <div>
      {props.personnes && props.personnes.length > 0 ? (
        <ul>
          {props.personnes.map((personne) => (
            <li key={personne.nom}>
              {personne.nom}
              {personne.age ? `(${personne.age})` : ""}
            </li>
          ))}
          
        </ul>
      ) : (
        "La liste est vide"
      )}
    </div>
  );
};

const GestionPersonnes = (props) => {
  const [personne, setPersonne] = React.useState(
    Personne.getNouvellePersonneVide()
  );
  const [personnes, setPersonnes] = React.useState([]);

  function valider() {
    if (personne.nom) {
      setPersonnes([...personnes, personne]);
    }
    setPersonne(Personne.getNouvellePersonneVide());
  }

  function onNomChange(e) {
    const valeurNom = e.target.value;
    setPersonne({ ...personne, nom: valeurNom });
  }

  function onAgeChange(e) {
    const valeurAge = e.target.value;
    setPersonne({ ...personne, age: valeurAge });
  }

  return (
    <div>
      <form>
        <div className="conteneur">
          <label htmlFor="nom">Nom:</label>
          <input
            type="text"
            id="nom"
            onChange={onNomChange}
            value={personne.nom}
          />
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            onChange={onAgeChange}
            value={personne.age}
            min="1"
            max="150"
            onFocus={(e) => {
              e.target.select();
            }}
          />
        </div>
        <button
          className="valider"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            valider();
          }}
        >
          Valider
        </button>
      </form>
      <h2>Liste des personnes</h2>
      <ListePersonnes personnes={personnes}></ListePersonnes>
    </div>
  );
};

const domContainer = document.querySelector("#main");
ReactDOM.render(React.createElement(GestionPersonnes), domContainer);
