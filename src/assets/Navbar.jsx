import './Navbar.css'
const Links = ({navLinks})=>{
    return (
        navLinks.map(({linkHref, linkText}, i)=>{
            return (
                <li key={`nav_${i}`}>
                    <a href={linkHref}>{linkText}</a>
                </li>
            )
        })
    )
}


const Navbar = ({ imgUrl, imgAlt, navLinks}) => {
    console.log(navLinks);
    return (
        <nav>
            <figure>
                <img src={imgUrl} alt={imgAlt} />
            </figure>
            <div id='container'>
            <Links navLinks= {navLinks}/>
            </div>
        </nav>
    )
}


export default Navbar