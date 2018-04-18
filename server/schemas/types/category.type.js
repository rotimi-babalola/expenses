import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'CategoryType',
  values: {
    FOOD: { value: 'FOOD' },
    TRANSPORT: { value: 'TRANSPORT' },
    ENTERTAINMENT: { value: 'ENTERTAINMENT' },
    TRAVEL: { value: 'TRAVEL' },
    HEALTHCARE: { value: 'HEALTHCARE' },
    UTILITIES: { value: 'UTILITIES' },
    MISCELLANEOUS: { value: 'MISCELLANEOUS' },
  },
});
