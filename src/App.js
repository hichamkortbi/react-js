/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'


const Materialize = window.Materialize

const APP_TITLE = 'NASA'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import NasaCard from './components/NasaCard'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            nasa: undefined,
            sources: []
        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>

                <div className="App-content">
                    <div className="center-align">

                        <form onSubmit={ this.fetchNasa }>

                            <button type="submit" className="waves-effect waves-light btn">
                                Click here for the Astronomy Picture of the Day?
                            </button>

                        </form>

                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.displayNasa() }
                        </div>
                    </div>
                </div>

            </div>
        )
    }

  fetchNasa = async ( event ) => {

        event.preventDefault()

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            let _nasa = await get( ENDPOINTS.NASA_API_URL, {
                //YOU NEED TO PROVIDE YOUR "APIXU" API KEY HERE, see /utils/api.js file to grab the DOCUMENTATION file
                api_key: 'zow3w3FBaArvTN9ulmaYKZ4ctaCAd1zMlIY0shfU',
            } )

            this.setState( {
                    nasa: _nasa
                } )
            }

        catch ( error ) {
            Materialize.toast( error, 8000, 'error-toast' )
            console.log( 'Failed fetching data: ', error )
        }

    }


    displayNasa = () => {
        const nasa = this.state.nasa

        if ( nasa ) {

          console.log(nasa)

          var tab = nasa;

            var image = tab.hdurl;
            var pic = new Image();
            pic = image

            return <NasaCard title={tab.title}
                        explanation={tab.explanation}
                        picture={pic} />
          return tab;
        }

        return null
    }

}

export default App
