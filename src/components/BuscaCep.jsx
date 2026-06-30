import { forwardRef, useImperativeHandle, useState } from 'react'
import axios from 'axios'

const BuscaCep = forwardRef(({ onEnderecoEncontrado }, ref) => {
  const [cep, setCep] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  function formatarCep(valor) {
    const digitos = valor.replace(/\D/g, '').slice(0, 8)
    if (digitos.length > 5) return `${digitos.slice(0, 5)}-${digitos.slice(5)}`
    return digitos
  }

  async function buscarEndereco() {
    setErro('')
    const cepLimpo = cep.replace(/\D/g, '')

    if (cepLimpo.length !== 8) {
      setErro('CEP inválido — digite os 8 dígitos.')
      return
    }

    setCarregando(true)
    try {
      const resposta = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      if (resposta.data.erro) {
        setErro('Este CEP não foi encontrado nos Correios.')
        return
      }
      onEnderecoEncontrado(resposta.data)
    } catch (err) {
      setErro('Falha na entrega da busca. Tente novamente.')
    } finally {
      setCarregando(false)
    }
  }

  useImperativeHandle(ref, () => ({ buscarEndereco }))

  function handleKeyDown(e) {
    if (e.key === 'Enter') buscarEndereco()
  }

  return (
    <div>
      <label className="cep-label" htmlFor="cep-input">CEP de destino</label>
      <input
        id="cep-input"
        className="cep-input"
        type="text"
        inputMode="numeric"
        placeholder="00000-000"
        value={cep}
        onChange={(e) => setCep(formatarCep(e.target.value))}
        onKeyDown={handleKeyDown}
        style={{ width: '100%' }}
      />

      {erro && (
        <div className="postal-alert">
          <span>✕</span>
          <span>{erro}</span>
        </div>
      )}

      <div className="route-divider" />

      <button className="btn-postal" onClick={buscarEndereco} disabled={carregando}>
        {carregando ? 'Buscando…' : 'Buscar CEP'}
        {!carregando && <span className="icon">→</span>}
      </button>
    </div>
  )
})

export default BuscaCep