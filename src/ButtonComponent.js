import React from 'react'
import store from './store/index'
import setTechnology from './actions'
 const ButtonComponent = ({technologies}) => {
    return (
        <div>
            {technologies.map((tech,i)=>(
                <button  
                value={tech}
                key={i}
                onClick={dispatchAction}
                >
                    {tech}
                </button>
            ))}
            
        </div>
    )
}


function dispatchAction(e){
    const tech=e.currentTarget.value;
    store.dispatch(setTechnology(tech))
}


export default ButtonComponent;
