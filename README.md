# Settlement Process Application

This application implements a settlement process between two parties, Party A and Party B. The system allows Party A to submit and modify settlement amounts, while Party B can respond by agreeing or disputing the amounts. The process continues until both parties reach an agreement.

## Features

- Party A can submit an initial settlement amount.
- Party A can modify and resubmit the settlement amount any number of times until Party B responds.
- Party B can dispute or agree to the submitted amount. If disputed, Party A can modify and resubmit the amount. The process repeats until agreement is reached.
- Party A’s interface displays Party B’s current response (dispute or agreement).
- Party B's interface displays the amount submitted by Party A with automatic updates.
- The system transitions to a settled state once Party B agrees.
- If Party A or Party B responds during the modification process of the other party, the system prompts the other party to refresh the page to see the updated status(vice versa).

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Backend Setup

1. Navigate to the backend directory:
```bash
cd settlement-app-backend
```
2. Install the necessary dependencies:
```bash
npm install
```
3. Start the backend server:
```bash
node server.js
```

The backend server will run on `http://localhost:5000`.

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd settlement-app-frontend
```
2. Install the necessary dependencies:
```bash
npm install
```
Start the React application:
```bash
npm start
```

The frontend application will run on http://localhost:3000.

##  Running the Application

Start the backend server as mentioned in the Backend Setup section.
Start the frontend application as mentioned in the Frontend Setup section.

## Accessing the Application

- Party A's interface can be accessed at http://localhost:3000/party-a.
- Party B's interface can be accessed at http://localhost:3000/party-b.

## API Endpoints

- GET `/api/status`: Retrieves the current settlement status.
- POST `/api/submit`: Submits a new settlement amount by Party A.
- POST `/api/respond`: Responds to the settlement amount by Party B (agreed or disputed).
- POST `/api/reset`: Resets the settlement to start a new negotiation.