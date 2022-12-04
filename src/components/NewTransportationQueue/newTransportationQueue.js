import "../NewTransportationQueue/newTransportationQueue.css"
import {useEffect, useState} from  "react"
import {useDispatch} from "react-redux"
import {post__transport, get__transport} from "../features/Transport/transportQueueActions"

function NewTransportationQueue() {
  const formFields = {
    username: "",
    pickUpLocation:"",
    dropLocation: ""
  }

  const [form,  setformFields] = useState(formFields)
  const {username, pickUpLocation, dropLocation} = form

   const Handlechange = (e) =>{
   const {name, value} = e.target
   setformFields({...form , [name]:value})
  }

  

  const dispatch = useDispatch() 
  useEffect(()=>{
    dispatch(get__transport())
  },[])


  const SubmitForm = () =>{
   if(!username || !pickUpLocation || !dropLocation){
     alert("please check some fields may still be empty")
   }else{
     const data = {
        Name:username,
        Pick_UP_Location:pickUpLocation,
        Drop_Off_Location: dropLocation
       }
   dispatch(post__transport(data))
   }
  }

  return (
    <>
   <div className='input__container'>
   <input placeholder='Name' name="username" value={username} onChange={((e)=>{Handlechange(e)})} ></input>
   <input placeholder='Pick Up Location' name="pickUpLocation" value={pickUpLocation} onChange={((e)=>{Handlechange(e)})} ></input>
   <input placeholder='Drop Location' name="dropLocation" value={dropLocation} onChange={((e)=>{Handlechange(e)})} ></input>
   <button onClick={(()=>{SubmitForm()})} >Add A New queue</button>
   </div>
   </>
  )
}

export default NewTransportationQueue