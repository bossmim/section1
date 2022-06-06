async function thisIsSyncFunction() {
  let result = 0;

  await fetch("https://codequiz.azurewebsites.net/data")
    .then((res) => res.json())
    .then((response) => {
      result = response.data;
    });
  calculation(result);
  return result;
}

function calculation(d) {
  const number1 = d;
  console.log("number1", number1);
  const calculation = number1 * 10;
  console.log("calculation", calculation);
}

thisIsSyncFunction();
