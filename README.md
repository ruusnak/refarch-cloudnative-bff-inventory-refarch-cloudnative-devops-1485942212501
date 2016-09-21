# Node.js Express application as Business Facing Microservice

*This project is part of the 'IBM Cloud Native Reference Architecture' suite, available at
https://github.com/ibm-cloud-architecture/refarch-cloudnative*

This project sits between the API gateway and the backend inventory microservices. It is built with Node.js Express and request framework with following functionality:

 - Route requests to backend Inventory microservice over Netflix Zuul.
 - Serve the application images
 - Augment the JSON data payload for Mobile and Web client

The Node.js application is managed under the `inventory` folder.

This application depends on Netflix Zuul service to be operational and routing to the backend Inventory microservice.

Routes to microservice URIs are defined in `routes/itemservices.js`. Run following command to set microservice base URL to Zuul proxy URL.

```
# cd inventory
# /bin/bash set-zuul-proxy-url.sh [-m <microservice-app-name> -c <context-path>] -z <zuul-cluster-url>
   
  defaults: -m inventory-microservice -c micro
```


## Run the application locally:

 - Run the application:

    ```
    # npm install
    # npm start
    ```

  This will start the application on port 3001.

  - Validate the local application

  [http://localhost:3001/api/items/validate](http://localhost:3001/api/items/validate)

  To test the actual endpoint with backend services
  [http://localhost:3001/api/items](http://localhost:3001/api/items)

## Available APIs

- List all items in inventory. Send `GET` request to `/api/items`
- List item by id. Send `GET` request to `/api/items/{id}`
- List all items containing name. Send `GET` request to `/api/items//name/{name}`
- List all items with price less than or equal to. Send `GET` request to `/api/items/price/{price}`
- Add item. Send json paylond with `POST` request to `/api/items`
- Update item by id. Send json payload with `PUT` request to `/api/items/update/{id}`
- Delete item by id. Send `DELETE` request to `/api/items/delete/{id}` 

## Deploy to Bluemix Cloud Foundry runtime:

1. Create Auto-Scaling service. `manifest.yml` has Auto-Scaling service name set to `cloudnative-autoscale`. If you have an existing Auto-Scaling service with a different name, then edit manifest.yml to update the service name. 

    To create a new Auto-Scaling service with name used in manifest.yml, use the following command.
    ```
    # cf create-service Auto-Scaling free cloudnative-autoscale
    ```

2. Set Cloud Foundry application name. `manifest.yml` has the application and host names set to `inventory-bff-app`. You can leave the name as-is or change it. Now, deploy the application.
    ```
    # cf push
    ```

3. Validate the Cloud Foundry application. [http://inventory-bff-app.mybluemix.net/api/items/validate](http://inventory-bff-app.mybluemix.net/api/items/validate)

This completes deployment of the application to Bluemix Cloud Foundry runtime.
