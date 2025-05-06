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



docker-compose up -d mongo4

docker exec -it mongo1 mongosh

rs.add({ _id: 3, host: "mongo4:27017" });

rs.status();
