import React, { useState, useEffect } from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'
import { GlobalStyle } from './styles'
import { Transition } from 'react-transition-group'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  // const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        console.log(`here's what our fetch request returns`, response)

        const books = await response.json()
        console.log(`our json-ified response: `, books)
        setBooks(books.map((book) => ({ ...book, isFaved: false })))
      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    setBooks(
      books.map((book) => {
        const isFiltered = !searchTerm
          ? false
          : stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
          ? false
          : true
        return { ...book, isFiltered: isFiltered }
      })
    )
  }

  const toggleFave = (bookId) => {
    setBooks((books) => {
      const updatedBooks = books.map((book) =>
        book.id === bookId ? { ...book, isFaved: !book.isFaved } : book
      )
    })
  }

  const hasFiltered = books.some((book) => book.isFiltered)
  const displayBooks = hasFiltered ? books.filter((book) => !book.isFiltered) : books

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer
        books={displayBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : 'All books'}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => (
          <DetailPanel
            book={selectedBook}
            closePanel={closePanel}
            state={state}
            toggleFave={toggleFave}
          />
        )}
      </Transition>
    </>
  )
}

export default App
