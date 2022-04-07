let n = 10;
for (let i = 0; i <10 ; i++) {
  // printing spaces
  for (let j = n-i-1; j >= 0 ;j--) {
    document.write(" ");
  }
  // printing star
  for (let k = 1; k <= i+1; k++) {
    document.write(" *");
  }
  document.write("<br>");
}
