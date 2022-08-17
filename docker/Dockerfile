# docker build -t jkomyno/rockylinux-8-node -f ./docker/Dockerfile .

##
# Create image based on RockyLinux 8 with Node.js installed 
##

FROM rockylinux:8 AS rockylinux-8-node

RUN yum -y update \
  && yum clean all

# install Node.js
ARG NODE_VERSION="18.5.0"
RUN curl -fsSL https://rpm.nodesource.com/setup_18.x | bash - \
  && dnf install nodejs -y \
  && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
  && source ~/.bashrc \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default

FROM rockylinux-8-node

WORKDIR /app

# copy sources
COPY ["./", "./"]

# install dependencies
RUN npm i --legacy-peer-deps

ENTRYPOINT [ "npm", "run", "prisma:db-push", "&&", "npm", "run", "prisma:db-seed" ]
