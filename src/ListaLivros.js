import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './Gaveta'

function ListBooks(props){

   const { onShelfChange } = props;

   //Filtra os livros de acordo com a bancada que cada um pertence
   const currentlyReading = props.books.filter((book) => book.shelf === 'currentlyReading')
   const wantToRead =props.books.filter((book) => book.shelf === 'wantToRead')
   const read =props.books.filter((book) => book.shelf === 'read')
  
 
   return(
    <div className="list-books">
        <div className="list-books-content">
         <div>
          <BookShelf 
              bookshelfTitle='Lendo'd
              bookshelfBooks={currentlyReading}
              onShelfChange={onShelfChange}
              
          />
          <BookShelf
              bookshelfTitle='Quero Ler'
              bookshelfBooks={wantToRead}
              onShelfChange={onShelfChange}
          />
          <BookShelf 
              bookshelfTitle='Lidos' 
              bookshelfBooks={read}
              onShelfChange={onShelfChange}
          />
        </div>
      </div>
         <div className="open-search">
            <Link to="/search">Adicionar um livro</Link>
        </div>
    </div>
  )
}
export default ListBooks