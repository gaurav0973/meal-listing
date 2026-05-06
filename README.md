# Meals Listing Interface

A simple React app that fetches meal data from the FreeAPI public endpoint and displays it as a responsive card grid. Each card shows the meal image, name, category, area, instructions, and a link to the YouTube recipe video.

## Features

- Fetches meals from a remote API on page load
- Displays meals in a responsive grid layout
- Shows meal image, title, category, area, and instructions
- Includes a direct link to the recipe video on YouTube
- Uses Vite, React, Axios, and Tailwind CSS

## Tech Stack

- React 19
- Vite
- Axios
- Tailwind CSS 4

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm, pnpm, or yarn

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the app.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## API Used

The app currently requests meals from:

```text
https://api.freeapi.app/api/v1/public/meals
```

The response is consumed in the app and rendered directly in the UI.

## Project Structure

```text
Meals Listing Interface/
	public/
	services/
		api.js
	src/
		App.jsx
		index.css
		main.jsx
```

## Notes

- The page shows a loading state until meal data is fetched.
- If the API is unavailable, the UI will not render any meals until the request succeeds.
