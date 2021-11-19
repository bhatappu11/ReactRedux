import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../actions';

export default function CompA() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter {counter}</h2>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
            {isLogged ? <h5>Valuable info should not be seen</h5> : ''}
        </div>
    )
}
