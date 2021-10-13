import styled from 'styled-components'
import { Pill } from '../../styles.js'
import { ReactComponent as MagnifyingIcon } from '../../assets/search.svg'

export const SearchContainer = styled(Pill)`
  width: ${({ $showOnDesktop }) => ($showOnDesktop ? '420px' : '20px')};
  transition: 300ms;

  @media (max-width: 1000px) {
    width: 50%;
    margin-right: 10px;
  }

  input,
  button {
    display: ${({ $showOnDesktop }) => ($showOnDesktop ? 'block' : 'none')};

    @media (max-width: 1000px) {
      display: block;
    }
  }
`

export const Input = styled.input`
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`

export const Icon = styled(MagnifyingIcon)`
  width: 30px;
  cursor: pointer;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1000px) {
    background: #ffbccc;
    border-top: 2px solid #000;
    height: 64px;
    width: 100%;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
    gap: unset;
  }
`

export const FaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;

  @media (max-width: 1000px) {
    position: relative;
    left: -15px;
  }
`

export const Counter = styled(Pill)`
  position: relative;
  right: -150px;
  top: -15px;
  padding: 4px;

  @media (max-width: 1000px) {
    right: -120px;
    padding: 2px;
  }
`
