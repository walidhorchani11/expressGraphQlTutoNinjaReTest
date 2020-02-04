import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries/queries';
import Book from './Book';


class BookList extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected: null,
    }
  }

  displayBooks (){
    var data = this.props.data;
    if(!data.loading){
      //si loading est termine alors on affiche
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={(e)=>{this.setState({selected: book.id})}}>{book.title}</li>
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
        <hr />
        <Book selected = {this.state.selected}/>

      </div>
    )
  }

}

export default graphql(getBooksQuery)(BookList);
