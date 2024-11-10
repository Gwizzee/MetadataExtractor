# Metadata Extractor
A web app that extracts metadata from various file types, including images, documents and spreadsheets.

## Features:

Supported File Types:
    * JPEG, PNG, and other image formats (using ExifJS)
    * DOCX (Microsoft Word)
    * XLSX (Microsoft Excel)
    * (More types can be added with additional libraries)
    
Metadata Display: Displays extracted metadata in a readable format.

Metadata Filtering:Filter metadata by key or value using the search bar.
Save Metadata: Download the displayed metadata as a text file.

Usage

1. Open `index.html` in your web browser.
2. Click the "Choose File" button and select a file.
3. The extracted metadata will be displayed below.
4. Use the search bar to filter the metadata.
5. Click the "Save Metadata" button to download the metadata as a text file.

Libraries Used:

* ExifJS: Used for extracting metadata from image files. Included via CDN.
* (Optional) Apache Tika: (Not included) Can be used for extracting metadata from a wider range of file types (DOCX, XLSX, PDF, etc.).

How to Add More File Types

1. Include the necessary library: Add the library to your project (e.g., Apache Tika).
2. Modify the JavaScript code:Update the `reader.onload` function to include logic for extracting metadata from the new file type using the added library.

Notes:

* This is a basic implementation and can be further improved with more advanced features and support for a wider range of file types.
* Error handling is included, but it can be enhanced for more specific error scenarios.
* The filtering is case-insensitive and searches both keys and values.

Contributing:

Feel free to contribute to this project by:

* Adding support for more file types.
* Improving the user interface.
* Enhancing the metadata analysis and filtering capabilities.
* Fixing bugs and improving code quality.

License:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
