
const graphql = require('graphql');

const _ = require('lodash');

const {GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLList} = graphql;

const Author = require('../models/author');
const Book = require('../models/book');

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
        
        return Author.findById(parent.authorId)
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

        return Book.find({authorId: parent.id})
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

        return Book.findById(args.id)
      }
    },



    //getAll books
    books : {
      type: new GraphQLList(BookType),
      resolve(parent, args){

        return Book.find();
      }
    },

    //2eme root graphQL query for Author
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){

        return Author.findById(args.id)
      }
    },


    //getAll Authors
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args){

        return Author.find();
      }
    }

  }
});



//create mutation 
const RootMutation = new GraphQLObjectType({

  name: 'rootMutationType',
  fields: {
    //add author
    addAuthor: {
      type: AuthorType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString) },
        age: {type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args){
        let author = new Author({
          name : args.name,
          age : args.age,
        });
        console.log('author added success');
    
        return author.save();
      }
    },


    //add book 
    addBook : {
      type: BookType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        authorId: {type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args){
        let book = new Book({
          title: args.title,
          authorId: args.authorId,
        });
        console.log('book added success');

        return book.save();
      }

    }
  }


});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
})

