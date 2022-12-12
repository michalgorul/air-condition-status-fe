# Air condition status

A web application that allows you to check the current weather and air quality anywhere in the world. It also provides the ability to review historical data, which is saved in real time to a PostgreSQL database. It also provides the necessary knowledge of recommended air quality indicators recognized by the WHO as well as the People's Republic of China. The server part was written using Python version 3.10 and frameworks such as FastAPI and SQLAlchemy. The black library and mypy were used to keep the code clean. The Pydantic library was used to validate data and manage environment variables. Part of the user view was made using the free and open-sourced React library and TypeScript.

## How it works

The service part including the database was loaded into the container using Dockerfile and docker-compose.yml. The free [IQAir api](https://www.iqair.com/air-pollution-data-api) was used to retrieve data on the current weather condition. The application also uses a functionality called Address geocoding. For this a free API called [API ninjas](https://api-ninjas.com/api/geocoding) was used. The last functionality that the described application offers is a weather forecast for the upcoming week. To download this data, the [Open-Meteo](https://open-meteo.com/en) platform was chosen.

## Installation

To run the service part, start the terminal in the root directory and execute the command: 
```bash
docker-compose up.
```

If Docker is not installed, this can be done using the instructions provided by its distributor on the site: 
 - https://docs.docker.com/desktop/install/linux-install/

To run the user interface part, start a terminal in the root directory and execute the commands: 
```bash
npm install
npm start
```
If npm is not installed this can be done by using the instructions on the manufacturer's website at: https://nodejs.org/en/

## How it works from the customer side

The application's client has the ability to obtain information about the current state of the weather and the quality of the air condition. He can do this by entering the city, town and country in which it is located, separating the two data with a comma, or entering the coordinates of the place he is looking for, also separating the two data with a comma, starting from entering the latitude and then the longitude. After pressing the 'Submit' button in the view or 'Enter' on the keyboard, the user is redirected to the second view, which contains all the necessary information mentioned above. The user can also, after pressing the 'Available cities' button, obtain information about the placed control stations in Poland. This data is displayed in the form of a table. After clicking on a row, he is redirected to the view of full weather information. To check the search history, press the 'History' button. The history is displayed in the form of a sortable table. Sorting can be used on any column by clicking on the header.  

## App look

## Documentation

The API documentation is available at: `http://localhost:8000/docs`
