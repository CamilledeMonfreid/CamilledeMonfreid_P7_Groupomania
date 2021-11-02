# Projet Openclassrooms N°7 : Groupomania
## Visualiser le site
### Prérequis
Vous aurez besoin de Node et d'installer `npm` sur votre machine. 

### Intallation
Clonez le repositery  
Positionnez-vous dans le dossier du projet puis suivez la procédure suivante via votre terminal : 

#### Connection à la base de données
1- Tout d'abord, se connecter à votre serveur **MySql** 
2- Exécuter la commande: `CREATE DATABASE groupomania_db;` afin de créer la base de données
3- Vérifiez les identifiants dans le fichier config/config.json du dossier backend puis importer le fichier groupomania_db.sql : `mysql -u root -p groupomania_db < groupomania_db.sql`. Bien veiller à remplacer `groupomania_db.sql` par votre chemin du fichier.  

#### Backend
1- Depuis le dossier du projet : `cd backend`  
2- `npm install`  
3- `nodemon server`  

#### Frontend
1- Depuis le dossier du projet : `cd frontend`  
2- `run npm install` 
3- `npm run serve`

## Scénario
"Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues."  

Le projet fonctionnera grâce à SQL et Vue.js.

## Éléments fournis
➡️ Les logos de Groupomania  

## Compétences acquises 
✅ Authentifier un utilisateur et maintenir sa session  
✅ Personnaliser le contenu envoyé à un client web  
✅ Gérer un stockage de données à l'aide de SQL  
✅ Implémenter un stockage de données sécurisé en utilisant SQL  

### Fonctionnement des projets Openclassrooms
Il nous est fournit un scénario de projet permettant d'acquérir des compétences.  
Une fois le projet terminé, il est évalué via une soutenance. La soutenance est validé si les compétences sont acquises !
