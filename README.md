# Projet 7 - Groupomania 
## Frontend

Ouvrir le dossier Frontend dans votre terminal puis exécuter la commande suivante :

    npm install

puis

    npm run serve


## Connection à la base de données

1- Tout d'abord, se connecter à votre serveur **MySql** 
2- Exécuter la commande: `CREATE DATABASE groupomania_db;` afin de créer la base de données
3- Vérifiez les identifiants dans le fichier config/config.json du dossier backend puis importer le fichier groupomania_db.sql :

    mysql -u root -p groupomania_db < groupomania_db.sql

Bien veiller à remplacer `groupomania_db.sql` par votre chemin du fichier.

## Backend

Ouvrir le dossier Backend dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    nodemon server


