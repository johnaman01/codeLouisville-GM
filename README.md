##*11.18.16*##
#codeLouisville- FullStack JavaScript, MEAN project 
RANOOK is a random encounter generator that can be used by GM's for table-top role playing games to create a random encounter in a pinch.
RANOOK only generates descriptive text that the GM then adapts to whatever game system is being used.  
In other words, RANOOK as released is unable to generate mechanical data applicable to the randomly selected encounter.
RANOOK uses a database to store a catalog that can be modified by the user.  

#Directions#
1. Clone the game_master>toolkit (ie, Ranook) master branch into a directory 
2. Install mongodb on your machine
3. Run mongo via: 
 1. :/$ mongod
4. Install local dependencies via:
 1. :/$ npm install
5. Run node in the home directory of the app (./game_master_toolkit/) via:
 1. :/$ node src/app.js
 2. You should see the following message in CLI:
 3. The frontend server is running on localhost:3000. Connected to mongodb.
6. In your browser go to localhost:3000
7. In Ranook, you can 
 1. Add a new encounter
 2. Edit new or existing encounters
 3. Save changes to the "Random Encounter Table"
  1. To demonstrate this functionality, edit an encounter and refresh your browser.  The encounter should persist.
 4. Select a random encounter out of 6 created using the d6 button.




