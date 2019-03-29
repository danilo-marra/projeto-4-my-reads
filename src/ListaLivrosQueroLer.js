import React from 'react'

function ListaLivrosQueroLer (props) {
    return (
        <div className="bookshelf">
                      <h2 className="bookshelf-title">Livros que quero ler</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        {props.livrosQueroLer.map((livro) =>
                          <li key={livro.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${livro.coverURL})` }}></div>
                                <div className="book-shelf-changer">
                                  <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">
                                    <span>{livro.title}</span> 
                              </div>
                              <div className="book-authors">
                                    <span>{livro.author}</span>
                              </div>
                            </div>
                          </li>
                           )}
                        </ol>
                    </div>
                    </div>

    )
}

export default ListaLivrosQueroLer