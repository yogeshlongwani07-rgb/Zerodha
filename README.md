# Zerodha Clone

A responsive frontend clone of the Zerodha website built using React and React Router. This project recreates the main sections of Zerodha's landing pages, including Home, Products, Pricing, About, Support, and Signup pages.

## Features

* Responsive user interface
* React Router based navigation
* Reusable React components
* Modern landing page design
* Multiple page layouts
* Product showcase sections
* Pricing information
* Support and help section
* Signup page
* Custom 404 Not Found page

---

## Tech Stack

* React
* React Router DOM
* JavaScript (ES6+)
* HTML5
* CSS3

---

## Project Structure

```text
src/
│
├── index.js
│
├── landing_page/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── OpenAccount.js
│   ├── NotFound.js
│
│   ├── home/
│   │   ├── HomePage.js
│   │   ├── Hero.js
│   │   ├── Awards.js
│   │   ├── Stats.js
│   │   ├── Pricing.js
│   │   └── Education.js
│
│   ├── about/
│   │   ├── AboutPage.js
│   │   ├── Hero.js
│   │   └── Team.js
│
│   ├── products/
│   │   ├── ProductPage.js
│   │   ├── Hero.js
│   │   ├── LeftSection.js
│   │   ├── RightSection.js
│   │   └── Universe.js
│
│   ├── pricing/
│   │   ├── PricingPage.js
│   │   ├── Hero.js
│   │   └── Brokreage.js
│
│   ├── support/
│   │   ├── SupportPage.js
│   │   ├── Hero.js
│   │   └── CreateTicket.js
│
│   └── signup/
│       └── SignUp.js
│
└── public/
    └── media/
```

---

## Pages

### Home

* Hero section
* Awards section
* Statistics section
* Pricing overview
* Educational content
* Open account CTA

### Products

Showcases Zerodha products such as:

* Kite
* Coin
* Console
* Kite Connect API
* Varsity Mobile

### Pricing

* Brokerage details
* Pricing information
* Trading charges overview

### About

* Company introduction
* Team section

### Support

* Support dashboard
* Ticket creation section

### Signup

* Account opening page

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm start
```

The application will start on:

```text
http://localhost:3000
```

---

## Available Scripts

### Start Development Server

```bash
npm start
```

### Create Production Build

```bash
npm run build
```

### Run Tests

```bash
npm test
```

---

## Routes

| Route    | Description    |
| -------- | -------------- |
| /        | Home Page      |
| /signup  | Signup Page    |
| /about   | About Page     |
| /product | Products Page  |
| /pricing | Pricing Page   |
| /support | Support Page   |
| *        | Not Found Page |

---

## Dependencies

Main dependencies used in the project:

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.6.0",
  "react-scripts": "5.0.1"
}
```

---

## Learning Objectives

This project demonstrates:

* React component architecture
* React Router implementation
* Reusable UI components
* Responsive web design
* Single Page Application (SPA) development
* Project structuring in React

---

## Future Enhancements

* User authentication
* Backend integration
* Dynamic pricing data
* Contact form functionality
* Dark mode
* Dashboard implementation
* API integration

---

## Disclaimer

This project is created for educational and portfolio purposes only. Zerodha is a registered trademark of its respective owners. This project is not affiliated with or endorsed by Zerodha.

---

## Author

Built using React and React Router DOM.
