import Título from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Título fontSize={16}>Sobre mim</Título>
    <Paragrafo>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ullam
      repellat, consequatur consectetur deleniti, inventore qui impedit quas
      soluta, suscipit veritatis voluptates commodi ipsum ducimus nulla sapiente
      dolor illum doloribus?
    </Paragrafo>
    <GithubSecao>
      <img
        alt="Coisa um"
        src="https://github-readme-stats-one.vercel.app/api?username=Glen109&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        alt="Coisa dois"
        src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=Glen109&layout=compact&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
