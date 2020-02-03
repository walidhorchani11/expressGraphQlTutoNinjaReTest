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

export {getBooksQuery, getAuthorsQuery, addBookMutation};
