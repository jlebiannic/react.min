var _jsxFileName = "src\\ListePersonnes.jsx",
    _this = this;

var ListePersonnes = function ListePersonnes(props) {
  return React.createElement(
    "ul",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      },
      __self: _this
    },
    props.personnes.map(function (personne) {
      return React.createElement(
        "li",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 5
          },
          __self: _this
        },
        personne.nom
      );
    })
  );
};