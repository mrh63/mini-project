import React from 'react';

const Slot = (props) => {
        const text = props.text;
        let arrayNum = [];
        for (let i = 0; i < props.num; i++) {
            arrayNum.push(i);
        }
        return arrayNum.length > 0 ? arrayNum.map((num) => {
            return <p className={text} key={num}>slot-{num + props.count}</p>
        }) :
            <p className={text}>slot-{props.count}</p>
    }

export default Slot;