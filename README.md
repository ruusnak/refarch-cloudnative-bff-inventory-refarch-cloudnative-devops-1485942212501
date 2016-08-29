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

  [http://localhost:3001/api/items/validate](http://localhost:3001/api/items/validate)

  If you have the backend microservices running, you can test the actual endpoint with:

  [http://localhost:3001/api/items](http://localhost:3001/api/items)

## Available APIs

- List all items in inventory `/api/items`
- List item by id. Send `GET` request to `/api/items/{id}`
- List all items containing name. Send `GET` request to `/api/items//name/{name}`
- List all items with price less than or equal to. Send `GET` request to `/api/items/price/{price}`
- Add item. Send json paylond with `POST` request to `/api/items`
- Update item by id. Send json payload with `PUT` request to `/api/items/update/{id}`
- Delete item by id. Send `DELETE` request to `/api/items/delete/{id}` 

## Deploy to Bluemix Cloud Foundry runtime:

Update the manifest.yml file for a proper Bluemix hostname, then issue following command to deploy application to Bluemix:

   `cf push`
