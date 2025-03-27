import React, { useEffect, useRef, useState } from 'react'
import './HealthTrack.css'

const BotLogo = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-capsule" viewBox="0 0 16 16">
<path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z"/>
</svg>



const HealthTrack = () => {
  const[allMedic, setAllMedic] = useState([{name: "Paracetamol",
    dosage: "11mg",
    startDate: "29/3/2025",
    takeFor: "5/4/2025",
    every: "Every 3 Hours",
    take : "after",
    reminder:"",
    time:3}])

 
    
  const [isPop, setIsPop] = useState(false)

  const nameRef = useRef();
  const dosRef = useRef();
  const takeRef = useRef();
  const freRef = useRef();
  const sDateRef = useRef();
  const eDateRef = useRef();

  function handleSubmit(e){
    e.preventDefault();

    setAllMedic(m=>[...m, {name: nameRef.current.value,
                           dosage: dosRef.current.value ,
                           take: takeRef.current.value,
                           every: freRef.current.value,
                           startDate: sDateRef.current.value,
                           takeFor: eDateRef.current.value,
                           reminder:"",
                           time:10


    }])
    setIsPop(!isPop)

  }

  const[popDet, setPopDet] = useState(false)

  const [index, setIndex] = useState(0);

  function handleIndex(key){
    setIndex(key)
    if(index != key){
      if(popDet == false){
        setPopDet(!popDet)}
    }else{
    setPopDet(!popDet)}

  }

  function handleReminder(key){
    let updatedMedicines = [...allMedic];

    updatedMedicines[key] = {
        ...updatedMedicines[key],  
        reminder: "Reminder set!"  
    }
    setAllMedic(updatedMedicines);
  }

  function handleAdd(key){
    let updatedMedicines = [...allMedic];

    let extractedNumber = Number(updatedMedicines[key].every.match(/\d+/g)?.[0]) || 0;
    updatedMedicines[key] = {
        ...updatedMedicines[key],  
        time: updatedMedicines[key].time+extractedNumber
    }
    setAllMedic(updatedMedicines);
  }

  function handleDel(key) {
    let arr1 = [...allMedic]

    arr1 = arr1.filter((_,index) => index!==key)

    setAllMedic(arr1);
}

  useEffect(()=>{
    nameRef.current.value  =""
    dosRef.current.value  =""
    sDateRef.current.value  =""
    eDateRef.current.value  =""
    takeRef.current.value = ""
    freRef.current.value = ""
  },[isPop])


  return (
    <div className="containerHT">
      <div className={`add ${isPop? "popup":"nopop"}`}>
          <div className="header">
            <h1>Add Medication</h1>
          <button onClick={()=>setIsPop(!isPop)} className="material-symbols-outlined">
                    close
          </button>
          </div>
          <div className="body">
            <form onSubmit = {handleSubmit} action="#" className="addMedic">
              <div className="input name">
                <p>Name</p><br/>
                <input ref = {nameRef} placeholder='Enter medicine name...' required></input>
              </div>

              <div className="input dosage">
                <p>Dosage</p><br/>
                <input ref = {dosRef} placeholder='Enter dosage...' required></input>
              </div>

              <div className="input take">
                <p>Take before/after meal</p><br/>
                <select ref = {takeRef} required>
                  <option value = "">Select an option</option>
                  <option value = "Before">Before</option>
                  <option value = "After">After</option>
                </select>

              </div>

              <div className="input take">
                <p>Frequency</p><br/>
                <select ref = {freRef} required>
                <option value = "">Select an option</option>
                  <option value = "Every 1 hour(s)">Every 1 hour(s)</option>
                  <option value = "Every 2 hour(s)">Every 2 hour(s)</option>
                  <option value = "Every 3 hour(s)">Every 3 hour(s)</option>
                  <option value = "Every 4 hour(s)">Every 4 hour(s)</option>
                  <option value = "Every 5 hour(s)">Every 5 hour(s)</option>
                  <option value = "Every 6 hour(s)">Every 6 hour(s)</option>
                </select>

              </div>

              <div className="input Date">
                <p>Start Date</p><br/>
                <input ref = {sDateRef} type = "date"  required></input>
              </div>

              <div className="input Date">
                <p>End Date</p><br/>
                <input ref = {eDateRef} type = "date"  required></input>
              </div><br/>
              <button type= "submit" className='AddMedicButton'>Submit</button>
            </form>
          </div>
          
      </div>
      <div className='Medications'>
          <div className="medics all">
          <div className="header">
            <h1>All Medications</h1>
            <button onClick={()=>setIsPop(!isPop)}> Add Medications</button>
          </div>
          <div className="medic body">
            {allMedic.length ==0? "": 
            allMedic.map((medic, index) =>{ 
                return <div key = {index} className="list">
                <h1 className = "icon"> {BotLogo}</h1>
                <div key = {index}className="listText">
                Name:{medic.name}<br/>
                Dosage:{medic.dosage} | Take: {medic.take} meal  | {medic.every}<br/>
                Start Date:{medic.startDate} End Date:{medic.takeFor}
              </div>
              <div className="buttons">
                <button onClick = {() =>handleIndex(index)}>Details</button>
              </div>
              </div>
            })}

          </div>
        </div>




        <div className={`medics details ${popDet? "pop":"nopop"}`}>
            <div className="header">
              Medication Details
            </div>
            <div className="body">
              {allMedic.length == 0 ? "": 
              <div>
              <h1 className="name">{allMedic[index].name}</h1>
              <div className="details">
                <p>Dosage: {allMedic[index].dosage}</p>
                <p>Intake Instructions: Take {allMedic[index].take} meal</p>
                <p>Frequency: {allMedic[index].every}</p>
                <p>Start Date: {allMedic[index].startDate} | End Date: {allMedic[index].takeFor}</p> 
                <p className='intake'>Next intake time: {String(allMedic[index].time).padStart(2, '0')}.30</p>
                <p className='reminder'>{allMedic[index].reminder}</p>
              </div>
              <div className="buttons">
                <button className="skip" onClick={()=>handleAdd(index)}>Skipped</button>
                <button className="taken" onClick={()=>handleAdd(index)}>Taken</button>
                <button className="set reminder" onClick={()=>handleReminder(index)}>Set Reminder</button>
                <button className="delete" onClick = {()=> handleDel(index)}>Delete</button>
              </div></div>}
            </div>
        </div>
        
      </div>
    </div>

  )
}

export default HealthTrack
