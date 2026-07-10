export async function paginate(model: { findMany: (arg0: { skip: number; take: number; where: {}; orderBy: {}; }) => any; count: (arg0: { where: {}; }) => any; }, { page = 1, limit = 10, where = {}, orderBy = {}, include = undefined, select = undefined }: any) {
  const skip = (page - 1) * limit;

  const queryOptions: {
    skip: number;
    take: number;
    where: {};
    orderBy: {};
    select?: any;
    include?: any;
  } = {
    skip,
    take: limit,
    where,
    orderBy,
  };

  // prefer select over include when ambos são passados
  if (select) {
    queryOptions.select = select;
  } else if (include) {
    queryOptions.include = include;
  }

  // consulta paginada
  const [data, total] = await Promise.all([
    model.findMany(queryOptions),
    model.count({ where }),
  ]);

  return {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
    data,
  };
}

// module.exports = paginate;
