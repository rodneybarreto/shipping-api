FROM node:14.16.0-alpine3.13
WORKDIR /opt/minipets/shipping
COPY . /opt/minipets/shipping
RUN npm install
EXPOSE 8082
CMD ["node","/opt/minipets/shipping/server.js"]