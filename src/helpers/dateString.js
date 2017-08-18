const dateString = date => {
  let str = date.toDateString().split("/")[0];
  let parts = str.split(" ");
  let d = parts[2];
  let m = parts[1];

  let h = date.getHours();
  let mins = date.getMinutes();

  return d + " " + m + ", " + h + ":" + mins;
};

export default dateString;
