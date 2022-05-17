var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jsxFileName = "src\\GestionPersonnes.jsx",
    _this = this;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Personne = function () {
  function Personne(nom, age) {
    _classCallCheck(this, Personne);

    this.nom = nom;
    this.age = age;
  }

  _createClass(Personne, null, [{
    key: "getNouvellePersonneVide",
    value: function getNouvellePersonneVide() {
      return new Personne("", 0);
    }
  }]);

  return Personne;
}();

var ListePersonnes = function ListePersonnes(props) {
  return React.createElement(
    "ul",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: _this
    },
    props.personnes.map(function (personne) {
      return React.createElement(
        "li",
        { key: personne.nom, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: _this
        },
        personne.nom,
        personne.age ? "(" + personne.age + ")" : ""
      );
    })
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

  function valider() {
    if (personne.nom) {
      setPersonnes([].concat(_toConsumableArray(personnes), [personne]));
    }
    setPersonne(Personne.getNouvellePersonneVide());
  }

  function onNomChange(e) {
    var valeurNom = e.target.value;
    setPersonne(Object.assign({}, personne, { nom: valeurNom }));
  }

  function onAgeChange(e) {
    var valeurAge = e.target.value;
    setPersonne(Object.assign({}, personne, { age: valeurAge }));
  }

  return React.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: _this
    },
    React.createElement(
      "form",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: _this
      },
      React.createElement(
        "div",
        { className: "conteneur", __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: _this
        },
        React.createElement(
          "label",
          { htmlFor: "nom", __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: _this
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
            lineNumber: 53
          },
          __self: _this
        }),
        React.createElement(
          "label",
          { htmlFor: "age", __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: _this
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
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: _this
        })
      ),
      React.createElement(
        "button",
        {
          type: "submit",
          onClick: function onClick(e) {
            e.preventDefault();
            valider();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: _this
        },
        "Valider"
      )
    ),
    React.createElement(
      "p",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: _this
      },
      "Liste des personnes"
    ),
    React.createElement(ListePersonnes, { personnes: personnes, __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: _this
    })
  );
};

var domContainer = document.querySelector("#main");
ReactDOM.render(React.createElement(GestionPersonnes), domContainer);