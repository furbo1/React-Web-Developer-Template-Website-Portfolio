import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

class Main extends Component {
  render () {
    return (<main id='main-grid'>
      <section id='description'>
        <div className='container'>
          <div className='descriptionText'>
            <h2>About me</h2>
            <p>I am a Front-End Web Developer specialized in UI, HTML, CSS, JavaScript, Jquery and React. I
                                will help you develop mobile friendly, fully responsive web pages. 
            </p>
          </div>
          <div id='poza'>
            <img
id='pozapass' src='./assets/images/man-156584_640.png' alt='Poza mea' width='200px'
              height='200px' 
            />
          </div>
        </div>
      </section>
      <div className='mainSection'>
        <div id='sectionDiv'>
          <section className='container1 one'>

            <img
id='first' src='./assets/images/monitor-1307227_640.jpg' alt='computers web design'
              width='100%'
              height='50%' 
            />

            <div className='bottom'>
              <h2>Stunning 21st Century Design</h2>
              <h6>Image by Gerd Altmann from Pixabay</h6>
              <p> Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis
                                ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis
                                blandit dignissim.
              </p>

            </div>
          </section>
          <section className='container1 two'>
            <img
id='second' src='./assets/images/dna-3539309_640.jpg' alt='Human DNA code' width='100%'
              height='50%' 
            />

            <div className='bottom'>
              <h2>Great Coding Skills</h2>
              <h6>Image by Gerd Altmann from Pixabay </h6>
              <p> Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis
                                ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis
                                blandit dignissim.
              </p>

            </div>
          </section>
          <section className='container1 three'>
            <img
id='third' src='./assets/images/artificial-intelligence-3382507_640.jpg'
              alt='Human DNA code' width='100%'
              height='50%' 
            />

            <div className='bottom'>
              <h2>Technology Nerd</h2>
              <h6>Image by Gerd Altmann from Pixabay </h6>
              <p> Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis
                                ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis
                                blandit dignissim.
              </p>

            </div>
          </section>
        </div>
      </div>

            </main>

    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
        <Contact />
        <Footer />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
