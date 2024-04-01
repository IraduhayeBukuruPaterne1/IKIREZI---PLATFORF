IKIREZI Platform
Description
The IKIREZI Platform is an online system designed to enhance accessibility to essential administrative services in Burundi, focusing on education technology and government services. It aims to streamline application processes for passports, equivalence certifications, and birth certificates, ultimately fostering innovation in education and improving the efficiency of government services.
Setup Instructions
Prerequisites
Node.js and npm installed on your machine
MongoDB installed and running locally or accessible remotely
Installation
Clone the repository:https://github.com/IraduhayeBukuruPaterne1/IKIREZI---PLATFORM.git


bash
git clone https://github.com/IraduhayeBukuruPaterne1/IKIREZI---PLATFORM.git



Navigate to the project directory:
bash


cd ikirezi-platform


Install dependencies:


npm install


Configuration
Create a .env file in the root directory:
bash
touch .env


Add the following environment variables to the .env file:
bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ikirezi


Database Setup
Start MongoDB:
mongod


Initialize the database:
arduino
npm ru
Running the Application
Start the server:
sql
npm start


Open your web browser and navigate to http://localhost:3000.
Usage
Follow the on-screen instructions to navigate the platform.
Use the provided forms to apply for passports, equivalence certifications, and birth certificates.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB


Credits
Iraduhaye Bukuru Paterne - Project Lead & Developer
