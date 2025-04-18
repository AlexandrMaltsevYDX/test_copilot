const PalettePage: React.FC = () => (
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

export default PalettePage;
