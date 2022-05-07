import React, { useReducer, useState} from 'react'

function SlidingBox({color, zIndex}) {
    const intialState = {width:'0px'}
    const reducer = (state, action) => {
        switch(action){
            case 'wide':
                setClose(!close)
                return{
                    width: '400px',
                    background: color,
                    zIndex: zIndex
                }
                case 'narrow':
                    setClose(!close)
                    return {
                    width: '0px',
                    background: color,
                    zIndex: zIndex
                }
                default:
                return state
            }
        }
    

    const [close, setClose] = useState(false)
    const [state, dispatch] = useReducer(reducer, intialState)

  return (
      <>
        {
            close ? <button onClick = {() => dispatch('narrow')}>Narrow {color}</button> 
                :
                <button onClick = {() => dispatch('wide')}>Wide {color}</button>

        }
        <div style={state} className='slidingBox'></div>
      </>
  )
}

export default SlidingBox