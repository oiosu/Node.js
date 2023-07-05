# 04_exports와 module.exports 

#### (1) Module wrapper function

> 모듈 내의 전체 코드를 감싸주는 작업 
>
> `모듈을 감싸주는 코드`

##### ◼ 예시 코드 

```js
function add(a, b) {
    return a + b;
}

exports.add = add;
```

```js
(function (exports, require, module, __filenmae, __dirname) {
    function add(a, b) {
        return a + b;
    }
    exports.add = add;
});
```



##### ◼ Module wrapper function의 다섯가지 인자 

```js
function add(a, b) {
  return a + b;
}

exports.add = add;

console.dir(exports);
console.dir(require);
console.dir(module);
console.dir(__filename);
console.dir(__dirname);
```

> 5가지 인자에 자유롭게 접근 가능 
>
> `console.dir`는 특정 객체의 내부 속성들을 모두 출력해주는 함수 

