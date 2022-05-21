import { IFilterQuery } from "../typeorm/FilterBuilder";

interface IParserOptions {
  disablePagination: boolean;
}

export const parseQueryFilters = (
  query: any,
  options?: IParserOptions
): IFilterQuery => {
  const default_per_page = options?.disablePagination ? undefined : 10;
  const default_page = options?.disablePagination ? undefined : 1;

  return {
    page: query.page ? Number(query.page) : default_page,
    per_page: query.per_page ? Number(query.per_page) : default_per_page,

    filterBy: query.filterBy
      ? (query.filterBy.split(",").map((item) => item.trim()) as string[])
      : [],
    filterType: query.filterType
      ? (query.filterType.split(",").map((item) => item.trim()) as string[])
      : [],
    filterValue: query.filterValue
      ? (query.filterValue.split(",").map((item) => item.trim()) as string[])
      : [],

    orderBy: query.orderBy as string | undefined,
    orderType: query.orderType as "ASC" | "DESC" | undefined,
  };
};