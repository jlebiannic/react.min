var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jsxFileName = "src\\GestionPersonnes.jsx",
    _this2 = this;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Personne = function () {
  function Personne(nom, age, nomParent) {
    var _this = this;

    _classCallCheck(this, Personne);

    this.addEnfant = function (enfant) {
      _this.enfants.push(enfant);
    };

    this.nom = nom;
    this.age = age;
    this.nomParent = nomParent;
    this.enfants = [];
  }

  _createClass(Personne, null, [{
    key: "getNouvellePersonneVide",
    value: function getNouvellePersonneVide() {
      return new Personne("", 0, "");
    }
  }]);

  return Personne;
}();

var ListePersonnes = function ListePersonnes(props) {
  return React.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: _this2
    },
    React.createElement(
      "h3",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: _this2
      },
      props.titre
    ),
    props.personnes && props.personnes.length > 0 ? React.createElement(
      "ul",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: _this2
      },
      props.personnes.map(function (personne) {
        return React.createElement(
          "div",
          { key: personne.nom, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: _this2
          },
          React.createElement(
            "li",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: _this2
            },
            personne.nom,
            personne.age ? "(" + personne.age + ")" : ""
          ),
          personne.enfants && React.createElement(ListePersonnes, {
            titre: "Enfants:",
            personnes: personne.enfants,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: _this2
          })
        );
      })
    ) : "La liste est vide"
  );
};

var GestionPersonnes = function GestionPersonnes(props) {
  var _React$useState = React.useState(Personne.getNouvellePersonneVide()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      personne = _React$useState2[0],
      setPersonne = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      personnes = _React$useState4[0],
      setPersonnes = _React$useState4[1];

  console.log(personnes);

  function valider() {
    if (personne.nom) {
      if (recherchePersonne(personne.nom, personnes)) {
        alert("La personne existe déjà");
      } else if (personne.nomParent) {
        var parent = recherchePersonne(personne.nomParent, personnes);
        if (!parent) {
          alert("Le parent " + personne.nomParent + " n'existe pas");
        } else {
          parent.addEnfant(personne);
          setPersonnes([].concat(_toConsumableArray(personnes)));
          setPersonne(Personne.getNouvellePersonneVide());
        }
      } else {
        setPersonnes([].concat(_toConsumableArray(personnes), [personne]));
        setPersonne(Personne.getNouvellePersonneVide());
      }
    }
  }

  function onNomChange(e) {
    var valeurNom = e.target.value;
    setPersonne(Object.assign({}, personne, { nom: valeurNom }));
  }

  function onAgeChange(e) {
    var valeurAge = e.target.value;
    setPersonne(Object.assign({}, personne, { age: valeurAge }));
  }

  function onNomParentChange(e) {
    var valeurNomParent = e.target.value;
    setPersonne(Object.assign({}, personne, { nomParent: valeurNomParent }));
  }

  return React.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: _this2
    },
    React.createElement(
      "form",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: _this2
      },
      React.createElement(
        "div",
        { className: "conteneur", __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: _this2
        },
        React.createElement(
          "label",
          { htmlFor: "nom", __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: _this2
          },
          "Nom:"
        ),
        React.createElement("input", {
          type: "text",
          id: "nom",
          onChange: onNomChange,
          value: personne.nom,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: _this2
        }),
        React.createElement(
          "label",
          { htmlFor: "age", __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: _this2
          },
          "Age:"
        ),
        React.createElement("input", {
          id: "age",
          type: "number",
          onChange: onAgeChange,
          value: personne.age,
          min: "1",
          max: "150",
          onFocus: function onFocus(e) {
            e.target.select();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: _this2
        }),
        React.createElement(
          "label",
          { htmlFor: "nomParent", __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: _this2
          },
          "Parent:"
        ),
        React.createElement("input", {
          type: "text",
          id: "nomParent",
          onChange: onNomParentChange,
          value: personne.nomParent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: _this2
        })
      ),
      React.createElement(
        "button",
        {
          className: "valider",
          type: "submit",
          onClick: function onClick(e) {
            e.preventDefault();
            valider();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: _this2
        },
        "Valider"
      )
    ),
    React.createElement(
      "h2",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: _this2
      },
      "Liste des personnes"
    ),
    React.createElement(ListePersonnes, { personnes: personnes, __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: _this2
    })
  );
};

function recherchePersonne(nom, personnes) {
  for (var i = 0; i < personnes.length; i++) {
    if (nom === personnes[i].nom) {
      return personnes[i];
    } else if (personnes[i].enfants.length > 0) {
      var personneTrouve = recherchePersonne(nom, personnes[i].enfants);
      if (personneTrouve) {
        return personneTrouve;
      }
    }
  }
}

var domContainer = document.querySelector("#main");
ReactDOM.render(React.createElement(GestionPersonnes), domContainer);