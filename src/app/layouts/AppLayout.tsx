import { Link } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";

function AppLayout() {
	return (
		<div className="app">
			<header className="app-header">
				<h1>Дизайн система</h1>
				<nav style={{ marginTop: "1rem" }}>
					<Link to="/">Палитра</Link>
					<span style={{ margin: "0 1rem" }}>|</span>
					<Link to="/typography">Типографика</Link>
					<span style={{ margin: "0 1rem" }}>|</span>
					<Link to="/shadows">Тени</Link>
				</nav>
			</header>
			<main className="app-main">
				<Outlet />
			</main>
			<footer className="app-footer">
				<p>© 2025 Дизайн система</p>
			</footer>
		</div>
	);
}

export default AppLayout;
