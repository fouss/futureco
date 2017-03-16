# syso

Introduction
----------------------

![L'image du projet](https://github.com/laem/syso/blob/master/source/images/logo.png)

L'idée, que cette ébauche de logo tente d'exprimer, c'est d'augmenter les textes de loi avec des jeux de *donnée* qui décrivent l'architexture et les calculs de ses éléments, permettant par exemple à un citoyen ou une entreprise (deux entités différentes du système) de calculer ses obligations et ses droits ainsi que leur articulation (ex. comment je calcule la CSG sur mon salaire ? est-ce que j'appartiens au régime Alsace-Moselle ?).

Des moteurs interprèteront ces données pour en faire des formulaires de simulation, des outils pédagogiques (dans la lignée de la fiche de paie simplifiée : regrouper les cotisations sociales par risque), voir de la déclaration, et soyons fous, des outils politiques.

Le premier moteur et produit utilisable est concerne le sujet pratique du différentiel des cotisations dues pour un CDD.
La suite sera l'intégration de toutes les cotisations d'un contrat CDI/CDD (sans le droit conventionnel).
Puis les principales réductions et aides à l'embauche.
Suivront peut-être les formes de travail différentes...

Développé au [SGMAP](https://github.com/sgmap/)


Pour les développeurs
--------------------------

C'est une appli en React, Redux, ES6-ES7, Webpack, qui exploite la loi codée en YAML.
Les fichiers YAML sont principalement du code préfixé : opérateur puis list ou objet d'opérandes. Les feuilles de cet arbre par contre sont en style infixe et parsées avec Nearley.js.
Ce gros AST est traversé, cela représente le moteur JS, qui utilise Ramda.
Vous ne trouverez pas de `const` dans l'appli, tous les `let` se comportentant comme des `const` (ne sont pas réassignés), sauf pour les vraies constantes dans `actions.js`.
Des bouts de code marqués avec `TODO perf` peuvent être améliorés si l'appli devient lente.
