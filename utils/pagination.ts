import express from 'express';

export const paginateData = (req: express.Request, data: any[]) => {
  const page = +req.query.page;
  const limit = +req.query.limit;

  

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const pages = data.length / limit;

  const resultData = data.slice(startIndex, endIndex);
  return {
    docs: resultData,
    total: data.length,
    limit: limit,
    page: page,
    pages: pages,
  };
};
