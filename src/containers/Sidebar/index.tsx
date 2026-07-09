import { Button } from 'style-components';
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';
import Título from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Título fontSize={20}>Gledson Rodrigues</Título>
      <Paragrafo tipo="secundario" fontSize={16}>Glen109</Paragrafo>
      <Descricao tipo='principal' fontSize={12}>Engenheiro Full-Stack Python</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
