import { GraphQLServer } from 'graphql-yoga'
import resolvers from './graphql/resolvers'

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers
})

server.start(() => console.log(`Graphql Server Running on localhost:${process.env.PORT || 4000}`))
