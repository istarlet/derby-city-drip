# Derby City Drip v2.0
## Description
I refactored the one-page website for the fictional **Derby City Drip** coffee shop I originally coded during Code Kentucky FEWD Session 1 for my [Code Kentucky](https://codekentucky.org/) FEWD Session 2 project.

You can view the original **Derby City Drip** project [here](https://github.com/istarlet/derby_city_drip). 

## How to Run this Project

To run this project:

First make sure that you have NodeJs intalled locally. 

Then from the terminal 

- `npm install` to install the needed packages

- `node server.js` to start the server

Once you see `Server is running on 3000`, please view my project at http://localhost:3000/

## Javascript Features
`1. Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app`

I created a json file that contains the Derby City Drip Coffee Shop menu items divided into groups: Coffee, Non-Coffee, Tea, and Pastry.

`2. Create a form and save the values (on click of Submit button) to an external file`

The email signup form saves the NAME and EMAIL to MongoDB Atlas, the cloud based version of MongoDB. 
 
`3. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application`

Each group of menu items (Coffee, Non-Cofee, Tea, and Pastry) are setup as an array in the menu.json file. I used fetch() to grab each array from the menu.json file and displayed the data as individual menu items in html on the web page. 

## Additional Javascript Feature
`Create a web server with at least one route and connect to it from your application using ExpressJS`

I connected my signup form to MongoDB Atlas by creating a web server in ExpressJS. 

## Javascript Feature Not Listed on Project Requirements
`Use Leaflet.js to create an interactive map`

I used Leaflet.js to display a map of Louisville that you can zoom in and out of plus created a marker with a pop-up to mark where the fictional **Derby City Drip** coffee shop resides on the map.




