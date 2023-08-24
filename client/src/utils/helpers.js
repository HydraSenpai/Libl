const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'audience') {
    unique.unshift('all');
    return [...new Set(unique)];
  }
  return ['all', ...new Set(unique)];
};

export { getUniqueValues };
