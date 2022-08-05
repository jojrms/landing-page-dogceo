/* eslint-disable jsx-a11y/alt-text */
const Home = () => {

    return(
        <>
            <header>
                <span>
                    <p>WANT EXTRA DISCOUNT LEARN MORE</p>
                    <p>FREE SHIPPING ON ALL ORDERS $21+</p>
                    <input type='button' value={'HELP'}/>
                    <img width={'25vw'} src="https://img.icons8.com/ios-glyphs/90/FFFFFF/search--v1.png"/>
                    <img width={'30vw'} src="https://img.icons8.com/windows/90/FFFFFF/shopping-cart.png"/>
                </span>
                <section>
                    <i/>
                    <ul>
                        <li>Shop All</li>
                        <li>How i works</li>
                        <li>Reviews</li>
                        <li>Contact</li>
                    </ul>
                    <input type='button' value={'Log In'}/>
                </section>

            </header>
            <section className="sectionInitial">
                <aside>
                    <p>#AdoptionSave</p>
                    <h1><b>Animals save us. <br/>Now save them!</b></h1>
                    <h2>Dogs are one of the animals that most live in street situations 
                        after family abandonment. <br/> Unbridled procreation increases this 
                        population and our mission is to give a definitive <br/> and loving home 
                        to all rescued.
                    </h2>
                    <div>
                        <span>
                            <img src="https://img.icons8.com/material-rounded/90/000000/plus--v1.png"/>
                            <select>
                                <option>$10.00</option>
                                <option>$15.00</option>
                                <option>$20.00</option>
                                <option>Other</option>
                            </select>
                        </span>
                        <span>
                            <img src="https://img.icons8.com/fluency-systems-filled/96/FFFFFF/wallet.png"/>
                            <input type={'button'} value={'Donate Now'}/>
                        </span>
                    </div>
                </aside>
                <aside>
                    <i/>
                </aside>
            </section>

            <section className="sectionHowWorks">
                <span>
                    <img src="https://img.icons8.com/fluency-systems-regular/96/000000/like--v1.png"/>
                    <p>Ready to love?</p>
                </span>
                <span>
                    <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/96/000000/external-Pet-Sticker-pets-and-accessories-those-icons-lineal-those-icons.png"/>
                    <p>be part of the <br/> woofer community</p>
                </span>
                <span>
                    <img src="https://img.icons8.com/pastel-glyph/64/000000/receive-cash--v5.png"/>
                    <p>their donations <br/> generate scores</p>
                </span>
                <span>
                    <img src="https://img.icons8.com/fluency-systems-regular/96/000000/dog.png"/>
                    <p>many pets willing to <br/> be part of the family</p>
                </span>
                <span>
                    <img src="https://img.icons8.com/material-rounded/96/000000/veterinarian.png"/>
                    <p>free veterinary <br/> support for 2 months</p>
                </span>
            </section>

            <section className="sectionDogs">
                
            </section>
        </>
    )
}

export default Home;