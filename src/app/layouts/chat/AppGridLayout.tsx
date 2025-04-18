import Central from "./Central";
import LeftDeck from "./LeftDeck";
import MainBar from "./MainBar";
import RightDeck from "./RightDeck";

function AppGridLayout() {
	return (
		<div className="app-grid-layout">
			<div className="main-bar-container">
				<MainBar />
			</div>
			<div className="left-deck-container">
				<LeftDeck />
			</div>
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
