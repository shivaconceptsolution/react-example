import React from "react"
import { useState,useRef } from "react"

function Swap()
{
    const a = useRef(null)
    const b = useRef(null)
    const[res,setRes] = useState("")
   function swapLogic(e)
    {
        var a1 = a.current.value
        var b1 = b.current.value
        var temp = a1;
        a1 = b1
        b1 = temp
        setRes("a= "+a1+" b="+b1)
        e.preventDefault()

    }

    return(<div>
          <form onSubmit={swapLogic}>
         <input type="text" ref={a} placeholder="Enter First Number" />
         <br />
         <input type="text" ref={b} placeholder="Enter Second Number" />
         <br />
         <input type="submit" name="btnsubmit"  />
         </form>
         <p>{res}</p>
           </div>
      )
}
export default Swap;