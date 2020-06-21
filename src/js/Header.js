import React,{Component} from 'react'


export default class Header extends Component {
    render() {
        return (
            <header>
                <div id="logo">
                    <h1>| Alex Cocan | Front End Web Developer |</h1>
                    <p>| Responsive | Web | Design |</p>
                </div>
                    <nav>
                        <ul>
                            <li><a href="#logo">HOME</a></li>
                            <li><a href="#form" >CONTACT</a></li>
                        </ul>
                    </nav>
            </header>
        )
    }
}