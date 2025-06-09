import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            userInfo : {
                name : "dummy",
                location : "default ",
                avatar_url : "https//:avatar-img"
            },
        };

        //console.log(props.name + "constructor")
    }

    async componentDidMount(){
        //console.log(this.props.name + "Child Component Did Mount")

        const data = await fetch("https://api.github.com/users/ripper06");
        const json = await data.json(); 
        console.log(json);

        this.setState({
            userInfo : json,
        })
    } 
 
    render () {
        const {name,location,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h3>Contact : {this.props.contact}</h3>
            </div>
        )
    }

}

export default UserClass;