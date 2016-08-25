# Node.js Express application as Business Facing Microservice

*This project is part of the 'IBM Cloud Native Reference Architecture' suite, available at
https://github.com/ibm-cloud-architecture/refarch-cloudnative*

This project sits between the API gateway and the backend inventory microservices. It is built with Node.js Express and request framework with following functionality:

 - Implement the Inventory API managed by IBM API connect
 - Invoke the backend microservices component
 - Serve the application images
 - Augment the JSON data payload for Mobile and Web client

The Node.js application is managed under the `inventory` folder.

## Run the application locally:

 - Run the application:

  `$ cd inventory`

  `npm install`

  `npm start`


  This will start the application on port 3001.

  - Validate the local application

  [http://localhost:3001/api/items/mock](http://localhost:3001/api/items/mock)

  If you have the backend microservices running, you can test the actual endpoint with:

  [http://localhost:3001/api/items](http://localhost:3001/api/items)


## Deploy to Bluemix Cloud Foundry runtime:

Update the manifest.yml file for a proper Bluemix hostname, then issue following command to deploy application to Bluemix:

   `cf push`
