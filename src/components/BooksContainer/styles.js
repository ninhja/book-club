import styled from 'styled-components'
import { ReactComponent as SadFaceIcon } from '../../assets/sad-face.svg'

export const Container = styled.div`
  background-color: #a7e1f8;
  padding: 160px 40px;
  overflow: ${({ $isPanelOpen }) => ($isPanelOpen ? 'hidden' : 'scroll')};
  position: ${({ $isPanelOpen }) => ($isPanelOpen ? 'fixed' : 'unset')};
  top: ${({ $isPanelOpen, $top }) => ($isPanelOpen ? `-${$top}px` : 0)};

  @media (max-width: 800px) {
    padding: 114px 20px;
  }
`

export const H2 = styled.h2`
  font-size: 42px;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat() (2, 1fr);
    grid-column-gap: 20px;
  }
`

export const NoBooksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  height: 50vh;
  flex-direction: column;
`

export const H3 = styled.h3`
  font-size: 34px;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
`

export const H4 = styled.h4`
  font-size: 24px;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`

export const SadFace = styled(SadFaceIcon)`
  margin: 8px 0;
`
