import React, { memo } from 'react';


//function
const HabitAddform = memo(
    props => {
        const ipnutRef = React.createRef(); // input에 입력된 값 가져오기
        const formRef = React.createRef(); // form 값 초기화

        const onSubmit = event => {
            event.preventDefault();  // 브라우저의 기본 기능 취소
            const name = ipnutRef.current.value;
            name && props.onAdd(name);
            // ipnutRef.current.value = ""; //input 값 초기화
            formRef.current.reset(); //form 값 초기화
        };
        return (
            <form ref={formRef} className="add-form" onSubmit={onSubmit}>
                <input ref={ipnutRef}
                    type="text" className="add-input" placeholder="Habit" />
                <button className="add-button" >Add</button>
            </form>
        );
    });

export default HabitAddform;
