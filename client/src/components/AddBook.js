import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql } from 'react-apollo'


const getAuthorsQuery = gql`
{
  authors{
    id
    name
    age
  }
}
`;

class AddBook extends Component{

  displayAuthors(){
    var data = this.props.data;
    if(!data.loading){
      //author data exist
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>{author.name}</option>
        )
      });
    }else{
      return (
        <option disabled>loading authors ...</option>
      )
    }
  }
  
  render(){

    console.log(this.props);

    return (
      <form>
        <div>
          {/* for title */}
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          {/* for genre */}
          <label>Genre</label>
          <input type="text" />
        </div>
        <div>
          {/* for name of author*/}
          <label>Title</label>
          <select>
            <option>select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <div>
          <button>
            +
          </button>
        </div>
      </form>
    )
  }
}

//on va binder notre requete avec notre component cad que la retour du query va etre injecter dans le props du component
export default graphql(getAuthorsQuery)(AddBook);
