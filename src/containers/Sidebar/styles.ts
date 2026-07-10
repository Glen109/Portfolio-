import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  @media (max-width: 768px) {
    border-radius: 16px;
    padding: 8px;
    font-size: 15px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 40px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
