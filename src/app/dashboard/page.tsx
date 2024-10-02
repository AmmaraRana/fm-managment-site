"use client";
import CardPopularProducts from "./CardPopularProducts";
import SalesSummaryChart from "./SalesSummaryChart";
import CardPurchaseSummary from './CardPurchaseSummary';
import Card from "./Card"; // Ensure this import points to the correct Card component

const Dashboard = () => {
  return (
    <div>
      {/* Use a grid layout for the Card component */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows"> */}
        {/* Render the Card component here */}
        <Card />
      {/* </div> */}

      {/* The existing grid for other components */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
        <CardPopularProducts />
        <SalesSummaryChart />
        <CardPurchaseSummary />
      </div>
    </div>
  );
};

export default Dashboard;
