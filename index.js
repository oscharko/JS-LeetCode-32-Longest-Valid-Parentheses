let s = "(((())))(";

// const longestValidParentheses = function (s) {
//   let stack = [[], [], 0]
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//       stack[0].push(i)
//     }
//     if (s[i] === ')') {
//       stack[1].push(i)
//     }
//   }
//   for (let i = 0; i < stack[0].length; i++) {
//     if (stack[1].indexOf(stack[0][i] + 1) != -1) {
//       stack[2] += 2
//     }
//   }
//   return stack[2]
// }

// const longestValidParentheses = function (s) {
  /*
  v = [0,0,0,0] description:
    temporary = v[0]
    bracket open = v[1]
    bracket close = v[2]
    target = v[3]
  */
//   let v = [0, 0, 0, 0];

//   for (let i = 1; i < s.length; i++) {
//     if (s[i] === ")") {
//       if (s[i - 1] === "(") {
//         v[1] += +2;
//       } else {
//         v[0] = i - v[3] - 1;
//         if (v[0] >= 0 && s[v[0]] === "(") {
//           v[2] += 2;
//         }
//       }
//       v[3] = v[1] + v[2];
//     }
//   }
//   v[3] = v[1] + v[2];
//   return v[3];
// };

//const longestValidParentheses = function (s) {
//   let temporary = 0,
//     storage = Array(s.length).fill(0),
//     helper = function (index) {
//       return index >= 0 ? storage[index] : 0;
//     },
//     target = 0;

//   for (let i = 1; i < s.length; i++) {
//     if (s[i] === ")") {
//       if (s[i - 1] === "(") {
//         storage[i] = helper(i - 2) + 2;
//       } else {
//         temporary = i - storage[i - 1] - 1;
//         if (temporary >= 0 && s[temporary] === "(") {
//           storage[i] = storage[i - 1] + helper(temporary - 1) + 2;
//         }
//       }
//       target = Math.max(...storage);
//     }
//   }
//   return target;
// };
  
const longestValidParentheses = function (s) {
  /*
  v description:
    temporary = v[0]
    storage = v[1]
    helper = v[2]
    target = v[3]
  */
  let v = [
    0,
    Array(s.length).fill(0),
    function (index) {
      return index >= 0 ? v[1][index] : 0;
    },
    0,
  ];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")") {
      if (s[i - 1] === "(") {
        v[1][i] = v[2](i - 2) + 2;
      } else {
        v[0] = i - v[1][i - 1] - 1;
        if (v[0] >= 0 && s[v[0]] === "(") {
          v[1][i] = v[1][i - 1] + v[2](v[0] - 1) + 2;
        }
      }
      v[3] = Math.max(...v[1]);
    }
  }
  return v[3];
};

console.log(longestValidParentheses(s));