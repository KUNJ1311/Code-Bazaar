# Code Bazaar

![Code Bazaar Logo](public/assets/logo.svg)

Welcome to [**Code Bazaar**](https://codebazaar.vercel.app/), an e-commerce platform for all your coding merchandise needs. This repository contains the source code for the Code Bazaar web application.

Visit our website: [Code Bazaar](https://codebazaar.vercel.app/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Login and manage user sessions.
- **Checkout**: Review cart items and provide delivery details to place an order.
- **Payment System**: Integrate payment gateway for processing orders.
- **Order Management**: View order history and order details.
- **Product Details**: View detailed information about a product, including reviews and availability.
- **Shopping Cart**: Add, remove, and update quantities of products in the cart.
- **Pagination**: Navigate through multiple pages of products.
- **Product Carousel**: Display a carousel of products on the shop pages.
- **Responsive Design**: Ensure the application is usable on various screen sizes.
- **SEO Optimization**: Set meta tags for better search engine optimization.
- **Static Site Generation**: Generate static pages for products.
- **API Integration**: Fetch product and order data from the backend.
- **Toast Notifications**: Display notifications for user actions.
- **Environment Configuration**: Manage environment variables for different environments.
- **Linting and Code Quality**: Maintain code quality using ESLint.
- **Custom Fonts**: Use custom fonts for styling.
- **Email OTP Verification**: Send OTP to email for user verification during signup and password reset.
- **Forgot Password**: Allow users to reset their password using email OTP verification.
- **Change Password**: Allow users to change their password from their account settings.
- **Address Management**: Edit and update user address for orders.
- **Profile Management**: Edit and update user profile information.
- **Order Verification**: Verify order payments.

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:
  ```sh
  git clone https://github.com/your-username/code-bazaar.git
  ```
2. Navigate to the project directory:
  ```sh
  cd code-bazaar
  ```
3. Install dependencies:
  ```sh
  npm install
  ```
4. Set up environment variables:
  Create a `.env.local` file in the root directory and add your environment variables.
  ```env
  MONGO_URI=ENTER_YOUR_SECRET
  NEXT_PUBLIC_HOST=ENTER_YOUR_SECRET
  AES_SECRET=ENTER_YOUR_SECRET
  JWT_SECRET=ENTER_YOUR_SECRET
  NEXT_PUBLIC_RAZORPAY_API_KEY=ENTER_YOUR_SECRET
  RAZORPAY_API_SECRET=ENTER_YOUR_SECRET
  EMAIL=ENTER_YOUR_SECRET
  EMAIL_APP_PASSWORD=ENTER_YOUR_SECRET
  ```

## Usage

To start the development server, run:
```sh
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
