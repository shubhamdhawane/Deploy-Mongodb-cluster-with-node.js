# Scalling part  - if you need one more container so add this line in docker-compose.yml file
##################
scaling part
##################
Key Benefits
Single Server Deployment: Runs all services (MongoDB and Node.js) on one server.
High Availability: MongoDB replica set ensures data availability in case of container restarts.
Easy Scaling: Add more MongoDB or app instances using docker-compose.
Scaling MongoDB Replica Set


update docker-compose.yml file

services:
  mongo4:
    image: mongo:6.0
    container_name: mongo4
    networks:
      - mongo-app-net
    command: mongod --replSet rs0 --bind_ip_all
    volumes:
      - mongo4_data:/data/db
    ports:
      - 27018:27017

volumes:
  mongo4_data:


docker-compose up -d mongo4
docker exec -it mongo1 mongosh
rs.add({ _id: 3, host: "mongo4:27017" });
rs.status();
