import React from 'react'

class Book extends React.Component{
     //Método que troca a bancada dependendo da seleção do livro (lendo, quero ler, lido, cancelar)
     ShelfChanger = (e) => {
        const shelf = e.target.value;
        this.props.onShelfChange(this.props.book, shelf);
    };

    render() {

      const {book} = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks.thumbnail}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}/>
                    <div className="book-shelf-changer">
                        <select onChange={this.ShelfChanger} value={book.shelf}>
                            <option value="none" disabled>Mover para: </option>
                            <option value="currentlyReading">Lendo</option>
                            <option value="wantToRead">Quero Ler</option>
                            <option value="read">Lido</option>
                            <option value="none">Cancelar</option>
                        </select>
                     </div>
                 </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div> 
            </div>
   )
  }   
}

export default Book