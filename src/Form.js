import React, { Component } from 'react';
import {Button} from 'react-md';  
let Roles=["Developer","Admin","Guest"];
var Optionize = function(option){return(<option>{option}</option>);}
class NewForm extends Component{
    constructor(props){
        super(props);
        this.state={name:"",url:"",role:""};
       // this.handleChangeName=this.handleChangeName.bind(this);
       // this.handleChangeUrl=this.handleChangeUrl.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (event)=>{   
        this.setState({role:this.refs.role.value,name:this.refs.name.value,url:this.refs.role.value})  ;
        alert("These are the refs \n Name :"+this.refs.name.value +"\nURL :"+this.refs.url.value+"\nRole :"+this.refs.role.value);
        alert("These are the states Name :"+this.state.name +"\nURL :"+this.state.url+"\nRole :"+this.state.role);       
    };
    render(){return(
    <div>
    <form>
        <label value="Name">Name </label>   <input id="Name" ref="name" type="text" value={this.state.name}  placeholder="Enter Name ..." /><br/>
        <label value="url"> URL  </label> <input id="url" type="text" ref="url" value={this.state.url}  placeholder="Enter the URL ..."  /><br/>
        <label value="role"> Role </label><select id="role" ref="role" value={this.state.role} onChange={this.handleChangeRole}>{Roles.map(Optionize)}   
         </select><br/>
         <Button flat type="submit" onClick={this.handleClick} value="Submit" >Submit </Button>
    </form>
    </div>
    );
    }
}
export default NewForm;