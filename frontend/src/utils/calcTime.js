exports.calcTime = (date) => {
  const today = new Date();
  const oldDate = new Date(date);

  let diffrence = today - oldDate;
  diffrence = diffrence / 1000 / 60 / 60 / 24;
  
  const day_s = Math.floor(diffrence);

  let hour_s = (diffrence % 1).toFixed(2) * 24;
  hour_s = Math.floor(hour_s);

  return { day_s, hour_s };
};
