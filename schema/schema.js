const graphql = require('graphql');

const {GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString, GraphQLNonNull} = graphql;

//create object Book for schema graphQl
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: ()=> ({
    id: {type: GraphQLID},
    title: { type: GraphQLNonNull(GraphQLString) }
  })
});

//create root query
const RootQuery = new GraphQLObjectType({
  name: 'rootQueryType',
  fields: {
    //each field is a root 

    //first root get by id fo book
    book : {
      //type de retour is BookType object
      type: BookType,

      //args  of root
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        //traitment of request query here
        let book1 = {
          id: 1,
          title: 'montage canada'
        };
        return book1;
      }
    }


  }
})

