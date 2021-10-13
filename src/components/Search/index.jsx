import React, { useRef, useState } from 'react'
import { SearchContainer, Input, Icon, Wrapper, FaveButtonContainer, Counter } from './styles'
import { Close, Button } from '../../styles.js'

const FaveButton = ({ showFaves, toggleShowFaves, faveBooksLength }) => {
  return (
    <FaveButtonContainer>
      <Counter>{faveBooksLength}</Counter>
      <Button onClick={toggleShowFaves} $hasEmoji={false} $inHeader={true}>
        {showFaves ? 'Hide faves' : 'Show faves'}
      </Button>
    </FaveButtonContainer>
  )
}

const Search = ({ filterBooks, showFaves, toggleShowFaves, faveBooksLength }) => {
  const inputEl = useRef(null)
  const [showOnDesktop, setShowOnDesktop] = useState(false)

  const handleChange = (event) => {
    console.log(event.target.value)
    filterBooks(event.target.value)
  }

  const clearSearch = () => {
    filterBooks('')
    inputEl.current.value = ''
    setShowOnDesktop(false)
  }

  const showSearch = () => {
    setShowOnDesktop(true)
  }

  return (
    <Wrapper>
      <FaveButton
        showFaves={showFaves}
        toggleShowFaves={toggleShowFaves}
        faveBooksLength={faveBooksLength}
      />
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input ref={inputEl} type="text" name="search" autoComplete="off" onChange={handleChange} />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  )
}

export default Search
