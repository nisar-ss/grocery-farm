import './App.css';
import { SocialIcon } from 'react-social-icons'

import imgmain from './images/img1.png'

import img1 from './images/greenleaf.png'
import img2 from './images/handleaf.png';
import img3 from './images/leafcircle.png'
import img4 from './images/leafmap.png'
import img5 from './images/threeleaf.png'
import img6 from './images/leafbunch.png'
import img7 from './images/leafcircle2.png'
import img8 from './images/wetleaf.png'

function App() {
  return (
    <main className="App">
      <header className="nav">
        <div className="container">
          <div className="appName">
            <a href="/">ORGANIC</a>
          </div>
          <div className="navLinks">
            <a className='active' href="/">Home</a>
            <a href="/">Services</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
        </div>
      </header>

      <picture className="picture-container">
        <img className="img1" src={imgmain} alt="Mainimage" />
        <section className="overlay">
          <p className="overlaytext">100% ORGANIC</p>
          <p className='overlay-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus quia soluta, nostrum incidunt quae commodi corrupti ea pariatur consequatur.</p>
          <button className="topbtn">Get this</button>
        </section>
      </picture>

      <section className="cards">
        <div className="container">
          <div className="card" style={{ width: "15rem" }}>
            <img src="https://source.unsplash.com/330x200/?dragon+fruit" className="card-img-top" alt="dragon_fruit" />
            <div className="card-body">
              <h5 className="card-title">Organic Dragon Fruit</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed neque nulla alias quam qui aperiam laudantium quia dolores nesciunt. Temporibus minus cumque nesciunt vel.</p>
              <a href="/" className="btn">Checkout now</a>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img src="https://source.unsplash.com/330x200/?fern-fairy" width='' className="card-img-top" alt="fern_fairy" />
            <div className="card-body">
              <h5 className="card-title">Organic  Sprout Veggie</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed neque nulla alias quam qui aperiam laudantium quia dolores nesciunt. Temporibus minus cumque nesciunt vel.</p>
              <a href="/" className="btn">Checkout now</a>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img src="https://source.unsplash.com/330x200/?basil" className="card-img-top" alt="cinnamon_basil" />
            <div className="card-body">
              <h5 className="card-title">Organic Watercress</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed neque nulla alias quam qui aperiam laudantium quia dolores nesciunt. Temporibus minus cumque nesciunt vel.</p>
              <a href="/" className="btn">Checkout now</a>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img src="https://source.unsplash.com/330x200/?carrot" className="card-img-top" alt="carrots" />
            <div className="card-body">
              <h5 className="card-title">Organic Carrot</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed neque nulla alias quam qui aperiam laudantium quia dolores nesciunt. Temporibus minus cumque nesciunt vel.</p>
              <a href="/" className="btn">Checkout now</a>
            </div>
          </div>
          <div className="card" style={{ width: '15rem' }}>
            <img src="https://source.unsplash.com/330x200/?bell+pepper" className="card-img-top" alt="bell_peppers" />
            <div className="card-body">
              <h5 className="card-title">Organic Bell Peppers</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed neque nulla alias quam qui aperiam laudantium quia dolores nesciunt. Temporibus minus cumque nesciunt vel.</p>
              <a href="/" className="btn">Checkout now</a>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img src="https://source.unsplash.com/330x200/?cucumber" className="card-img-top" alt="cucumbers" />
            <div className="card-body">
              <h5 className="card-title">Organic Cucumber</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed neque nulla alias quam qui aperiam laudantium quia dolores nesciunt. Temporibus minus cumque nesciunt vel.</p>
              <a href="/" className="btn">Checkout now</a>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img src="https://source.unsplash.com/330x200/?lettus" className="card-img-top" alt="cucumbers" />
            <div className="card-body">
              <h5 className="card-title">Organic Lettus</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed neque nulla alias quam qui aperiam laudantium quia dolores nesciunt. Temporibus minus cumque nesciunt vel.</p>
              <a href="/" className="btn">Checkout now</a>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img src="https://source.unsplash.com/330x200/?pumpkin" className="card-img-top" alt="cucumbers" />
            <div className="card-body">
              <h5 className="card-title">Organic Pumpkin</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed neque nulla alias quam qui aperiam laudantium quia dolores nesciunt. Temporibus minus cumque nesciunt vel.</p>
              <a href="/" className="btn">Checkout now</a>
            </div>
          </div>
        </div>
      </section>

      <picture className="container2">
        <img className="mainimg2" src="https://www.shutterstock.com/image-photo/sweet-basil-green-plants-flowers-600nw-1791372134.jpg" alt="Mainimage" />
        <section className="overlay2">
          <p className="overlaytext2">FRESH & NON-GMO PRODUCTS</p>
          <p className='overlay-para2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis nisi quasi voluptate tempore vitae.</p>
        </section>
      </picture>

      <section className="cards2">
        <div className="container">
          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <img src={img1} alt="" />
              <h5 className="card-title">Fresh Veggies & Fruits.</h5>
              <p className="card-text">“For the body, fortified with blessings, to get The Certified Kickstart. Guarantee that you are kickstarting a bright bright noon.”</p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <img src={img2} alt="" />
              <h5 className="card-title">Locally-Grown Vegetables</h5>
              <p className="card-text">“For the body, fortified with blessings, to get The Certified Kickstart. Guarantee that you are kickstarting a bright bright noon.”</p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <img src={img3} alt="" />
              <h5 className="card-title">Natural Oil & Its Nature</h5>
              <p className="card-text">“For the body, fortified with blessings, to get The Certified Kickstart. Guarantee that you are kickstarting a bright bright noon.”</p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <img src={img4} alt="" />
              <h5 className="card-title">Farm-Country Edits</h5>
              <p className="card-text">“For your body, fortified with blessings, to get The Certified Kickstart. Guarantee that you are kickstarting a light yet most shiny Sunrise.”</p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <img src={img5} alt="" />
              <h5 className="card-title">Alkaline Water</h5>
              <p className="card-text">“For your body, fortified with blessings, to get The Certified Kickstart. Guarantee that you’re kickstarting right at a touch of The Sunrise’s first light touch.”</p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <img src={img6} alt="" />
              <h5 className="card-title">Fresh-Juice</h5>
              <p className="card-text">“For your body, fortified with blessings, to get The Certified Kickstart. Guarantee that you’re kickstarting right at The Sunrise’s first light touch.”</p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <img src={img7} alt="" />
              <h5 className="card-title">Lorem, ipsum dolor.</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos debitis, aliquid accusantium deleniti asperiores a corrupti eveniet.</p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
              <img src={img8} alt="" />
              <h5 className="card-title">Lorem, ipsum dolor.</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum reprehenderit atque, facilis dolor, reiciendis voluptas.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container-footer">
          <div className="column">
            <h4>ABOUT OUR FARM</h4>
            <p>Our farm was founded on the need for pure, honest food that promotes wellness for those who seek it. We are comitted to ethical farming practices.</p>
          </div>
          <div className="column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="/">Organic Farm</a></li>
              <li><a href="/">Our Priducts</a></li>
              <li><a href="/">Daily Offer</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>PRODUCTS</h4>
            <ul>
              <li><a href="/">Organic Cuts</a></li>
              <li><a href="/">Frozen Veggies</a></li>
              <li><a href="/">Natural Juices</a></li>
              <li><a href="/">Healthy Bites</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>SUBSCRIBE US</h4>
            <div className="email-input">
              <input type="email" placeholder="Enter you email" name="email" id="mail" />
              <button>Go</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 OrganicFarm. Completely natural.</p>
          <div className="socials">
            <SocialIcon className='icon' bgColor='yellowgreen' fgColor='black' url="instagram" />
            <SocialIcon className='icon' bgColor='yellowgreen' fgColor='black' url="twitter" />
            <SocialIcon className='icon' bgColor='yellowgreen' fgColor='black' url="facebook" />
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
