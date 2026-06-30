import { useLocation, useNavigate } from 'react-router-dom'

function Resultado() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) {
    return (
      <div className="page-shell">
        <div style={{ width: '100%', maxWidth: 520, textAlign: 'center' }}>
          <p className="display-title" style={{ fontSize: '1.3rem' }}>
            Nenhum endereço em mãos.
          </p>
          <p style={{ color: 'var(--muted)', marginBottom: 22 }}>
            Volte e procure um CEP primeiro.
          </p>
          <button className="btn-postal" onClick={() => navigate('/')}>
            Voltar à busca
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <div style={{ width: '100%', maxWidth: 520 }}>
        <div className="eyebrow">Correios · Entrega confirmada</div>
        <h1 className="display-title" style={{ fontSize: '2.1rem', margin: '10px 0 26px' }}>
          Endereço <em>encontrado</em>
        </h1>

        <div className="postal-card">
          <div className="postal-card-inner">
            <div className="address-row">
              <span className="field-label">Rua</span>
              <span className="field-value">{state.logradouro || '—'}</span>
            </div>
            <div className="address-row">
              <span className="field-label">Bairro</span>
              <span className="field-value">{state.bairro || '—'}</span>
            </div>
            <div className="address-row">
              <span className="field-label">Cidade / UF</span>
              <span className="field-value">{state.localidade} / {state.uf}</span>
            </div>
            <div className="address-row">
              <span className="field-label">CEP</span>
              <span className="field-value" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.95rem' }}>
                {state.cep || '—'}
              </span>
            </div>

            <button className="btn-ghost" onClick={() => navigate('/')}>
              ← Buscar outro CEP
            </button>

            <div className="postmark">
              <span>Entregue<br />via ViaCEP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resultado