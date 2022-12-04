import React from 'react'


function TransportRow({id, Name, Drop_Off_Location, Pick_UP_Location}) {
      
  return (
    <div className="transportQueue__container">
    <p className="transportQueue">{id}</p>
    <p className="transportQueue">{Name}</p>
    <p className="transportQueue">{Drop_Off_Location}</p>
    <p className="transportQueue">{Pick_UP_Location}</p>
    </div>
  )
}

export default TransportRow


    




















































// const [{ isDragging }, drag] = useDrag(() => ({
//   type: "Row",
//   item: {id: id },
//   collect: (monitor) => ({
//     isDragging: !!monitor.isDragging(),
//   }),
// }));