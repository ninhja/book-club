import React, { useRef, useEffect, useState } from 'react'
import { debounce } from 'lodash-es'
import { Container, H2, BookList } from './styles'
import Book from '../Book'

const BooksContainer = ({ books, pickBook, isPanelOpen, title }) => {
  const [scroll, setScroll] = useState(0) // stores the browser's Y-value scroll position as a pixel value
  const prevPanelState = useRef(false)

  // this useEffect hook is capturing the browser's Y-coordinate scroll position
  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY) // we set the scroll state variable to the current Y-value scroll position
    }, 100) // the debounce function delays setting the scroll until 100ms after the user stopped scrolling

    if (!isPanelOpen) {
      // we only listen for the user scrolling is the panel is not open
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      // clean-up function that removes any existing scroll event handlers before useEffect function reruns
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isPanelOpen])

  // this useEffect hook sets the browser's Y-coordinate scroll position. It only needs to do this when the DetailPanel opens/closes.
  // we need this to maintain the scroll position on the page.
  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      // if the DetailPanel was previously open, and the user just recently closed it,
      window.scroll(0, scroll) // then the window will get scrolled to the Y-coordinate saved in scroll state varioable
    }

    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll])

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <H2>{title}</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
