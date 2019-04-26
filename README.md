# GroupRideWeb
RPI GroupRide Web App

The application acts as a social network. Students can make posts about an Uber/Lyft ride they intend to take (and at what time), notifying RPI students in their area. These notified students then have the option to join the Uber/Lyft group (a.k.a the GroupRide) and communicate with the individuals in the group.


To run our application:

1. Clone the repositiory
    -download zip file at: https://github.com/zdward/GroupRideWeb.git
    - clone from git from terminal
        - If you do not have git installed on your device: https://git-scm.com/downloads
        - From terminal, go to your desired directory and use git clone https://github.com/zdward/GroupRideWeb.git
    -Use prefered IDE git platform
        
2. Install the necessary modules by using 'npm install'
    - If you do not have node or npm installed please visit https://nodejs.org/en/, and download accordingly
    - Traverse to the js file in the GroupRideWeb local repository located at /public/js
    - use npm install
    
3. Set environment variables for the database within mongo atlus.
    - To make an account: https://www.mongodb.com/cloud/atlas
    - Make a database and an collection called users
    - Using your user password and username create a .env file so you may access you newly made database
    - Resources for mongo atlus https://docs.atlas.mongodb.com/getting-started/
4. Then run the server.js by using nodemon server.js or node server.js within the same public/js file
5. Navigate to http://localhost:3000 in your browser to get started!
