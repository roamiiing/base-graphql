import {PaginatedArgs} from './paginated-input';

// TODO: More descriptive return type with generics
/**
 * Places `$` before `skip` and `limit` keys. Is used to query in Feathers
 * @param args
 */
export default function paginatedArgsToQuery(args: PaginatedArgs): Record<string, unknown> {
  const convertMap: Record<string, string> = {
    skip: '$skip',
    limit: '$limit',
  };

  return Object.entries(args)
    .map(([key, value]): [string, unknown] =>
      key in convertMap ? [convertMap[key], value] : [key, value]
    )
    .reduce((obj, [key, value]) => ({...obj, [key]: value}), {});
}
