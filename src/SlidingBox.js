import React, {useState, useReducer, useEffect} from 'react'

function SlidingBox({color, zIndex}) {
    const [open, setOpen] = useState(false)
    const [disable, setDisable] = useState(false)
    const [style, setStyle] = useState({
        width: '0px',
        background: color,
        zIndex: zIndex,
    })
    
    const initialState = {width: '0px'}
    const reducer = (state, action) => {
        switch(action){
            case 'wide':
                setOpen(!open)
                return {
                width: '400px',
                background: color,
                zIndex: zIndex
            }
            case 'narrow':
                setOpen(!open)
                return {
                width: '0px',
                background: color,
                zIndex: zIndex}
            default:
                return state
            }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
  <>{
    open ? 
        <button onClick = {() => dispatch('narrow')}>Narrow {color} </button>
        :
        <button onClick ={() => dispatch('wide')}>Wide {color} </button>
}
    <div style={state} className='slidingBox'></div>
  </>
  )
}

export default SlidingBox
