# Image nodejs
FROM node:18.16.0

# create directori
WORKDIR /usr/src/app

# # copy file package json
# COPY /middleware/service.json ./

# copy file package json
COPY package*.json ./

# install dependensi
RUN npm install

# copy all file
COPY . .

# expose port
EXPOSE 8080

# running app
CMD [ "npm", "start" ]
