import React,{useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'



function Header(props) {


  const {index,title,description}=props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-baseline justify-center gap-2'>
        <p className='font-medium text-3xl opacity-50'>{index}</p>
        <h4 className='text-lg'>{title}</h4>
      </div>
      <p className='flex flex-col items-center justify-center'>{description}</p>
    </div>
  )
}







export default function Generator(props) {

  const {updateWorkout,poison,setPoison,muscles,setMuscles,goals,setGoals}=props

  const [showModal,setShowModal]=useState(false)
  

  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
  
    

    

    if( muscles.includes(muscleGroup)){

      setMuscles(muscles.filter(val=> val !== muscleGroup))
      return
    }

    if (muscles.length > 2) {
      return 
    }

    if( poison !== 'individual'){
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    if (muscles.length===2){
      setShowModal(false)
    }

    setMuscles([...muscles,muscleGroup])

  }

  return (
    <div className='min-h-screen'>
      <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s','Huge','O\'Clock']}>
        <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."}/>

      <div className='sm:text-lg grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 sm:p-8'>

        {Object.keys(WORKOUTS).map((Type,TypeIndex) =>{
          return (
            <button onClick={()=>{
                setPoison(Type)
                setMuscles([])
            }} className={'cursor-pointer bg-slate-950 border  duration-200 px-4 hover:border-blue-400 py-4 rounded-lg ' + (Type === poison ? 'border-blue-400':'border-transparent')} key={TypeIndex}>
              <p className='capitalize'>{Type.replaceAll('_',' ')}</p>
            </button>
          )
        })}

      </div>

        <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihilation."}/>
        <div className='p-4 sm:p-8 '>
        <div className='p-3 bg-slate-950 border-solid rounded-lg 
        border-[1px] border-transparent hover:border-blue-400 
         flex flex-col '>
          <button onClick={toggleModal} className='p-2 relative flex items-center 
          justify-center hover:cursor-pointer'>
            <p className='capitalize sm:text-lg'>{muscles.length==0 ? 'Select muscle groups': muscles.join(' ') }</p>
            <i className="fa-solid fa-sort-down absolute right-3 top-1/2 
            -translate-y-1/2"></i>
          </button>
          {showModal && (
          <div className='flex flex-col p-3'>
            {
              (poison==='individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup,muscleGroupIndex)=>{
                return(
                  <button onClick={()=>{
                    updateMuscles(muscleGroup)
                  }} className={'p-2 hover:text-blue-400 duration-200 hover:cursor-pointer ' + (muscles.includes(muscleGroup)? 'text-blue-400':' ')} key={muscleGroupIndex}>
                    <p className='capitalize'>{muscleGroup}</p>
                  </button>
                )
              })
            }
          </div>
          )}
        </div>
        </div>


        <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."}/>

        <div className='sm:text-lg grid grid-cols-3  gap-1 p-4 sm:p-8'>

        {Object.keys(SCHEMES).map((Scheme,SchemeIndex) =>{
          return (
            <button onClick={()=>{
              setGoals(Scheme)
          }} className={'cursor-pointer bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-4 rounded-lg ' + (Scheme === goals ? 'border-blue-400':'border-transparent')} key={SchemeIndex}>
              <p className='text-xs sm:text-lg capitalize '>{Scheme.replaceAll('_',' ')}</p>
            </button>
          )
        })}

      </div>

      <Button func={updateWorkout} text={'Formulate'}/>
        

        
      </SectionWrapper>
    </div>
  )
}


