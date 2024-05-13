# Gunakan image PHP Apache
FROM php:7.4-apache

# Salin file index.php ke dalam direktori web server Apache
COPY index.php /var/www/html/

# Expose port yang digunakan oleh server web Apache (biasanya 80)
EXPOSE 8080
