import Paragrafo from '../Paragrafo'
import { Titulo } from '../Titulo/styles'
import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto</Titulo>
      <Paragrafo tipo="secundario">Projeto feito com Html e outros.</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
