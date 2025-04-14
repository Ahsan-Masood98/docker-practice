FROM node
# to load an image from Docker hub or from your machine

WORKDIR /app
# to set a woking directory of the docker container where the docker will executes all the subsequent commands will run in this /app directory

COPY package.json /app
# to copy package.json file and load it in the image Copy source destination

RUN npm install
# to run npm install command in the image

COPY . /app
# to copy all the project files and load it in the image Copy source destination

EXPOSE 80
# we want to expose a certain network port to our local system like port 80, 8080, 8000, etc. now the contaner will listen on this port

CMD ["node", "server.js"]
# to tell whenever a container is created based on that image we will use the node server.js command to run the server.js file