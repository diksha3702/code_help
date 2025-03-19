FROM node:18

WORKDIR /work 

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Expose the correct Vite port
EXPOSE 5173

# Set the host to 0.0.0.0 so it's accessible from outside the container
CMD ["npm", "run", "dev", "--", "--host"]


# FROM node:18

# WORKDIR /work 

# COPY package.json package-lock.json ./

# RUN npm install

# COPY . .


# EXPOSE 5173

# CMD [ "npm","run","dev" ]

