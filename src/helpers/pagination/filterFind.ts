import { ifilterAll } from "../../types/pagination/filterAll";

export const filterFind = ({
    page,
    limit,
    where,
    select,
    include,
    orderBy
}: any) => {

    const options: ifilterAll = {}

    if ((page || page === 0) && limit) {
        options.skip = (page - 1) * limit
    }

    if (limit) {
        options.take = parseInt(limit)
    }

    if (where) {
        options.where = where;
    }
    if (orderBy) {
        options.orderBy = orderBy;
    }
    if (select) {
        options.select = select;
    }
    if (include) {
        options.include = include;
    }

    return options
}