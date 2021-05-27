## 컴포넌트를 만드는 방법

## 라이프 사이클

라이프 사이클은 클래스형 컴포넌트에서만 사용한다.
함수형 컴포넌트에서는 Hooks 기능을 사용한다.

will - 어떤 작업을 하기전
did - 어떤 작업을 한 후

### 라이프사이클의 카테고리

- 마운트: Dom이 생성되고 웹 브라우저(페이지) 상에 컴포넌트가 나타남
- 업데이트: 컴포넌트 정보를 업데이트
- 언마운트: 페이지에서 컴포넌트가 사라짐

### 마운트

마운트: DOM이 생성되고 웹 브라우저상에 나타는것

```code
클래스형 컴포넌트 생성 -> constructor -> getDerivedStateFormProps -> render -> componentDidMount
```

- constructor: 컴포넌트를 새로 만들때 마다 호출되는 클래스 생성자 메서드
- getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드
- render: 우리가 준비한 UI를 렌더링 하는 메서드
- componentDidMount: 컴포넌트가 웹 프라우저상에 나타난 후 호출하는 메서드

### 업데이트

컴포넌트가 업데이트 되는 네 가지 경우

- props가 바뀔 때
- state가 바뀔 때
- 부모 컴포넌트가 리렌더링될 때
- this.forceUpdate로 강제로 렌더링을 트리거할 때

```code
props 변경 / state 변경 / 부모 컴포넌트 리렌더링 => getDrivedStateFromProps => shouldComponentUpdate(true 반환 시 render 호출, false 반환 시 여기서 작업 취소) => render(forceUpdate() 함수를 호출하면 바로 이단계로 이동.) => getSnapshotBeforeUpdate(웹 브라우저상의 실제 DOM변화) => componentDidUpdate
```

- getDerivedStateFromProps: 이 메서드는 마운트 과정에서도 호출되며, 업데이트가 시작하기 전에도 호출된다. props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용한다.
- shouldComponentUpdate: 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드이다. 이 메서드에서는 true 혹은 false 값을 반환해야하며, true를 반환하면 다음 라이프사이클 메서드를 계속 실행하고, false를 반환하면 작업을 중지한다.
- render: 컴포넌트를 리렌더링 한다.
- getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드이다.
- componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드이다.

### 언마운트

컴포넌트를 DOM에서 제거하는 것

```code
언마운트하기-> componentWillUnmount
```

- componentWillUnmount: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드입니다.

### render() 함수

```code
render() { ... }
```

- 라이프 사이클 메서드 중 유일한 필수 메서드
- 이 메서드 안에서 this.props와 this.state에 접근할 수 있으며, 리액트 요소를 반환한다. 요소는 div 같은 태그가 될 수도 있고, 따로 선언한 컴포넌트가 될 수도 있다. 아무것도 보여주고 싶지 않다면 null 값이나 false값을 반환하면된다.
- 이 메서드 안의 이벤트 설정이 아닌곳에서 setState를 사용하면 안되며, 브라우저의 DOM에 접근해서도 안된다. DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서 처리해야 한다.

### constructor 메서드

```code
constructor(props) { ... }
```

컴포넌트의 생성자 메소드, 컴포넌트를 처음 만들때 실행되며 초기 state를 지정할 수 있다.

### getDerivedStateFromProps 메서드

```js
static getDerivedStateFromPops(nextProps, prevState) {
    if(nextProps.value !== prevState.value) { // 조건에 따라 특정 값 동기화
        return {value: nextProps.value};
    }
    return null; // state를 변경할 필요가 없다면 null을 반환
}
```

리엑트 v16.3 이후에 새로 만든 라이프사이클 메서드이다. props로 받아온 값을 state에 동기화 시키는 용도로 사용하며, 컴포넌트가 마운트될 때와 업데이트될 때 호출 된다.

### componetDidMount 메서드

```code
componentDidMount() { ... }
```

컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행한다. 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리하면 된다.

### shouldComponentUpdate 메서드

```code
shouldComponentUpdate(nextProps, nextState) { ... }
```

- props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드이다. 이 메서드서는 반드시 true값 또는 false 값을 반환해야한다. 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 언제나 true 값을 반환한다. 이 메서드가 false 값을 반환한다면 업데이트 과정은 여기서 중지된다.
- 이 메서드 안에서 현재 props와 state는 this.props와 this.state로 접근하고, 새로 설정될 props 또는 state는 nextProps와 nextState로 접근할 수 있다.
- 프로젝트 성능을 최적화할 때, 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할 때는 false 값을 반환하게 한다.

### getSnapshotBeforeUpdate 메서드

리액트 v16.3 이후에 만든 메서드이다. 이 메서드는 render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출된다. 이 메서드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달 받을 수 있다. 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용된다. ex) 스크롤바 위치 유지

```code
getSnapshotBeforeUpdate(prevProps, prevState) {
    if(prevState.array !== this.state.array) {
        const {scrollTop, scrollHeight} = this.list
        return {scrollTop, scrollHeight};
    }
}
```

### componentDidUpdate 메서드

```code
componentDidUpdate(prevProps, prevState, snapshot) { ... }
```

리렌더링을 완료한 후 실행한다. 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 무방하다. prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있다. 또한 getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달받을 수 있다.

### componentWillUnmount 메서드

```code
componentWillunmount() { ... }
```

컴포넌트를 DOM에서 제거하기 전에 실행된다. componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야한다.

### componentDidCatch 메서드

리액트 v16에서 새롭게 도입되었으며, 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여줄 수 있게 해준다

```js
componentDidCatch(error, info) {
    this.setState({
        error: true
    });
    console.log({error, info});
}
```

위 코드에서 error는 파라미터에 어떤 에러가 발생했는지 알려주며, info 파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 준다. 앞의 코드에서는 그저 console.log만 했지만, 나중에 실제로 사용할때 오류가 발생하면 서버 API를 호출하여 따로 수집할 수도 있다.

그러나 이 메서드를 사용할 때는 컴포넌트 자신에게 발생하는 에러를 잡아낼 수 없고 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있다.

