function convertToRoman(num) {
 //Create an array of roman numbers where every element is an array of the possible combinations of characters in a decimal place
 const romanArr=[["M", "MM", "MMM"],
                 ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
                 ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                 ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]];
 //Create an array from the input number with each element as a decimal place
 const arabicArr=num.split("");
 //Walk through the input array and convert each element into roman numerals
 //Give back the converted elements as a string
 return num;
}
