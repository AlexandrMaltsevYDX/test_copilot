const TypographyPage: React.FC = () => (
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

export default TypographyPage;
