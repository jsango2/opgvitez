export const existingCategories = (s) => {
  let katArray = [];
  s.map((dat) => {
    katArray.push(dat.kategorija);
  });
  let unique = [...new Set(katArray)];
  return unique;
};
