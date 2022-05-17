Commandes à exécuter:

#Installation
npm install

#Compiler les composants:
npx babel --watch src --out-dir ./build --presets react-app/prod

cf. https://fr.reactjs.org/docs/add-react-to-a-website.html

#Execution
Ouvrir le fichier index.html

#A développer en JS ES6:
- Compléter le composant "src/GestionPersonnes.jsx" afin d'obtenir le formulaire "personne" 
  (cf copie d'écran formulaireGestionPersonnes_niv1.PNG)

#Consignes générales:
- Coder au moins deux composants (un pour le formulaire et un pour la liste des personnes)
- Créer une classe "Personne"
- Coder tous les composants et la classe dans le même fichier (src/GestionPersonnes.jsx) car l'import n'est pas opérationnel sur ce petit projet

#Partie 1
#Règles de gestion pour la première partie:
-   Etant donné un nom saisi
    Lorque l'utilisateur clique sur valider
    Alors le nom s'ajoute dans la liste des personnes (cf. copie écran formulaireGestionPersonnes_niv1.1.PNG)

-   Etant donné le champ nom vide
    Lorque l'utilisateur clique sur valider
    Alors un message d'erreur s'affiche (alert)

-   Etant donné un nom et un age saisis
    Lorque l'utilisateur clique sur valider
    Alors:
        le nom et l'age entre parenthèses s'ajoutent dans la liste des personnes (cf. copie écran formulaireGestionPersonnes_niv1.2.PNG)
        le nom est remis à valider
        l'age est remis à zéro

-   Lorsque l'utilisateur clique dans le champs "age" 
    Alors tout le texte est sélectionné (cela évite à l'utilisateur de devoir supprimer l'age avant de le changer)

#Partie 2
Ajouter un champ "parent" qui contiendra le nom du parent de la personne (cf. copie d'écran formulaireGestionPersonnes_niv2.PNG)

#Règles de gestion pour la deuxième partie:
-   Etant donné un nom et un parent saisi
    Lorsque l'utilisateur clique sur valider