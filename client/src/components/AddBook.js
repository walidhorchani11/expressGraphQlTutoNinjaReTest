import React, {Component} from 'react';
import {getAuthorsQuery, addBookMutation} from '../queries/queries';
import {graphql} from 'react-apollo';
import {flowRight as compose} from 'lodash';


class AddBook extends Component{

  constructor(props){
    super(props);
    this.state={
      title: '',
      authorId: '',
    }
  }

  displayAuthors(){
    
    //var data = this.props.data;
    //change ici a cause du nomage au niveau de export compose 
    var data = this.props.getAuthorsQuery;
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
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        title: this.state.title,
        authorId: this.state.authorId

      }
    }
    );
        console.log(this.state);
  }
  
  render(){

    console.log(this.props);

    return (
      <form id="add_book" onSubmit={this.handleSubmit}>
        <div>
          {/* for title */}
          <label>Title</label>
          <input type="text" onChange={(e) => this.setState({title: e.target.value})}/>
        </div>
        <div>
          {/* for genre */}
          <label>Genre</label>
          <input type="text" />
        </div>
        <div>
          {/* for name of author*/}
          <label>Author</label>
          <select onChange={(e) => this.setState({
            idAuthor: e.target.value
          })}>
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
export default compose(
  graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
  graphql(addBookMutation,{name:"addBookMutation"})
)(AddBook);
