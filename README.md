# favPic - Random Photo Generator

favPic is a simple web application that allows you to generate and display random photos from Unsplash based on your search query. It's built using HTML, CSS, and React.


## Features

- Search for random photos on Unsplash.
- Customize the number of photos to display.
- Display photo credits with links to the photographer and Unsplash.

## Demo

[https://cfavpics.netlify.app]

## Installation

1. Clone this repository: `git clone https://github.com/fayiz770/favpics.git`
2. Navigate to the project directory: `cd favpics`
3. Install dependencies: `npm install`

## Usage

1. Obtain an Unsplash API client ID by signing up for an account at [https://unsplash.com/developers](https://unsplash.com/developers).
2. Replace `const clientID = "YOUR_CLIENT_ID";` in `App.js` with your actual Unsplash API client ID.
3. Run the app: `npm start`
4. Open your browser and go to `http://localhost:3000`

## Configuration

You can customize the behavior of the app by modifying the following variables in `App.js`:

- `const clientID`: Your Unsplash API client ID.
- `const utm`: Tracking information for Unsplash links.
- `const url`: The API endpoint to fetch random photos.
- `const numberOfPics`: The default number of photos to display.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request.


Feel free to customize this README template according to your preferences. Good luck with your project!
