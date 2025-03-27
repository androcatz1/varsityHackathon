

function Heading(){

    const nav = ["Home","About","Contact"]

    return(
    <>
    <div className = "Header">
        <nav>       
            <button className = "Extra">More</button>
            <li className = "but"><a><button>Sign Up</button></a></li>
            <li className = "but"><a><button>Login</button></a></li>
            <li className = "nav"><a>Contact</a></li>
            <li className = "nav"><a>About Us</a></li>
            <li className = "nav"><a>Products</a></li>
            <li className = "nav"><a>Home</a></li>
        </nav>
    </div>

    <div className = "popup">
        <p>Hello</p>
    </div>
    </>)
}

export default Heading;