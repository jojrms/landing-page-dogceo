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
        </>
    )
}

export default Home;