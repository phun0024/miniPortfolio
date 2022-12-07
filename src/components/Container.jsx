function Container (props) {

    return (
        <div className={props.className ? props.className : "container"}>{props.children}</div>
    )
}

export default Container