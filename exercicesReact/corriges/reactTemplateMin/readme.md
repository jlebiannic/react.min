**Remarque**: les copies d'écran mentionnées ci-dessous se trouvent dans le répertoire "capturesEcran"

# A développer en JS ES6:

- Compléter le fichier "**index.html**" en créant le composant "**GestionPersonnes**" afin d'afficher et gérer le formulaire "personne"
  (cf. copie d'écran **formulaireGestionPersonnes_niv1.PNG** pour la partie 1 et **formulaireGestionPersonnes_niv2.PNG** pour la partie 2)

# Consignes générales:

- Coder au moins deux composants (un pour le formulaire et un pour la liste des personnes)
- Créer une classe "Personne" qui contiendra les attributs nom pour la partie 1 et âge, parent (nom du parent) et enfants (liste) pour la partie 2
- Coder tous les composants et la classe dans le même fichier **index.html** au sein de la balise: `<script type="text/babel">`

# Partie 1

## Règles de gestion pour la première partie:

- **Etant donné** un nom saisi

  **Lorsque** l'utilisateur clique sur valider

  **Alors** le nom s'ajoute dans la liste des personnes (cf. copie écran **formulaireGestionPersonnes_niv1.1.PNG**)

- **Etant donné** le champ "nom" vide

  **Lorsque** l'utilisateur clique sur valider

  **Alors** un message d'erreur s'affiche ("Le nom doit être renseigné")

- **Etant donné** un nom et un age saisis

  **Lorsque** l'utilisateur clique sur valider

  **Alors**:
  le nom et l’âge entre parenthèses s'ajoutent dans la liste des personnes (cf. copie écran formulaireGestionPersonnes_niv1.2.PNG)
  le nom est remis à valider
  l’âge est remis à zéro

- **Etant donné** un âge saisis

  **Lorsque** l'utilisateur clique dans le champ "âge"

  **Alors** tout le texte est sélectionné (cela évite à l'utilisateur de devoir supprimer l’âge avant de le changer)

- **Lorsque** la liste des personnes est vide un message est affiché à la place ("La liste est vide")

# Partie 2

Ajouter un champ "parent" qui contiendra le nom du parent de la personne (cf. copie d'écran **formulaireGestionPersonnes_niv2.PNG**)

## Règles de gestion pour la deuxième partie:

- **Etant donné**
  un nom et un parent saisi
  un champ parent vide

  **Lorsque** l'utilisateur clique sur valider

  **Alors**
  une personne est créée avec le nom saisi et elle s'ajoute à la liste
  la liste de ses enfants est vide et elle s'affiche telle que décrite dans la copie d'écran **formulaireGestionPersonnes_niv2.2.PNG**

- **Etant donné**
  un nom et un parent saisi
  le parent a déjà été saisi (il existe dans la liste)

  **Lorsque** l'utilisateur clique sur valider

  **Alors** une personne est créée avec le nom saisi et elle s'ajoute
  en tant qu'enfant du parent dont le nom a été également saisi
  (cf. **copie d'écran formulaireGestionPersonnes_niv2.3.PNG** et **formulaireGestionPersonnes_niv2.4.PNG**)

  **Consigne**: la comparaison pour trouver le parent s'effectue sur le nom du parent et est sensible à la casse.

- **Etant donné**
  un nom et un parent saisi
  le parent n'a jamais été saisi (il n'existe pas dans la liste)

  **Lorsque** l'utilisateur clique sur valider

  **Alors** un message d'erreur est affiché à l'écran: le parent n'existe pas (et aucune autre action n'est effectuée)
  (cf. copie d'écran **formulaireGestionPersonnes_niv2.1.PNG**)

  **Consigne**: la comparaison pour déterminer si le parent existe déjà s'effectue sur le nom du parent et est sensible à la casse.

- **Etant donné**
  un nom saisi
  le nom a déjà été saisi (il existe dans la liste)

  **Lorsque** l'utilisateur clique sur valider

  **Alors** un message d'erreur est affiché à l'écran: "La personne existe déjà" (cf. copie d'écran **formulaireGestionPersonnes_niv2.5.PNG**)

  **Consigne**: la comparaison pour déterminer si la personne existe déjà s'effectue sur le nom de la personne et est sensible à la casse.
