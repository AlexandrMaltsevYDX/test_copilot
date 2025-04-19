import { FaReact } from "react-icons/fa";

interface MainBarProps {
  onActionClick?: () => void;
}

const MainBar: React.FC<MainBarProps> = ({ onActionClick }) => (
  <nav className="main-bar">
    {/* Actions (icons) */}
    <div className="main-bar__actions">
      <button
        className="main-bar__action"
        onClick={onActionClick}
        type="button"
      >
        <div className="action__icon_empty">
          <FaReact />
        </div>
        <div className="action__label">Chats</div>
        <div className="action__icon">⌘ 1</div>
      </button>
      <div className="main-bar__action">
        <div className="action__icon_empty">
          <FaReact />
        </div>
        <div className="action__label">Library</div>
        <div className="action__icon">⌘ 2</div>
      </div>
      <div className="main-bar__action">
        <div className="action__icon_empty">
          <FaReact />
        </div>
        <div className="action__label">Apps</div>
        <div className="action__icon">⌘ 3</div>
      </div>
    </div>
  </nav>
);

export default MainBar;


