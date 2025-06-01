import './header.css'

function Header(){
    return(
        <>
        <nav>
            <a className="logo" href="">easyLoan</a>
            <div className='links'>
                <a href="">Home</a>
                <a href="">About us</a>
                <a href="">Contact us</a>
            </div>
            <a className="sign" href="">Sign up / Login</a>
        </nav>
        </>
    )
}

export default Header