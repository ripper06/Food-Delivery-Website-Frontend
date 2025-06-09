import User from "./User";
import UserClass from "../UserClass";
import React from "react";
import UserContext from "../../utils/UserContext";


class About extends React.Component{
    constructor(props){
        super(props)
        //console.log("Parent constructor!")
    }

    componentDidMount(){
        //console.log("Parrent did mount!")
    }

    render(){
       // console.log("parrent render!")
        return(
            <div> 
                <h1>About</h1>
                <h2>This is about section of food delivery app</h2>
                <h2>
                    <UserContext.Consumer>
                        {({loggedinUser}) => <h2 className="text-xl font-bold">Username: {loggedinUser}</h2>}
                    </UserContext.Consumer>
                </h2>
                <UserClass name={"First"} location = {"India"} contact = {"abc@gmail.com"}/>
            </div>
            )
    }
}

export default About;

/*
-Parent constructor!
-parrent render!

    -First child constructor
    -FirstChild Component render
    -Secondconstructor
    -SecondChild Component render
    -Thirdconstructor
    -Component render

    -FirstChild Component Did Mount
    -SecondChild Component Did Mount
    -ThirdChild Component Did Mount

-Parrent did mount!
*/