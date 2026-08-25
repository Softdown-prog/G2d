const resources = [
  ['🌾', 'Alimento', '12.480', '+320/h'],
  ['🪵', 'Madeira', '8.240', '+180/h'],
  ['🪨', 'Pedra', '5.610', '+120/h'],
  ['⛓️', 'Ferro', '2.980', '+75/h'],
  ['🪙', 'Ouro', '14.200', '+90/h'],
];

const buildings = [
  ['city', 'Centro da Cidade', 'Nv. 4'],
  ['academy', 'Academia', 'Nv. 2'],
  ['barracks', 'Quartel', 'Nv. 3'],
  ['farm', 'Fazenda', 'Nv. 5'],
  ['mine', 'Mina', 'Nv. 3'],
  ['port', 'Porto', 'Nv. 2'],
];

export default function App() {
  return (
    <main className="game-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">G2</span>
          <div><strong>G2d</strong><small>Era das Civilizações</small></div>
        </div>

        <div className="resources" aria-label="Recursos da cidade">
          {resources.map(([icon, label, value, rate]) => (
            <div className="resource" key={label} title={label}>
              <span className="resource-icon">{icon}</span>
              <span><strong>{value}</strong><small>{rate}</small></span>
            </div>
          ))}
        </div>

        <button className="profile" type="button" aria-label="Perfil do jogador">
          <span className="avatar">👑</span>
          <span><strong>Governante</strong><small>Nível 7</small></span>
        </button>
      </header>

      <section className="city-stage" aria-label="Cidade">
        <div className="city-heading">
          <span>Capital</span>
          <h1>Aurora</h1>
          <small>População 1.284 · Felicidade 86%</small>
        </div>

        <div className="city-board" aria-label="Área reservada para a arte PNG isométrica da cidade">
          <div className="terrain-ring" />
          {buildings.map(([id, name, level], index) => (
            <button className={`building building-${index + 1}`} type="button" key={id}>
              <span className="building-shape">🏛️</span>
              <span className="building-label"><strong>{name}</strong><small>{level}</small></span>
            </button>
          ))}
          <p className="art-note">Área da futura cidade isométrica em PNG</p>
        </div>

        <div className="queue-card">
          <span className="queue-icon">🔨</span>
          <div><small>EM CONSTRUÇÃO</small><strong>Academia · Nível 3</strong></div>
          <time>01:42:18</time>
        </div>
      </section>

      <aside className="side-panel">
        <section className="panel-card">
          <header><span>📜</span><div><small>CONSELHO</small><strong>Resumo da cidade</strong></div></header>
          <dl className="city-stats">
            <div><dt>Habitantes</dt><dd>1.284 / 1.600</dd></div>
            <div><dt>Produção</dt><dd>Estável</dd></div>
            <div><dt>Defesa</dt><dd>640</dd></div>
            <div><dt>Pesquisa</dt><dd>Arquitetura II</dd></div>
          </dl>
        </section>

        <section className="panel-card event-card">
          <small>EVENTO DO MUNDO</small>
          <strong>🌤️ Colheita Próspera</strong>
          <p>Fazendas produzem +10% até o fim do ciclo.</p>
          <time>03h 18min restantes</time>
        </section>

        <section className="panel-card">
          <small>PRÓXIMOS PASSOS</small>
          <button className="action-row" type="button"><span>🏗️ Construções</span><b>›</b></button>
          <button className="action-row" type="button"><span>🔬 Pesquisas</span><b>›</b></button>
          <button className="action-row" type="button"><span>👥 População</span><b>›</b></button>
        </section>
      </aside>

      <nav className="game-nav" aria-label="Navegação principal">
        <button className="active" type="button"><span>🏰</span>Cidade</button>
        <button type="button"><span>🗺️</span>Mundo</button>
        <button type="button"><span>📚</span>Pesquisa</button>
        <button type="button"><span>⚔️</span>Exército</button>
        <button type="button"><span>📨</span>Relatórios</button>
      </nav>
    </main>
  );
}
