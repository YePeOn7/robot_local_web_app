# Use an official Ubuntu as a parent image
FROM ubuntu:20.04

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Install necessary packages
RUN apt-get update && apt-get install -y \
    git \
    cmake \
    build-essential \
    libusb-1.0-0-dev \
    python3 \
    python3-pip

# Clone the stlink repository and build it
RUN git clone https://github.com/stlink-org/stlink.git /opt/stlink \
    && cd /opt/stlink \
    && mkdir build && cd build \
    && cmake .. \
    && make \
    && make install \
    && ldconfig

# Create a directory for the server app
RUN mkdir -p /opt/server

# Set the working directory
WORKDIR /opt/server

# Copy the flash app into the container
COPY ./server .
COPY ./*.bin .

# Install Python dependencies
RUN pip3 install Flask Flask-Cors

# Make the flash app executable (assuming it's named app.py)
RUN chmod +x app.py

# Run the flash app when the container launches
CMD ["python3", "./app.py"]