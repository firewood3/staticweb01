## URL

https://www.youtube.com/watch?v=7neASrWEFEM
https://flexboxfroggy.com/#ko

## container의 css

- display
- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

## item의 css

- order
- flex-grow
- flex-shrink
- flex
- align-self

## axis

- main axis
- cross axis

## 100% vs 100vh

%는 부모에 들어있는 높이에 100%를 사용하겠다.
vh는 보이는 영역의 높이에 100%를 사용하겠다는 의미이다.

body태그의 부모태그인 html태그를 100%로 잡아주면 100vh 효과를 하위태그의 100%로도 잡을 수 있다.

부모의 height에 상관없이 보이는 영역의 뷰포트에서 높이를 잡겠다면 vh를 사용한다.

## vscode 태그 자동 생성 기능

div.container>div.item.item${$}\*5

## container 속성

- flex-direction: row;
- flex-direction: column;
- flex-wrap: nowrap;
- flex-wrap: wrap;

- flex-flow: column nowrap;
- flex-flow: column wrap;
- flex-flow: row wrap;
- flex-flow: row nowrap;

- justify-content: flex-start;
- justify-content: flex-end;
- justify-content: space-around;
- justify-content: space-evenly;
- justify-content: space-between;

- align-items: flex-start;
- align-items: flex-end;
- align-items: center;
- align-item: baseline;

align-content는 여러 줄들 사이의 간격을 지정하며, align-items는 컨테이너 안에서 어떻게 모든 요소들이 정렬하는지를 지정합니다. 한 줄만 있는 경우, align-content는 효과를 보이지 않습니다.

- align-content:
  - flex-start: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.
  - flex-end: 여러 줄들을 컨테이너의 바닥에 정렬합니다.
  - center: 여러 줄들을 세로선 상의 가운데에 정렬합니다.
  - space-between: 여러 줄들 사이에 동일한 간격을 둡니다.
  - space-around: 여러 줄들 주위에 동일한 간격을 둡니다.
  - stretch: 여러 줄들을 컨테이너에 맞도록 늘립니다.

## item 속성

- order: 1;
- flex-grow: 1;
- flex-grow: 2;
- flex-shrink: 1;
- flex-shrink: 2;
- flex-basis: 60%;
- flex-basis: 30%;
- flex-basis: 10%;
- flex: 2 2 auto; /_ grow, shrink, basis _/
- align-self: center;
