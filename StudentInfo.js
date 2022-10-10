import React from "react"
export class StudentInfo extends React.Component
{
     constructor(props)
     {
        super(props)
        this.state = {rno:"",name:"",res:""}
        this.stuInfo = this.stuInfo.bind(this)
        this.handleRno = this.handleRno.bind(this)
        this.handleName = this.handleName.bind(this)
     }
     stuInfo(event)
     {
       this.setState({res:"rno is "+this.state.rno + "name is "+ this.state.name})
       event.preventDefault()
     }
     handleRno(event)
     {
        this.setState({rno:event.target.value})
     }
     handleName(event)
     {
        this.setState({name:event.target.value})
     }
     render()
     {
        return(<div>
            <form onSubmit={this.stuInfo}>
                <input type="text" placeholder="Enter Rno" onChange={this.handleRno} />
                <br/>
                <input type="text" placeholder="Enter Name" onChange={this.handleName} />
                <br/>
                <input type="submit" value="Submit" />
            </form>
            <p>{this.state.res}</p>
        </div>)
     }

}