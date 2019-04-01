import React from 'react'

class Book extends React.Component{
     //Método que troca a bancada dependendo da seleção do livro (lendo, quero ler, lido, nenhuma)
     ShelfChanger = (e) => {
        const shelf = e.target.value;
        this.props.onShelfChange(this.props.book, shelf);
    };

    render() {

      const {book} = this.props;

      //Se não tiver cover, cobre com um cover padrão do google
      let cover = book.imageLinks;
      if (cover) {
        cover = book.imageLinks.thumbnail
      } else {
        cover = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
      }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${cover}")`,
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
                            <option value="none">Nenhuma</option>
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