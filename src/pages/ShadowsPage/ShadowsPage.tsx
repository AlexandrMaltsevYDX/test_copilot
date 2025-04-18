const ShadowsPage: React.FC = () => (
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

export default ShadowsPage;
