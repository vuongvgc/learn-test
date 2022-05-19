const findNames = (term, db) => {
  const matches = db.filter((names) => {
    return names.includes(term);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};
const functionNotTest = (term) => {
  return `Hello ${term}`;
};

module.exports = findNames;
