
# SkyChev Flight Booking App

SkyChev is a flight booking application built with React and Chakra UI. This application allows users to search for flights, view popular destinations, and manage their bookings.

## Table of Contents
- [Installation](#installation)
- [Components](#components)
- [Folder Structure](#folder-structure)
- [Images](#installation)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/5reeram/FlightBooking.git
    cd FlightBooking
    ```

2. **Install dependencies:**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the project dependencies:

    ```bash
    npm install
    ```

3. **Run the development server:**

    Start the development server and open the app in your browser:

    ```bash
    npm start
    ```

    The application should be running at [http://localhost:3000](http://localhost:3000).


## Components

### Header

Displays the navigation bar with the logo, sign up, and login buttons.

### SearchBar

Provides input fields for searching flights including departure and arrival cities, dates, and passenger details.

### PopularDestinations

Shows a grid of popular destinations with images, city names, countries, and prices.

### FlightOptions

Lists available flight options with details like departure and arrival times, durations, prices, and a booking button.

### Footer

Displays additional information and links related to the company, booking policies, and customer support.

## Folder Structure

Here's an overview of the project's folder structure:

```
FlightBooking/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── SearchBar.js
│   │   ├── PopularDestinations.js
│   │   ├── FlightOptions.js
│   │   └── Footer.js
│   ├── photos/
│   │   ├── canada.jpeg
│   │   ├── delhi.jpeg
│   │   ├── sydney.jpeg
│   │   └── switzerland.jpeg
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

##Images

![image](https://github.com/user-attachments/assets/cea5eee7-a100-45c4-85b1-dd8a2c3849b7)
![image](https://github.com/user-attachments/assets/7f737693-1de1-4c81-b056-426361fc1bcb)



## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
