# web

**web** is a simple web application that allows users to draw on a canvas and visualise the other drawing collected for our KNN/other models. This project is built using HTML, CSS, and JavaScript.

## Features

- Draw on a canvas using mouse events
- Clear the canvas
- Visualise all other Images
- Can also view them on charts

## Getting Started

### Prerequisites

To run this project, you need a modern web browser. No additional installations are required.

### Installation

1. Clone this repository to your local machine:
    ```sh
    git clone https://github.com/rajm012/web.git
    ```
2. Navigate to the project directory:
    ```sh
    cd web
    ```
3. Open the `index.html` file in your web browser to start the application.

### Usage

- Use the mouse to draw on the canvas.
- Click the "Clear" button to erase the canvas.
- Click the "Download" button to save your drawing as a JSON file.

## Project Structure

```
drawing-board/
│
├── index.html    # The main HTML file
├── viewer.html    # TO visualise all drawings in a Canva
├── styles.css    # The CSS file for styling
└── js            # The JS folder for other stuffs

```

## Code Overview

### HTML (`index.html`)

The HTML file contains the structure of the application, including the canvas element and buttons.

### HTML (`viewer.html`)

Have code to visualise the image and also to implement KNN.

### CSS (`styles.css`)

The CSS file contains styles for the canvas and buttons.


### JavaScript (`Folder: js`)

The JavaScript folder handles the drawing functionality, clearing the canvas, and downloading the drawing as a JSON file.


## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## License

This is a open source project feel free to use it and modeify the same.

----
