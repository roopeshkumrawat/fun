import React,{Component} from "react";
import "./Name.css";
import City from "./City";
class Name extends Component {
    render () {
        return(
            <div>
                <h1 className="Text-red">this is my first heading</h1>
                <City />
            </div>
        );
    }
}
export default Name;