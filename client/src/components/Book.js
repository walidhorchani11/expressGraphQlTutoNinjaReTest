import React from 'react';
import {getBookById} from '../queries/queries';
import {graphql} from 'react-apollo';

const displayBookDetails = (book = null) => {
  if(book != null){
    return (
      <div>
        <h1>detail book </h1>
        <h2>name : {book.title}</h2>
        <h3>with id : {book.id}</h3>
        <h3>By author : {book.author.name}</h3>
      </div>
    )
  }else {
    return (
      <div>
        No Book Selected !!
      </div>
    )
  }
}
const Book =(props)=> {
  const {book} = props.data;
  console.log("TCL: Book -> book", book)
  return (
      displayBookDetails(book)
  )
}

export default graphql(getBookById,{
  options: (props) => {
    return {variables: {
      id: props.selected
    }
  }
  }
}
  )(Book);
