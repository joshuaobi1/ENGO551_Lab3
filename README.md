# ENGO551_Lab3


Overview

This lab assignment for ENGO551 focuses on creating a web mapping application that allows users to filter and visualize building permits in Calgary. The application integrates data from the City of Calgary’s Open Calgary API and visualizes it on an interactive map using Leaflet.js. Users can filter permits based on date ranges and view detailed information about each permit by clicking on the markers.


Project Structure

app.py: The Flask application server. It handles the backend logic, including serving the main page and processing API requests to fetch building permits data based on user-selected date ranges.

templates/index.html: The main HTML file for the web application. It includes the setup for the Leaflet map, the search form for date ranges, and links to necessary CSS and JavaScript files.

static/js/main.js: Contains JavaScript code for initializing the Leaflet map, handling the date range picker functionality, fetching filtered data from the backend, and adding markers to the map with popups containing permit details.

static/css/style.css: Custom CSS styles for the application. It ensures the application is visually appealing and user-friendly across different devices.


Additional Information

Date Range Picker: The application uses a custom date range picker for users to select start and end dates for filtering building permits. It integrates seamlessly with the backend to fetch and display relevant data on the map.

Marker Clustering: To improve the map's readability, the application uses Leaflet.markercluster to group nearby permits into clusters.

Dynamic Data Visualization: Markers and their popups are dynamically generated based on the fetched data, providing users with up-to-date information about building permits in Calgary.
