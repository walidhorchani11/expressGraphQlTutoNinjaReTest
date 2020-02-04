import {gql} from 'apollo-boost';

const getAuthorsQuery = gql`
{
  authors{
    id
    name
    age
  }
}
`;

const addBookMutation = gql`
mutation($title: String!, $authorId: ID!){
  addBook(title: $title, authorId: $authorId){
    title
    id
  }
}
`;


//construire notre requete comme dans graphiql
const getBooksQuery = gql`
  {
    books{
      title
      id 
    }
  }
`;


const getBookById = gql`
  
    query($id:ID){
      book(id:$id){
        title
        id
        author{
          id
          name
          books{
            title
            id
          }
        }
      }
    }
  
`;

export {getBooksQuery, getAuthorsQuery, addBookMutation, getBookById};
