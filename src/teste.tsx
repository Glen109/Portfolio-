import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal) ? 'green' : 'blue'};
  font-size: ${(props) => (props.fontSize || '16px')}
`;

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
`

function Teste() {
  return (
    <>
      <div>Olá</div>
      <Botao principal fontSize='18px'>Clique aqui</Botao>
      <Botao principal={false}>Clique Ali</Botao>
      <BotaoPerigo as="a"><span>Aqui Não...</span></BotaoPerigo>
    </>
  )
}

export default Teste
