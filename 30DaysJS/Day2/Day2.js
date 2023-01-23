/*
DataTypes - Primitive & Non-Primitive

Primitive -> Immutable
Non-Primitive -> Mutable
*/

// Non - Primitive
// Arrays -> Zero Indexed~

let arr = [1,2,3]
// change val
arr[0] = 10
console.log(arr)

// Numbers - Math
const pi = Math.PI
console.log(pi)
// MATH.
// round -> nearest num
// floor / ceil -> nearest lower / upper number
// min / max
// Math.random(args) -> Random num between 0 - 0.99. Multiply to get higher nums
// abs -> absolute val
// sqrt / pow / E / log / sin / cos

// Strings -> Zero Indexed
/*
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")

.length -> size
toUpperCase()
toLowerCase()
substr(start, num of char)
substring(start, end (not including last char))
split((for array of single str)) / split(' ' (for arrays of words))
trim(' ') -> remove spaces from start & end of string
includes -> checks if string includes a substr
replace(oldsubstr, newsubstr)
charAt -> returns character at given position
charCodeAt -> returns ASCII OF CHAR
indexOf -> takes a substr and returns its first index, -1 if doesn't exist
lastIndexOf -> same as above but for last
concat -> joins strs
repeat -> repeats given str n times
*/

let fst = 'Axel', scn = ' Amoz'
let concat = fst + scn
console.log(concat)
// ` -> backtick
console.log(`Hi, Im ${fst}.`)
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)