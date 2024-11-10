# Metadata Extractor
A web app that extracts metadata from various file types using a combination of client-side JavaScript and a Node.js server with Apache Tika.

Features:

* Supported File Types:
    * JPEG, PNG, and other image formats (using ExifJS)
    * Wide range of document and other formats for example .docx, .xlsx, .pdf etc (using Apache Tika)
* Metadata Display: Displays the extracted metadata in a readable format.
* Metadata Filtering: Filter metadata by key or value using the search bar.
* Save Metadata:Download the displayed metadata as a text file.

Architecture:

This application uses a client-server architecture:

* Client-side:  An HTML page (`index.html`) with JavaScript handles file selection, user interaction, and metadata display/filtering.
* **Server-side:** A Node.js server with the `tika-server` package uses Apache Tika to extract metadata from files sent by the client.

Prerequisites:

* Node.js and npm: Make sure you have Node.js and npm installed.
* Tika Server:
    1.  Create a directory for the server (e.g., `tika-server`).
    2.  Inside the directory, create a file named `server.js`.
    3.  Install the `tika-server` package:
        ```bash
        npm install tika-server
        ```

Usage:

1. Start the Tika Server:
   * Navigate to the `tika-server` directory in your terminal.
   * Run `node server.js` to start the server.

2. Open the Web App:
   * Open `index.html` in your web browser.

3. Extract Metadata:
   * Click the "Choose File" button and select a file.
   * The extracted metadata will be displayed.

4. Filter and Save:
   * Use the search bar to filter the metadata.
   * Click the "Save Metadata" button to download the metadata.


Libraries Used:

* Client-side:
    * ExifJS (for image metadata)
* Server-side:
    * tika-server
    * 

How it Works:

1.  The user selects a file using the file input in the web app.
2.  The web app sends the file to the Node.js server.
3.  The server uses Apache Tika to extract metadata from the file.
4.  The server sends the extracted metadata back to the web app as a JSON response.
5.  The web app displays the metadata and allows the user to filter and save it.

Notes:

* This setup requires both the client-side web app and the Node.js server to be running.
* Ensure the server is running on the correct port (Port: 9998).
* Consider adding error handling and security measures for production and lab environments.

Contributing:

Contributions are welcome! Feel free to:

* Add support for more file types or metadata fields.
* Improve the user interface and user experience.
* Enhance the metadata filtering and analysis capabilities.
* Add more robust error handling and security features.


License:

This project is licensed under the GNU GENERAL PUBLIC LICENSE Version 3.0 - see the [LICENSE](LICENSE) file for details.
