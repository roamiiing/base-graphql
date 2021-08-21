import {GqlField, GqlInput, GqlInt, GqlObject} from '@named/type-graphql';
import {PaginationOptions} from '@feathersjs/feathers';
import {IsPositive, Max} from 'class-validator';

export interface PaginatedArgs {
  limit?: number;
  skip?: number;
}

interface PaginatedInputOptions {
  pagination: Omit<PaginationOptions, 'default'>;
}

// Maybe worth getting rid of this because of type duplication in schema
export default function PaginatedInput(
  options: PaginatedInputOptions = {
    pagination: {
      max: 25,
    },
  }
) {
  @GqlInput()
  @GqlObject({isAbstract: true})
  abstract class _PaginatedInput implements PaginatedArgs {
    @GqlField(() => GqlInt, {
      description: 'Maximum number of items per page',
      nullable: true,
    })
    @IsPositive()
    @Max(options.pagination.max)
    limit?: number;

    @GqlField(() => GqlInt, {
      description: 'Number of skipped items (offset)',
      nullable: true,
    })
    @IsPositive()
    skip?: number;
  }

  return _PaginatedInput;
}
