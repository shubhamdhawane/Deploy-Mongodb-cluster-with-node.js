# Deploy-Mongodb-cluster-with-node.js
We deploy MongoDB cluster with Node.js application on docker environment

# install docker and docker-compose and then execute this cmd
docker-compose up -d

docker ps

docker exec -it mongo1 mongosh

rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo1:27017" },
    { _id: 1, host: "mongo2:27017" },
    { _id: 2, host: "mongo3:27017" }
  ]
})
