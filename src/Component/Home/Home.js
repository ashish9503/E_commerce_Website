import React, { useContext, useEffect } from 'react'
import { useStateValue } from '../../State/StateProvider'
import { LoaderContext } from '../../TopBarContext/loaderContext';
import Product from '../Product/Product'
import './Home.css'

function Home() {

    const [state, dispatch] = useStateValue();

    const { setProgress } = useContext(LoaderContext);
    useEffect(() => {
        setProgress(100)
    }, [])

    return (
        <div className='home'>
            <div className='home__container'>
                <img  height={450} src='https://ii1.pepperfry.com/assets/f35006d2-a624-452b-adfe-3f219955a9d9.jpg' alt='PrimeImg' />

                <div className='home__row'>
                    {
                        state.products.map((item, idx) => {
                            if (idx >= 2) {
                                return
                            }
                            return <Product key={idx + item.id} item={item} />
                        })
                    }
                </div>
                <div className='home__row'>
                    {
                        state.products.map((item, idx) => {
                            if (idx < 2 || idx > 4) {
                                return
                            }
                            return <Product key={idx + item.id} item={item} />
                        })
                    }
                </div>
                <div className='home__row'>
                    {
                        state.products.map((item, idx) => {
                            if (idx < 5) {
                                return
                            }
                            return <Product key={idx + item.id} item={item} />
                        })
                    }
                </div>

                {/* // creating about section */}
                
                <div class="about-section">
  <h1>About Us Page</h1>
  <h3>Deep-light. is a dedicated lighting technology brand, providing a range of specialty lighting, luminaires, and lighting solutions. We offer a wide assortment of modern, aesthetically designed and energy efficient LED lights for external and internal applications. Our LED lights will surprise you with their high-tech, semi-conductor based technology and intelligent lighting features, which can be used for residential, industrial and commercial purposes..</h3>
</div>










                <footer>
  <div class="footer0"><h1> </h1></div>
            {/* <div class="footer1">
                Connect with us at
                <div class="social-media">
                    <a href="#"> <ion-icon name="logo-facebook"></ion-icon> </a>
                    <a href="#"> <ion-icon name="logo-linkedin"></ion-icon> </a>
                    <a href="#"> <ion-icon name="logo-youtube"></ion-icon> </a>
                    <a href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="#"> <ion-icon name="logo-twitter"></ion-icon> </a>
                </div>
            </div> */}
            <div class="footer2">
                {/* <div class="product">
                    <div class="heading">Products</div>
                    <div class="div">Sell your Products</div>
                    <div class="div">Advertise</div>
                    <div class="div">Pricing</div>
                    <div class="div">Product Buisness</div>
                </div> */}
                <div class="services">
                    <div class="heading">Services</div>
                    <div class="div">Return</div>
                    <div class="div">Cash Back</div>
                    <div class="div">Affiliate Marketing</div>
                    <div class="div">Others</div>
                </div>
                <div class="Company">
                    <div class="heading">Company</div>
                    <div class="div">Complaint</div>
                    <div class="div">Careers</div>
                    <div class="div">Affiliate Marketing</div>
                    <div class="div">Support</div>
                </div>
                <div class="Get Help">
                    <div class="heading">Get Help</div>
                    <div class="div">Help Center</div>
                    <div class="div">Privacy Policy</div>
                    <div class="div">Terms</div>
                    <div class="div">Login</div>
                </div>
            </div>
            <div class="footer3">
                Copyright ©
                <h4>Deep light</h4>
                2021-2028
            </div>
        </footer>
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        <script src="./ecommerce.js"></script>

            </div>

            
        </div>
    )
}

export default Home