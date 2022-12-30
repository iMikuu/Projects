function convertToRoman(num) {
  let temp = [];
  let newNumber = num;
 
 function recursion(newNumber) {
  if(newNumber >= 1000) {
    temp.push("M");
    recursion(newNumber - 1000);
  } else if(newNumber >= 900 && newNumber < 1000) {
    temp.push("CM");
    recursion(newNumber - 900);
  } else if(newNumber >= 500 && newNumber < 900) {
    temp.push("D");
    recursion(newNumber - 500);
  } else if(newNumber >= 400 && newNumber < 500) {
    temp.push("CD");
    recursion(newNumber - 400);
  } else if(newNumber >= 100 && newNumber < 400) {
    temp.push("C");
    recursion(newNumber - 100);
  } else if(newNumber >= 90 && newNumber < 100) {
    temp.push("XC");
    recursion(newNumber - 90);
  } else if(newNumber >= 50 && newNumber < 90) {
    temp.push("L");
    recursion(newNumber - 50);
  } else if(newNumber >= 40 && newNumber < 50) {
    temp.push("XL");
    recursion(newNumber - 40);
  } else if(newNumber >= 10 && newNumber < 40) {
    temp.push("X");
    recursion(newNumber - 10);
  } else if(newNumber == 9) {
    temp.push("IX");
    recursion(newNumber - 9);
  } else if(newNumber >= 5 && newNumber < 9) {
    temp.push("V");
    recursion(newNumber - 5);
  } else if(newNumber == 4) {
    temp.push("IV");
    recursion(newNumber - 4);
  } else if(newNumber < 4 && newNumber > 0) {
    temp.push("I");
    recursion(newNumber - 1);
  } else {
     return temp;
  }
 }
 
 recursion(newNumber);

  romanNumber = temp.join('');

  alert('Your number converted into roman is: ' + romanNumber);

  document.getElementById('number').value = '';
  return romanNumber;
}

function abbrevName(name) {
  let array = name.split(" ");
  let initials = "";
  for (let i = 0; i < array.length; i++) {
    let upperCaseInitial = array[i][0].toUpperCase();
      if (i === 0) {
        initials = upperCaseInitial;
      } else {
        initials = initials + "." + upperCaseInitial;
      }
  }

  alert('Your initials are: ' + initials);
  
  document.getElementById('name').value = '';
  return initials;
}
