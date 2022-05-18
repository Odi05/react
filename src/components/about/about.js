
export const About = (props)=> {
    return (
        <div>
            <ul>
                {props.about.map((el,key)=> {
                    return <li key={key}>{el}</li>
                })}
            </ul>
        </div>
    )
}