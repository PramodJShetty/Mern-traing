function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }

console.log(remove_character("javagal",0));
console.log(remove_character("arasikere",3));
console.log(remove_character("hassann",5));