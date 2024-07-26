import { useAppContext } from '../features/AppProvider';
import cart from '../img/cart.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  const {count,setCount}=useAppContext();
return (
  <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="#">Navbar</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="navbar-nav">
    <Link to="/home" className="nav-item nav-link  navCenter" >Home <span className="sr-only"></span></Link>
    <Link to="/product" className="nav-item nav-link navCenter" >Product</Link>
    <Link to="/contactUs" className="nav-item nav-link navCenter">Contact Us</Link>
    <div className="cartclass">
              <a className="nav-item nav-link cartAdjust" href="#cart">
                <div className="cart-container">
                  <span className="cart-count">{count}</span>
                  <img className="cart" src={cart} alt="cart" />
                </div>
              </a>
            </div>
  </div>
   
</div>
</nav>
  </>
)
};
export default NavBar;