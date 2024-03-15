export const getTotalPage = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
}

export const limitPage = (totalPage) => {
  let tally =[];
  for (let i = 0; i < totalPage; i++){
   tally.push(i+1)
  }
  return tally;
}

