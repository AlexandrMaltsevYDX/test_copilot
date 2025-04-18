import { FaReact } from "react-icons/fa";

const MainBar: React.FC = () => (
  <nav className="main-bar">
    {/* Actions (icons) */}
    <div className="main-bar__actions">
      <div className="main-bar__action">
        <div className="action__icon_empty">
          <FaReact />
        </div>
        <div className="action__label">Chats</div>
        <div className="action__icon">⌘ 1</div>
      </div>
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


