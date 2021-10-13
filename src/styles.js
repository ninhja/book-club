import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`
export const Pill = styled.div`
  background: #a7e1f8;
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
`

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    background-color: #000;
    content: '';
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

export const Button = styled.button`
  display: block;
  border: 2px solid #000;
  border-radius: 30px;
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;
  padding-top: ${({ $hasEmoji }) => ($hasEmoji ? '6px' : '8px')};
  margin-bottom: ${({ $inHeader }) => ($inHeader ? '0px' : '8px')};
  width: ${({ $inHeader }) => ($inHeader ? '140px' : 'auto')};

  @media (max-width: 1000px) {
    width: ${({ $inHeader }) => ($inHeader ? '110px' : 'auto')};
    font-size: 14px;
  }
`
