# Trading App

## Overview

Trading App is a web application designed to provide users with real-time stock market data and facilitate the process of buying and selling stocks. The application leverages the Alpha Vantage API to fetch stock data and uses JWT for user authentication.

## Features

- **User Registration and Login**: Users can create an account and log in to access the application's features.
- **Real-time Stock Data**: Fetches real-time stock data using the Alpha Vantage API.
- **Logout**: Users can log out of their account.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.14.0 or later)
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/xmarzz/trade.git
   ```
2. Navigate to the project directory:
   ```
   cd trade
   ```
3. Install the dependencies:
   ```
   npm install 
   ```
4. Create a `.env` file in the root directory of the project and add the following variables:
   ```
   MONGO_URL=<Your MongoDB Connection String>
   JWT_SECRET=<Your JWT Secret Key>
   ALPHA_API=<Your Alpha Vantage API Key>
   ```
5. Start the server:
   ```
   npm start
   ```
6. start the client:
  ```
  npm run dev
  ```

## Usage

1. Open your web browser and navigate to `http://localhost:5173`.
2. Register a new user or log in with an existing account.
3. Once logged in, you can view your dashboard and real-time stock data.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to open an issue on GitHub or contact the project maintainers.

## Acknowledgments

- Alpha Vantage for providing the stock data API.
- React and React Router for building the frontend.
- Express and MongoDB for the backend.
- JWT for authentication.
