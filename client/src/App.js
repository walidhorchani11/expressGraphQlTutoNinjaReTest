import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

//apollo client setup 
import ApolloClient from 'apollo-boost';

//pour que react understand appollo
import {ApolloProvider} from 'react-apollo';


const client = new ApolloClient({
  //to make request to this endpoint from this app
  uri: 'http://localhost:4000/graphql',
})

function App() {
  return (
    //il faut wrapper aour app par appollo provider et on lui passe our client deja cree
    <ApolloProvider client={client}>
      <div id="main">
        <h1>walid horchani tuto graphQL and Appollo</h1>
        <BookList />

        <hr />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
