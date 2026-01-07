import {UserDetails} from "./default-prob/UserDetails.jsx"
import {Skills} from "./probs-with-spread-operator/Skills.jsx"
import {Description} from "./parsing-jsx-within-component/Description.jsx"
export  function CardWrapper(){
    return (
        <div>
            <UserDetails name = "Alice" age = {30} location = "New York" />
            <Skills title = "Programming Languages" p1="JavaScript" p2="Python" p3="Java" p4="C++" />
            <Description title = "Description">
                <p>This is a sample description paragraph.</p>
                <ul>
                    <li>Point One</li>  
                    <li>Point Two</li>
                    <li>Point Three</li>
                </ul>
            </Description>
        </div>
    )
}