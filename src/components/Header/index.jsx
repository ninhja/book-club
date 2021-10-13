import React from 'react'
import { Logo, HeaderContainer, Container } from './styles'

const Header = ({ children }) => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Book Club logo" />
    </a>
    <Container>{children}</Container>
  </HeaderContainer>
)

export default Header
