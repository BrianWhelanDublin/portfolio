const Header = ({content}) =>{
    const {title, subtitle} = content;
    return(
        <header>
                <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}

export default Header;