class Personne {
  constructor(nom, age, nomParent) {
    this.nom = nom;
    this.age = age;
    this.nomParent = nomParent;
    this.enfants = [];
  }

  addEnfant = (enfant) => {
    this.enfants.push(enfant);
  };

  static getNouvellePersonneVide() {
    return new Personne("", 0, "");
  }
}

const ListePersonnes = (props) => {
  return (
    <div>
      <h3>{props.titre}</h3>
      {props.personnes && props.personnes.length > 0 ? (
        <ul>
          {props.personnes.map((personne) => (
            <div key={personne.nom}>
              <li>
                {personne.nom}
                {personne.age ? `(${personne.age}ans)` : ""}
              </li>
              {personne.enfants && (
                <ListePersonnes
                  titre="Enfants:"
                  personnes={personne.enfants}
                ></ListePersonnes>
              )}
            </div>
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
  console.log(personnes);

  function valider() {
    if (personne.nom) {
      if (recherchePersonne(personne.nom, personnes)) {
        alert("La personne existe déjà");
      } else if (personne.nomParent) {
        const parent = recherchePersonne(personne.nomParent, personnes);
        if (!parent) {
          alert(`Le parent ${personne.nomParent} n'existe pas`);
        } else {
          parent.addEnfant(personne);
          setPersonnes([...personnes]);
          setPersonne(Personne.getNouvellePersonneVide());
        }
      } else {
        setPersonnes([...personnes, personne]);
        setPersonne(Personne.getNouvellePersonneVide());
      }
    }
  }

  function onNomChange(e) {
    const valeurNom = e.target.value;
    setPersonne({ ...personne, nom: valeurNom });
  }

  function onAgeChange(e) {
    const valeurAge = e.target.value;
    setPersonne({ ...personne, age: valeurAge });
  }

  function onNomParentChange(e) {
    const valeurNomParent = e.target.value;
    setPersonne({ ...personne, nomParent: valeurNomParent });
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
          <label htmlFor="nomParent">Parent:</label>
          <input
            type="text"
            id="nomParent"
            onChange={onNomParentChange}
            value={personne.nomParent}
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

function recherchePersonne(nom, personnes) {
  for (let i = 0; i < personnes.length; i++) {
    if (nom === personnes[i].nom) {
      return personnes[i];
    } else if (personnes[i].enfants.length > 0) {
      const personneTrouve = recherchePersonne(nom, personnes[i].enfants);
      if (personneTrouve) {
        return personneTrouve;
      }
    }
  }
}

const domContainer = document.querySelector("#main");
ReactDOM.render(React.createElement(GestionPersonnes), domContainer);
