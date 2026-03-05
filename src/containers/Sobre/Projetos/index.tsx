import Projeto from '../../../components/Projeto'
import Título from '../../../components/Titulo'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Título fontSize={16}>Projetos</Título>
    <Lista>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
    </Lista>
  </section>
)

export default Projetos
