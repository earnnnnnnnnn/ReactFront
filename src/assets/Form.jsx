import { useState } from "react";
import ShowName from "./ShowName";

export default function Form() {
    const [name,setName] = useState("");
    const [displayName, setDisplayName] = useState(false);

    const handleChange = (event) =>{
        console.log(event);
        setName(event.target.value);
    };

const handleSubmit = (event) =>{
    event.preventDefault();
    alert("A name was submitted: "+name);
    console.log("A name was submitted: "+name);

    name.length >= 5 ? setDisplayName(true) : setDisplayName(false);
};

    return(
        <div>
            <h1>From to Input Data</h1>
            <form>
                <table>
                    Name:
                    <input type="text" value={name} onChange={handleChange} />
                </table>
                <input type="submit" value="Submmit" onClick={handleSubmit} />
            </form>
            <ShowName name ={name} show={displayName} />
        </div>
    );
}