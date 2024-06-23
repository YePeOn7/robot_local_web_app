FROM python:3.9.19-slim-bullseye


RUN pip3 install Flask Flask-Cors
RUN apt-get update && apt-get install -y cmake libusb-1.0-0-dev git \
    && rm -rf /var/lib/apt/lists/* 

# STLINK
RUN git clone https://github.com/stlink-org/stlink.git /opt/stlink \
    && cd /opt/stlink \
    && mkdir build && cd build \
    && cmake .. \
    && make \
    && make install \
    && ldconfig \
    && cd / && rm -rf /opt/stlink \
    && apt-get purge -y --auto-remove \
    cmake \
    git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

CMD ["python3", "./app.py"]