import { ifilterAll } from "../../types/pagination/filterAll"

export const filterAll = ({
    page,
    limit,
    where,
    select,
    include,
    orderBy
}: any) => {
    const options: ifilterAll = {}

    if (Number(page)) options.page = page

    if (Number(limit)) options.limit = limit

    if (where) options.where = JSON.parse(where)

    if (select) options.select = JSON.parse(select)

    if (include) options.include = JSON.parse(include)

    if (orderBy) options.orderBy = JSON.parse(orderBy)

    return options;
}