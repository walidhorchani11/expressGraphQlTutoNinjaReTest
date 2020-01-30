import React, {Component} from 'react';

import {gql} from 'apollo-boost';

//construire notre requete comme dans graphiql
const getBooksQuery = gql`
  {
    books: {
      names
      id
    }
  }
`;


class BookList extends Component{

  render(){
    return (
      <div>
        <h2>Book List Component</h2>
        <ul id="book-list">
          <li>Book Name</li>
        </ul>

      </div>
    )
     
      
  }

}

export default BookList;
