export const transformDate = (date) => {
  let formattedDate = new Date(date);

  formattedDate = formattedDate.toLocaleString("en-GB", {
    day: "numeric",
    year: "numeric",
    month: "numeric",
  });

  return formattedDate;
};
