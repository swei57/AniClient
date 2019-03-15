const {buildSchema} = require('graphql');

const schema = buildSchema(`
type Query {
    allUsers: [User!]
}

type User {
    id: Int!
    username: String!
    password: String!
}`);

module.exports.schema = schema;