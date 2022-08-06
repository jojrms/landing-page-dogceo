import { useEffect, useState } from "react";
import Viewer from "./Viewer";

/* eslint-disable jsx-a11y/alt-text */
const Home = () => {

    const [allDogs, setAllDogs] = useState([]);
    const [dogBreed, setDogBreed] = useState({
        breed: '',
    });

    const searchDogs = async() => {

        const url = 'https://dog.ceo/api/breeds/list/all'

        //Função para guardar todos os cachorros disponíveis na API
        fetch(url)
            .then( async function(res){
                const data = await res.json()

                //Realiza o forEach na key do objeto, pois é onde está guardado a informação do nome da raça
                Object.keys(data.message).forEach(async dogBreed => {
                    const urlImage = `https://dog.ceo/api/breed/${dogBreed}/images/random/1`

                    const response = await fetch(urlImage)
                    const data = await response.json()

                    const image = await data.message

                    //Guarda as informações puxadas nas duas URLs em formato de uma nova array
                    setAllDogs(currentList => [...currentList, [dogBreed, image]])
                })

                return console.log('Está funcionando');
            })
            .catch( function(error){
                return console.log('Ocorreu um problema no recebimento de informações da API, error: ' + error.message);
            })

    }

    
    useEffect(() => {
        searchDogs();
    }, [])

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
                        <li>Our Dogs</li>
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

            <section className="howItWorks">
                <h1>How It <br/> Works</h1>
                <aside>
                    <article>
                        <span>
                            <img src="https://img.icons8.com/windows/96/FA5252/user.png"/>
                        </span>
                        <h2>Create a personal <br/> account</h2>
                        <p>Create your petcular account,<br/> access our dogs available for<br/> adoption and stay on top of new<br/> redemptions</p>
                    </article>
                    <article>
                        <span>
                            <img src="https://img.icons8.com/fluency-systems-regular/96/FA5252/dog-park.png"/>
                        </span>
                        <h2>Search and view <br/> a dog</h2>
                        <p>See the dogs available to be <br/> filled with love and adopted</p>
                    </article>
                    <article>
                        <span>
                            <img src="https://img.icons8.com/fluency-systems-regular/96/FA5252/talk-male.png"/>
                        </span>
                        <h2>Show your interest and we'll <br/> get back to you</h2>
                        <p>After finding a pet, show your <br/> interest in it and we will contact<br/> you</p>
                    </article>
                </aside>
            </section>

            <section className="sectionDogs">
                <h1>Dogs available for adoption</h1>
                <div className="divSearch">
                    <input type='search' value={dogBreed.breed} placeholder="What you search here?" 
                            onChange={(event) => setDogBreed({...dogBreed, breed: event.target.value})}/>
                    <button id='btn-search'/>
                </div>

                <aside className="asideExbDogs" id="asideExbDogs">
                    <div className="divExbDogs">
                        {
                            allDogs.map( (dog) => {
                                return (
                                    <Viewer
                                        BreedDog={dog[0]}
                                        ImageUrl={dog[1]}
                                    />
                                )
                            })
                        }
                    </div>
                </aside>
            </section>

            <footer>
                <p>© 2021 Petcular - Powered by Latest</p>
            </footer>
        </>
    )
}

export default Home;