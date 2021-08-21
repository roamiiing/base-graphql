import {buildSchema as _buildSchema} from 'type-graphql';
import resolvers from './resolvers';

export default function buildSchema() {
  return _buildSchema({
    resolvers,
  });
}
