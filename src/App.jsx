import { useRef, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import BuscaCep from "./components/BuscaCep";
import "./App.css";

function App() {

    const buscaCepRef = useRef();

    const [endereco, setEndereco] = useState(null);

    function handleEnderecoEncontrado(dados){
        setEndereco(dados);
    }

    return (

        <Container className="pagina">

            <Card className="cardPrincipal">

                <h1>🔍 Busca de CEP</h1>

                <p>
                    Consulte qualquer CEP do Brasil utilizando a API ViaCEP.
                </p>

                <BuscaCep
                    ref={buscaCepRef}
                    onEnderecoEncontrado={handleEnderecoEncontrado}
                />

                <Button
                    className="botao"
                    onClick={() => buscaCepRef.current.buscarEndereco()}
                >
                    🔍 Buscar Endereço
                </Button>

            </Card>

            {endereco && (

                <Card className="resultado">

                    <h3>📍 Endereço Encontrado</h3>

                    <hr />

                    <p><strong>Rua:</strong> {endereco.logradouro}</p>

                    <p><strong>Bairro:</strong> {endereco.bairro}</p>

                    <p><strong>Cidade:</strong> {endereco.localidade}</p>

                    <p><strong>Estado:</strong> {endereco.uf}</p>

                    <p><strong>CEP:</strong> {endereco.cep}</p>

                </Card>

            )}

        </Container>

    );

}

export default App;