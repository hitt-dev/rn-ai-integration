# Gemini Integration React Native POC

This project demonstrates a **Proof of Concept (POC)** for integrating Google Gemini AI with a React Native application using a custom Bun backend.

## Features

- React Native frontend to interact with Gemini AI
- Bun backend server to securely call the Gemini API
- Simple UI to send prompts and display AI responses
- Example of API latency logging and error handling

## How It Works

1. The React Native app sends a prompt to the backend server.
2. The backend uses the [@google/genai](https://www.npmjs.com/package/@google/genai) SDK to call the Gemini API.
3. The backend returns the AI-generated response to the app.

## Setup

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd gemini-integration
```

### 2. Install Dependencies

#### Backend (Bun)

```sh
bun install
```

#### Frontend

```sh
cd <your-react-native-app-directory>
npm install
```

### 3. Configure API Key

Create a `.env` file in the project root:

```
GOOGLE_API_KEY=your-gemini-api-key
```

### 4. Start the Backend Server

```sh
bun run server.js
```

The backend will run at `http://localhost:3001`.

### 5. Run the React Native App

Make sure to update the backend URL in your frontend code to point to your machine's IP address (e.g., `http://192.168.1.x:3001`) if running on a device or emulator.

```sh
npx expo start
```

## Notes

- **Do not expose your Gemini API key in the frontend.** Always use a backend server.
- For Android emulators, use `10.0.2.2` instead of `localhost` to access your backend.
- The first Gemini API call may take a few seconds due to model cold start.

## License

This project is for demonstration and educational
