import Hello from "./Hello"
export default function Header(props){
    return(
        <>
        <h1>my name is{props.name} and my age is {props.age}</h1>
        <Hello series="All of us are dead"/>
        </>
    )
}