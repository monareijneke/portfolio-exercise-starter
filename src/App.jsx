import { useState } from "react";
import "./App.css";
import { portfolioItems } from "./utils/data";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";

export const App = () => {
  console.log(portfolioItems[0].title); // Check console to see how portfolioItems look like. You can delete this after.
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div className="App">
      {selectedItem ? (
        <PortfolioItemPage item={selectedItem} />
      ) : (
        <PortfolioPage />
      )}
    </div>
  );
};
