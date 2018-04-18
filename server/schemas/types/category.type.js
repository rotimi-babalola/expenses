import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'CategoryType',
  values: {
    FOOD: { value: 'food' },
    ENTERTAINMENT: { value: 'entertainment' },
    TRAVEL: { value: 'travel' },
    HEALTHCARE: { value: 'healthcare' },
    UTILITIES: { value: 'utilities' },
    MISCELLANEOUS: { value: 'miscellaneous' },
  },
});
