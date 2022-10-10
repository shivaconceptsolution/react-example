import React, { useState } from "react"
() => StudentInfo1
{
     const [rno,setRno] = useState(" ")
     const [sname,setSname] = useState(" ")
     const [res,setRes] = useState(" ")
     stuInfo(e)
     {
       this.setRes("rno is "+rno + "sname is "+ sname)
       e.preventDefault()
     }
     handleRno(e)
     {
        this.setRno(e.target.value)
     }
     handleName(e)
     {
        this.setSname(e.target.value)
     }
     render()
     {
        return(<div>
            <form onSubmit={(e) => stuInfo(e)}>
                <input type="text" placeholder="Enter Rno" onChange={(e)=>handleRno(e)} />
                <br/>
                <input type="text" placeholder="Enter Name" onChange={(e) => handleName(e)} />
                <br/>
                <input type="submit" value="Submit" />
            </form>
            <p>{res}</p>
        </div>)
     }

}

export default StudentInfo1