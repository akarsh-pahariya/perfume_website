Steps to run the project:-

1. Create a database on the mongoDB Atlas and create a file by the name of config.env in the server directory.

2. Paste the following 4 things in your config.env file

PORT = 3000
DATABASE_USERNAME = <your-database-username-from-atlas>
DATABASE_PASSWORD = <your-database-password-from-atlas>
DATABASE_URL = <your-database-url-from-atlas>

3. Open project inside the VS code and then open terminal in the VS code.

4. Run the commands written below to install all the dependencies required on the client side.

cd ./Client
npm i

5. Run the commands written below to install all the dependencies required on the server side.

cd .././Server
npm i

6. To run the project run the below written two commands in two separate terminals.

npm run dev **To start the frontend
npm start **To start the server

-> All the envoirnment variables are already present inside the config.env which is already present in the Server directory.
