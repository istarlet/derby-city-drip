# Derby City Drip Coffee Shop Website v2.0
## Description
I refactored the one-page website for the fictional **Derby City Drip** coffee shop I originally coded during Code Kentucky FEWD Session 1 for my [Code Kentucky](https://codekentucky.org/) FEWD Session 2 project.

You can view my original **Derby City Drip** project [here](https://github.com/istarlet/derby_city_drip). 

The current **Derby City Drip** website, while it appears visually nearly identical to the original, now uses javascript to update and display the menu items, collect email addresses to a cloud database, and display a map with the location that can be zoomed in or out. The specifics about these features can be found below. 

## How to Run this Project
Please make sure that you have NodeJs installed locally before proceeding. 

From the terminal 

- `npm install` to install the needed packages

- `node server.js` to start the server

Once you see `Server is running on 3000`, you can then view my project at http://localhost:3000/

## Javascript Features
`1. Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app`

I created a json file that contains the Derby City Drip Coffee Shop menu items divided into groups: Coffee, Non-Coffee, Tea, and Pastry. I used fetch() to grab the data from the menu.json file and then used map() to display the data as individual menu items in html on the web page. 

_ _ _

`2. Create a form and save the values (on click of Submit button) to an external file`

The email signup form saves the NAME and EMAIL to MongoDB Atlas, the cloud based version of MongoDB. 

_ _ _
 
`3. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application`

Each group of menu items (Coffee, Non-Cofee, Tea, and Pastry) are setup as an array in the menu.json file. I used fetch() to grab the data from the menu.json file and then used map() to display the data as individual menu items in html on the web page. 


## Additional Javascript Feature
`Create a web server with at least one route and connect to it from your application using ExpressJS`

I connected my signup form to MongoDB Atlas by creating a web server in ExpressJS. 

Click the image to watch a YouTube video showing that the form submission is correctly setup through ExpressJS and posting to MongoDB Atlas.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=oBD7WD_XQNg
" target="_blank" rel="noopener noreferrer"><img src="http://img.youtube.com/vi/oBD7WD_XQNg/0.jpg" 
alt="YouTube video showing form submission connection to MongoDB Atlas" width="240" height="180" border="10" /></a>

## Javascript Feature Not Listed on Project Requirements
`Use Leaflet.js to create an interactive map`

I used Leaflet.js to display a map of Louisville that you can zoom in and out of plus created a marker with a pop-up to mark where the fictional **Derby City Drip** coffee shop resides on the map.




