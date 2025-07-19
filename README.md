# TypeMart

Welcome to our new online shop: TypeMart! We’re ready to go live… well, almost… We’re attempting to get this shop up and going, and have recently coded a crucial piece of our online mart: the purchase flow!

It was really important to us that the purchase flow is type-safe. All that type safety will allow us to sleep well at night.

Currently, we are producing a few types of products, and we can’t wait to expand as we start to sell our first items. For our mart to be successful, we’ll have to calculate the correct price for shoppers, in addition to applying any specials or other charges.

This project focuses on creating a type-safe purchase flow for TypeMart visitors.

## Features

The following features have been implemented in the TypeMart purchase flow:

*   **Product Selection:** Users can select a product from our list of available items.
*   **Pre-Order Notifications:** If a product is on pre-order, the customer will receive a notification that they will be messaged when it ships.
*   **Dynamic Shipping Costs:** We offer free shipping on orders of $25 or more. For orders under $25, a flat shipping fee of $5 is applied.
*   **Tax Calculation:** Taxes are calculated based on the shipping address. A 10% tax is applied for orders shipped within New York, and a 5% tax is applied for all other locations.
*   **Receipt Generation:** A detailed receipt is generated for each order, including the product name, shipping address, price, taxes, shipping costs, and the total amount.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js and the TypeScript compiler (`tsc`) installed on your machine. You can install the TypeScript compiler globally by running the following command:

```
npm install -g typescript
```

### Installing

1.  Clone the repository:
    ```
    git clone https://github.com/your-username/TypeMart.git
    ```
2.  Navigate to the project directory:
    ```
    cd TypeMart
    ```

## Running the Tests

To test the purchase flow, you can follow these steps:

1.  Open the `index.ts` file.
2.  Modify the `productName` and `shippingAddress` variables to test different scenarios. For example:
    *   To test with a product that qualifies for free shipping, set `productName` to `'fanny pack'`.
    *   To test with an address in New York, set `shippingAddress` to `'123 Main St, New York, NY'`.
3.  Compile the TypeScript code to JavaScript by running the following command in your terminal:
    ```
    tsc
    ```
4.  Run the compiled JavaScript file using Node.js:
    ```
    node index.js
    ```
5.  Observe the console output to verify that the correct receipt information is displayed. For example, the total cost for a 'fanny pack' bought inside New York should be $33.00, while a 'tote bag' bought outside of New York should be $26.00.

## Built With

*   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
*   [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.

## Authors

*   **Your Name** - *Initial work* - [your-github-profile](https://github.com/your-username)

See also the list of [contributors](https://github.com/your-username/TypeMart/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

*   Hat tip to anyone whose code was used as inspiration.
*   The project structure and setup were inspired by various TypeScript starter projects.
*   The README was created based on best practices for open-source projects.