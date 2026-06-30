// src/pages/Busca.jsx
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import BuscaCep from '../components/BuscaCep'

function Busca() {
  const buscaCepRef = useRef()
  const navigate = useNavigate()

  // Recebe o endereço do componente filho e navega para outra tela
  function handleEnderecoEncontrado(endereco) {
    navigate('/resultado', { state: endereco })
  }

  return (
    <div className="page-shell">
      <div style={{ width: '100%', maxWidth: 520 }}>
        <div className="eyebrow">Correios · Busca de endereço</div>
        <h1
          className="display-title"
          style={{ fontSize: '2.1rem', margin: '10px 0 26px' }}
        >
          Para onde a <em>carta</em> deve ir?
        </h1>

        <div className="postal-card">
          <div className="stamp">
            <span className="stamp-value">CEP</span>
            <span className="stamp-label">Brasil</span>
          </div>
          <div className="postal-card-inner">
            <BuscaCep
              ref={buscaCepRef}
              onEnderecoEncontrado={handleEnderecoEncontrado}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Busca