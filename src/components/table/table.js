import "../table/table.css"
import {useSelector} from "react-redux"
import TransportRow from "../TransportRow/transportRow"
import {useEffect, useState} from  "react"
import {useDispatch} from "react-redux"
import {get__transport} from "../features/Transport/transportQueueActions"
import Form from "../form/form"


function Table() {
const {TransportQueue} = useSelector((state)=> state.transport )



  const dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(get__transport())
  },[dispatch])



  return (
    <>
  
  <Form />

    <div className='General__Table'>
    <div className="planner__section">
    <h1 className="planner__text">Planner</h1>
    </div>
     

    <div className='TransportationQueue__section'>
    <h2  className="Transportation__text">Transportation Queue</h2>
    <div className="queue__TabeHeader">
        <p className="id">ID</p>
        <p className="name">Name</p>
        <p className="pick__upLocation">Pick UP Location</p>
        <p className="Drop__offLocation">Drop Off Location</p>
    </div>

    {TransportQueue && TransportQueue.length > 0 ?(
    <div>{TransportQueue?.map((Queue)=> <TransportRow id={Queue.id} Name={Queue.Name} Drop_Off_Location={Queue.Drop_Off_Location} Pick_UP_Location={Queue.Pick_UP_Location} />)}</div>

    ) : (
      <></>
    )}
  </div>
  </div>

  </>
  )
}

export default Table






























































// const [board, setBoard] = useState([]) 
// const [{isOver}, drop] = useDrop(() => ({
//     accept: "Row",
//     drop: (item) => addItemToBoard(item.id),
//     collect: (monitor) => ({
//         isOver: !!monitor.isOver(),
//     }),
// }));

// const addItemToBoard = (id)=>{
//  const TransportQueu = TransportQueue.filter((Transport) => id === Transport.id);
//  setBoard((board)=> [...board, TransportQueu[0]]);
// };
