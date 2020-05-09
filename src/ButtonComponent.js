import React from 'react'
import store from './store/index'
import setTechnology from './actions'
 const ButtonComponent = ({technologies}) => {
    return (
        <div>
            {technologies.map((tech,i)=>(
                <button  
                data-tech={tech}
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
    const tech=e.target.dataset.tech;
    store.dispatch(setTechnology(tech))
}


export default ButtonComponent;
