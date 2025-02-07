import React from 'react'

export default function Button(props) {

    const {text,func}=props
  return (
    <button onClick={func} className=" bg-black py-3 px-8 max-w-fit mx-auto heroButton sm:text-lg">{text}</button>
  )
}
