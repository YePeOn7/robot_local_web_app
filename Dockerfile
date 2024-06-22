# Use an official Ubuntu as a parent image
FROM ubuntu:20.04

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive
ENV NVM_DIR=/root/.nvm

# Install necessary packages
RUN apt-get update && apt-get install -y \
    git \
    cmake \
    build-essential \
    libusb-1.0-0-dev \
    python3 \
    python3-pip \
    curl

# Install Flask and Python dependencies
RUN pip3 install Flask Flask-Cors

# Clone the stlink repository and build it (assuming this is still needed)
RUN git clone https://github.com/stlink-org/stlink.git /opt/stlink \
    && cd /opt/stlink \
    && mkdir build && cd build \
    && cmake .. \
    && make \
    && make install \
    && ldconfig
    
WORKDIR /opt/app
COPY ./server ./server
COPY ./client ./client

# #Install nodejs and npm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install 20 \
    && ln -s $NVM_DIR/versions/node/$(nvm current)/bin/node /usr/local/bin/node \
    && ln -s $NVM_DIR/versions/node/$(nvm current)/bin/npm /usr/local/bin/npm

WORKDIR /opt/app/client
RUN /bin/bash -c "source $NVM_DIR/nvm.sh && npm install && npm run build"

WORKDIR /opt/app/server
EXPOSE 3000 5000

CMD ["bash", "-c", ". $NVM_DIR/nvm.sh && python3 ./app.py & cd ../client && npm run start"]
# CMD ["/bin/bash"]