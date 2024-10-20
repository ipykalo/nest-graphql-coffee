import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const defenitionsFactory = new GraphQLDefinitionsFactory();

defenitionsFactory.generate({
  typePaths: ['./**/*.graphql'],
  path: join(process.cwd(), 'src/schema.ts'),
  outputAs: 'class',
  watch: true,
  skipResolverArgs: true,
  defaultTypeMapping: {
    ID: 'number',
  },
});
