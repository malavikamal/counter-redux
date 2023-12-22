import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {
  const [range, setRange] = useState('');
  // useSelector Hook is used to access value from store
  // useDispatch Hook is used to access functions inside action
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value)
  console.log("=====range=====",range);

  return (
    <>
        <div className='d-flex align-items-center justify-content-center w-100 flex-column'>
            <h1 className='mt-3' style={{fontSize: "80px", color: "red"}}>{count}</h1>
            <div className="mt-5">
                <button className="btn btn-danger" onClick={() => dispatch(decrement(Number(range)))}>Decrement</button>
                <button className="btn btn-success ms-2" onClick={()=> dispatch(increment(Number(range)))}>Increment</button>
                <button className="btn btn-primary ms-2" onClick={() => dispatch(reset(Number(range)))}>Reset</button>
            </div>
        </div>
        <div className="mt-3 w-100">
          <input type="text" placeholder='enter the range' className='form-control' onChange={(e) => setRange(e.target.value)} />
        </div>
    </>
  )
}

export default Counter;