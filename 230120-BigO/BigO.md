# 빅오 표기법
- 개념 : 명확하지 않은 카운팅을 공식화하는 방법  
여러가지 코드를 서로 비교하고 성능을 평가하는 방법  
코드를 분류하거나 비교할 수 있는 시스템  
숫자로 코드의 성능을 표기



- 중요성 : 빅오를 이해하면 어디서 문제가 나타나는지 찾기 쉬울 수 있다. 비효율적인 코드를 찾는 데 도움이 됨.

- 표현법 : O(1), O(logn), O(n), O(nlogn) , O(n**2) 
![screensh](./%08time-complexity.png)



더 나은 코드란 무엇인가?
1. 더 빠른 코드?
2. 메모리를 덜 사용하는?
3. 만들어지는 변수의 갯수?
4. 함수를 호출할 때마다 저장되는 데이터?
5. 가독성?

상황에 따라 다르지만 보통 1, 2번이 더 중요 

코드가 실행될 때 걸리는 정확한 시간을 초로 측정하는 것 대신에
컴퓨터가 처리해야하는 연산 갯수를 세자..


## 빅오
입력이 늘어날 수록 알고리즘의 실행시간이 어떻게 변하는지 설명하는 공식적인 방식  
함수의 입력 값이 늘어나는 것과 함수의 실행 시간이 변하는 관계  
입력의 크기와 실행 시간의 관계
세부적인 것이 아닌 전반적인 추세에 주목하는 것  
일반적으로 함수의 최대 실행 시간 값

## 시간복잡도
- 알고리즘들이 얼마나 빠르게 실행되는지
- 입력이 커질수록 알고리즘의 실행 속도가 어떻게 바뀌는지 분석

## 공간 복잡도
- 입력이 커질수록 알고리즘이 얼마나 많은 공간을 차지하는지 분석 - 사용되는 메모리 주목
- boolean, number, undefined, null은 모두 불변 공간(constant space)
- string은 O(n) 공간을 필요로 함
- 참조 타입은 일반적으로 O(n)
- 입력의 크기는 차지하는 공간과는 아무 상관이 없음.

## 로그(logarithm)
- 로그함수는 지그함수의 역함수.

## 객체의 BigO
- 객체는 정렬될 필요가 없을 때..
- 빠른 접근, 입력과 제거를 원할 때 좋다 (접근, 입력, 제거하는 시간이 상수시간)
- 자바스크립트는 객체 안에 정보를 상수 시간 안에 저장하고, 불러오고, 제거할 수 있다
- 탐색은 O(n) - 선형 시간
- 탐색은 key를 찾는 것이 아님, 어떤 특정한 정보가 어떤 값에 있는지 확인하는 것.

## 객체 메소드의 BigO
- object.keys - O(n)
- object.values - O(n)
- object.entries - O(n)
- hasOwnProperty - O(1)

## 배열의 BigO
- 배열은 정렬이 되어 있다는 점이 가장 중요
- 정렬이 되어 있기 때문에 연산을 하는 시간이 더 걸릴 수 있음
- 배열에 있는 데이터 접근 O(1), 탐색 O(n)
- 입력과 제거는 때에 따라 다름 - 입력과 제거를 어디다 하는지에 달려있음
- 배열의 끝에 추가할 때는 O(1), 앞에 추가할 때는 O(n)
- 제거도 마찬가지..
- 끝에서 추가하고 제거하는 것이 제일 효율적
- 그래서 push, pop이 shift와 unshift 작업보다 빠름

## 배열 메소드의 BigO
- 일반적으로 배열과 관련된 작업들은 O(n)
- push, pop - O(1)
- shift, unshift - O(n)
- concat - O(n) (배열을 합침 - 끝에 붙일 배열의 크기만큼 시간도 늘어남)
- slice - O(n) (배열의 일부 혹은 전부를 가져옴(범위를 정해줘.. 끝값은 안 들어감) - 복사하는 엘리먼트 갯수만큼 시간이 늘어남)
- splice - O(n) (배열의 엘리먼트를 제거, 추가(시작점, 갯수, 값), 배열 시작과 끝에 다 추가 가능)
- sort - O(n*logN) (비교를 하고, 엘리먼트 이동, 정렬)
- forEach, map, filter, reduce, etc - O(n)