import React from 'react';


function Layout (props){
   const {listName,list,eventhandler} = props;
        return(
            <div>
                <h2>{listName}</h2>
                <ul  className="container">
                    { list.map(item=>(
                    <li className="li-container" key={item.id} >
                        <p>{item.title}</p>
                        <img src={item.img} alt={item.title}></img>
                        <button id={item.id} onClick={()=>eventhandler(item)}>
                               {listName==="My List"?"remove":"add"}
                        </button>

                    </li>)
                    )}
                </ul>
            </div>
        )
                    
}
export default Layout