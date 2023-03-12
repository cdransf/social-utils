export const formatDate = (date: string) => {
  const d = new Date(date);
  const year = d.getFullYear();
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [month, day, year].join("-");
};

export const toPascalCase = (str: string) =>
  str
    .replace(
      /\w\S*/g,
      (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
    )
    .replace(/\s/g, "");
