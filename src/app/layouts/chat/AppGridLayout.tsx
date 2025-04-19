import { useState } from "react";
import Central from "./Central";
import LeftDeck from "./LeftDeck";
import MainBar from "./MainBar";
import RightDeck from "./RightDeck";

function AppGridLayout() {
  const [showLeftDeck, setShowLeftDeck] = useState(true);

  return (
    <div className={`app-grid-layout${!showLeftDeck ? " no-left-deck" : ""}`}>
      <div className="main-bar-container">
        <MainBar onActionClick={() => setShowLeftDeck((v) => !v)} />
      </div>
      {showLeftDeck && (
        <div className="left-deck-container">
          <LeftDeck />
        </div>
      )}
      <div className="central-container">
        <Central />
      </div>
      <div className="right-deck-container">
        <RightDeck />
      </div>
    </div>
  );
}

export default AppGridLayout;
