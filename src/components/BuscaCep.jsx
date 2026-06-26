import { forwardRef, useImperativeHandle, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const BuscaCep = forwardRef(({ onEnderecoEncontrado }, ref) => {

    const [cep, setCep] = useState("");

    useImperativeHandle(ref, () => ({
        buscarEndereco
    }));

    async function buscarEndereco(){

        if(cep.length !== 8){
            alert("Digite um CEP válido.");
            return;
        }

        try{

            const resposta = await axios.get(
                `https://viacep.com.br/ws/${cep}/json/`
            );

            onEnderecoEncontrado(resposta.data);

        }catch{

            alert("Erro ao consultar CEP.");

        }

    }

    return(

        <Form>

            <Form.Group>

                <Form.Label>CEP</Form.Label>

                <Form.Control

                    type="text"
                    maxLength={8}
                    placeholder="Digite apenas números"

                    value={cep}

                    onChange={(e)=>
                        setCep(e.target.value.replace(/\D/g,""))
                    }

                />

            </Form.Group>

        </Form>

    );

});

export default BuscaCep;