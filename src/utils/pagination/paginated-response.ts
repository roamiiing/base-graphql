import {GqlClass, GqlField, GqlInt, GqlObject} from '@named/type-graphql';

export default function PaginatedResponse<Item>(ItemClass: GqlClass<Item>) {
  @GqlObject({isAbstract: true})
  abstract class _PaginatedResponse {
    @GqlField(() => [ItemClass], {
      description: 'Data',
    })
    data!: Item[];

    @GqlField(() => GqlInt, {
      description: 'Total numbers of records',
    })
    total!: number;

    @GqlField(() => GqlInt, {
      description: 'Maximum number of items per page',
    })
    limit!: number;

    @GqlField(() => GqlInt, {
      description: 'Number of skipped items (offset)',
    })
    skip!: number;
  }

  return _PaginatedResponse;
}
