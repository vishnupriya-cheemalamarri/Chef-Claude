import chef from "../assets/chef.jpeg"
export default function Header(){
    return(
        <header>
            <img src={chef}/>
            <h1>Chef Claude</h1>
        </header>
    )
}