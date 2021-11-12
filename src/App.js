import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  changeName
} from './slices/counter'

const App = () => {
  
  const count = useSelector((state)=> state.counter.value)
  const name  = useSelector((state)=> state.counter.name)

  const dispatch = useDispatch()

  return(
    <div>
      <span>{count}</span>
      <span>{name}</span>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(changeName())}>Name</button>
    </div>
  )

}

export default App