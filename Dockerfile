FROM php:7.4-apache

# Set the working directory in the container
WORKDIR /var/www/html

# Copy the PHP application files to the container
COPY . /var/www/html/

# Expose port 8080 to the outside world
EXPOSE 8080

# CMD to run the PHP application
CMD ["php", "-S", "0.0.0.0:8080", "-t", "/var/www/html"]
