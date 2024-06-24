# Order Dashboard for BLACK PRODUCTS Inc.

## Task Description

BLACK PRODUCTS Inc. needs an "order dashboard" to monitor their order targets versus actual orders. The dashboard will fetch data from a publicly-available Google Spreadsheet using the Google Sheets API and present it in a user-friendly and visually appealing way. The key requirements for the dashboard are:

- Display the sum of all orders for a given month.
- Filter orders by month.
- Show a progress bar indicating the total order volume of the selected month (X%) vs. the order target (100%).
- Display the target value.
- List the 5 most recent orders in the selected month, including order number, order date, product name, and order volume.
- List the top 5 products for the time period, including the product name, the sum of all orders for that product, and a progress bar showing the percentage that the product had on the total order volume.

## What Did I Do

To fulfill the requirements, I developed a React application that connects to the Google Sheets API to fetch and display order data in a structured and interactive way. Here’s a summary of the steps I took:

1. **Set up the project**: Initialized a new Next project using Create Next App for simplicity and ease of setup.
2. **Google Sheets API Integration**: Implemented data fetching from the Google Sheets API to retrieve order data.
3. **State Management**: Utilized state management using Reduxt toolkit to handle the data and UI updates efficiently.
4. **Filtering and Sorting**: Added functionality to filter orders by month and sort them to display the most recent orders.
5. **Progress Bars**: Created progress bars to show the total order volume vs. target and the contribution of top products to the total order volume.

## Technologies I've Used

- **Next**: For building the user interface and managing component state.
- **Google Sheets API**: To fetch and handle order data.
- **Axios**: For making HTTP requests to the Google Sheets API.
- **Shadcn**: For responsive and modern UI components.
- **Tailwind css**
- **Redux toolkit**: For controlling the chosen month and date.

## How to Run the Project Locally

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/rgnatenko/products-dashboard.git
    cd products-dashboard
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Create a `.env` file** in the root directory and add your Google Sheets API key:
    ```sh
    GOOGLE_SERVICE_ACCOUNT_EMAIL=your_google_service_acount_email
    GOOGLE_PRIVATE_KEY=your_google_private_key
    GOOGLE_SHEET_ID=1La-EJVOrNt3AwWHYvhuCQ5SRtFE9h_kYjgx0dau1HN4
    ```

4. **Start the development server**:
    ```sh
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000` to see the dashboard in action.

