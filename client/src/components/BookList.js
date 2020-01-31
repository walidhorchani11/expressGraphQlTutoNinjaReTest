import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries/queries';


class BookList extends Component {

  displayBooks (){
    var data = this.props.data;
    if(!data.loading){
      //si loading est termine alors on affiche
      return data.books.map(book => {
        return (
          <li key={book.id}>
            {book.title}
          </li>
          )
        
      })
    }else{
      return (<div>
        data loading ...
      </div>)
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Book List Component</h2>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>

      </div>
    )
  }

}

export default graphql(getBooksQuery)(BookList);
