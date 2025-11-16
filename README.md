Task Manager App (MERN Stack)

A simple task manager (ToDo List) built using the MERN Stack:
 MongoDB, 
 Express.js, 
 React, 
 Node.js. 
 
 
 Users can:

- ✅ Add tasks
- ✅ Mark them complete/incomplete
- ✅ Update tasks
- ❌ Delete tasks

Styled using Tailwind CSS.



Clone the Repo


Setup Backend

cd backend
npm install


Create a .env file in backend/ and add:

PORT=5000
MONGO_URL=your_mongodb_connection_string


Start the backend server:
npm start


Setup Frontend
cd ../frontend
npm install


Tailwind Setup (already included)
Ensure index.css has:

@tailwind base;
@tailwind components;
@tailwind utilities;


Start the frontend server:
npm start


   Live on
Frontend: http://localhost:3000
Backend:  http://localhost:5000



Technologies Used:

MongoDB + Mongoose

Express.js

React

Node.js

Tailwind CSS

Axios

