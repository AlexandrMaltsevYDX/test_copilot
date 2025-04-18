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

function App() {
	return (
		<section className="color-palette">
			<h2>Цветовая палитра</h2>
			
			{/* Основные цвета действий */}
			<div className="palette-group">
				<h3>Основные цвета действий</h3>
				<div className="color-grid">
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--primary)' }} />
						<div>
							<span className="color-name">Primary (Blue)</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--secondary)' }}/>
						<div>
							<span className="color-name">Secondary (Blue Light)</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--gradient-red-from)' }}/>
						<div>
							<span className="color-name">Red</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--gradient-yellow-from)' }}/>
						<div>
							<span className="color-name">Yellow</span>
						</div>
					</div>
				</div>
			</div>

			{/* Фоновые цвета */}
			<div className="palette-group">
				<h3>Фоновые цвета</h3>
				<div className="color-grid">
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--bg-100)' }}/>
						<div>
							<span className="color-name">Background 100</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--bg-200)' }}/>
						<div>
							<span className="color-name">Background 200</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--bg-300)' }}/>
						<div>
							<span className="color-name">Background 300</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--bg-400)' }}/>
						<div>
							<span className="color-name">Background 400</span>
						</div>
					</div>
				</div>
			</div>
			
			{/* Семантические цвета */}
			<div className="palette-group">
				<h3>Семантические цвета</h3>
				<div className="color-grid">
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--text-success)' }}/>
						<div>
							<span className="color-name">Success</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--text-warning)' }}/>
						<div>
							<span className="color-name">Warning</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--text-error)' }}/>
						<div>
							<span className="color-name">Error</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ backgroundColor: 'var(--text-info)' }}/>
						<div>
							<span className="color-name">Info</span>
						</div>
					</div>
				</div>
			</div>
			
			{/* Градиенты */}
			<div className="palette-group">
				<h3>Градиенты</h3>
				<div className="color-grid">
					<div className="color-item">
						<div className="color-sample" style={{ 
							background: 'linear-gradient(to right, var(--gradient-blue-from), var(--gradient-blue-to))' 
						}}/>
						<div>
							<span className="color-name">Blue Gradient</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ 
							background: 'linear-gradient(to right, var(--gradient-red-from), var(--gradient-red-to))' 
						}}/>
						<div>
							<span className="color-name">Red Gradient</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ 
							background: 'linear-gradient(to right, var(--gradient-yellow-from), var(--gradient-yellow-to))' 
						}}/>
						<div>
							<span className="color-name">Yellow Gradient</span>
						</div>
					</div>
					<div className="color-item">
						<div className="color-sample" style={{ 
							background: 'linear-gradient(to right, var(--gradient-green-from), var(--gradient-green-to))'
						}}/>
						<div>
							<span className="color-name">Green Gradient</span>
						</div>
					</div>
				</div>
			</div>

			<div className="theme-toggle">
				<button type="button" onClick={() => document.body.classList.toggle('dark-theme')}>
					{document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Темная тема'}
				</button>
			</div>
		</section>
	);
}

function FunnyPage() {
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			height: "70vh",
			fontSize: "2rem",
		}}
		>
			<span role="img" aria-label="funny">😺</span>
			<p style={{ marginTop: "1.5rem", fontWeight: 600 }}>
				Ой! Здесь пока только котик и смешной плейсхолдер 😹
			</p>
		</div>
	);
}

function TypographyPage() {
	return (
		<section className="typography-demo">
			<h1>Заголовок H1 — 40px, Bold</h1>
			<h2>Заголовок H2 — 32px, Bold</h2>
			<h3>Заголовок H3 — 24px, Semibold</h3>
			<h4>Заголовок H4 — 20px, Semibold</h4>
			<h5>Заголовок H5 — 18px, Medium</h5>
			<h6>Заголовок H6 — 16px, Medium</h6>
			<p>Обычный текст (Body) — 16px, Regular. Пример параграфа для проверки основного текста.</p>
			<p className="caption">Caption — 14px, Regular. Подпись или дополнительная информация.</p>
			<p className="small">Small — 12px, Regular. Мелкий текст для второстепенных деталей.</p>
			<p>Моноширинный пример: <span className="mono">const x = 42;</span></p>
			<div className="theme-toggle">
				<button type="button" onClick={() => document.body.classList.toggle('dark-theme')}>
					{document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Темная тема'}
				</button>
			</div>
		</section>
	);
}

function ShadowsPage() {
	return (
		<section className="shadows-demo">
			<h2>Тени (Shadows) — UI Kit</h2>
			<div className="shadows-grid">
				<div className="shadow-block" style={{ boxShadow: 'var(--shadow-xs)' }}>
					<span className="shadow-label">shadow-xs</span>
				</div>
				<div className="shadow-block" style={{ boxShadow: 'var(--shadow-sm)' }}>
					<span className="shadow-label">shadow-sm</span>
				</div>
				<div className="shadow-block" style={{ boxShadow: 'var(--shadow-md)' }}>
					<span className="shadow-label">shadow-md</span>
				</div>
				<div className="shadow-block" style={{ boxShadow: 'var(--shadow-lg)' }}>
					<span className="shadow-label">shadow-lg</span>
				</div>
				<div className="shadow-block" style={{ boxShadow: 'var(--shadow-xl)' }}>
					<span className="shadow-label">shadow-xl</span>
				</div>
			</div>
			<div className="theme-toggle">
				<button type="button" onClick={() => document.body.classList.toggle('dark-theme')}>
					{document.body.classList.contains('dark-theme') ? 'Светлая тема' : 'Темная тема'}
				</button>
			</div>
		</section>
	);
}

export default App;
export { FunnyPage, AppLayout, TypographyPage, ShadowsPage };
