
const graphql = require('graphql');

const _ = require('lodash');

const {GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLList} = graphql;


//dummy data 

var authors = [
  {
    id: '1',
    name: "walid",
    age: 15
  },
  {
    id: '2',
    name: "Khawla",
    age: 22
  }
];

var books = [
  {
    id: '1',
    title: "hallowyyyn",
    authorId: '1'
  },
  {
    id: '2',
    title:"ciptadine",
    authorId: '2'
  },
  {
    id: '3',
    title: "kiratine",
    authorId: '1'
  }
]



//create object Book for schema graphQl
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: ()=> ({
    id: {type: GraphQLID},
    title: { type: GraphQLNonNull(GraphQLString) },
    author: {
      type: AuthorType,
      resolve(parent, args){
        
        return _.find(authors, {id : parent.authorId})
      }
    }
  })
});


//create object Author
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLNonNull(GraphQLString)},
    age: {type: GraphQLInt},
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){

        return _.filter(books, {authorId: parent.id})
      }
    }
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
        console.log(args);
        let res = _.find(books, {id:args.id});
        console.log(res);
        return res;
      }
    },



    //getAll books
    books : {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return books;
      }
    },

    //2eme root graphQL query for Author
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){

        return _.find(authors, {id: args.id}) 
      }
    },


    //getAll Authors
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args){

        return authors;
      }
    }

  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})

