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


//construire notre requete comme dans graphiql
const getBooksQuery = gql`
  {
    books{
      title
      id
    }
  }
`;

export {getBooksQuery, getAuthorsQuery};
