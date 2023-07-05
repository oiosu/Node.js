// 여기에서 math-tools 모듈에 있던 add 함수를 
// 가져와서 사용해보기

// 다른 모듈에 존재하는 함수를 사용하려면
// 일단 그 모듈을 가져와야 한다. (= 그 모듈을 load한다)

// require 는 함수의 인자로 math-tools 모듈의 상대 경로를 작성한 것
// require 함수는 모듈을 로드해서 객체 하나를 리턴한다. 
// require 함수가 리턴하는 객체를 가져다 사용할 수 있도록 변수에 대입해주면 된다. 

let m = require('./math-tools.js')

console.log(m.add(1, 2));