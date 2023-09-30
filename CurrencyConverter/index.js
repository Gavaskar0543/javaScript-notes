{
    fetch('https://api.frankfurter.app/currencies')
    .then(res => res.json())
    .then(res =>displayDropDown(res))
   
  function displayDropDown(res){
  let currencies =  Object.entries(res);
  for(let i = 0;i<currencies.length;i++){
    let opt = ` <option value="AUD">${currencies[i][0]}</option>
    `
    console.log(opt);
  }

  }
}