import React from "react"
import ReactDOM from 'react-dom'
import { Link } from "gatsby"
import Particles from "react-particles-js"
import particlesConfig from "../configs/particles-config.js"
import styles from "../components/page-sidebar.module.css"
import TopicNavList from "../components/topic-nav-list.js"

export default class Sidebar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {active: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.stopPropagation();
        if (window.matchMedia("only screen and (max-width: 999px)").matches) {
            this.setState({active: !this.state.active});
        }
    }

    render() {
        if (typeof window !== 'undefined') {
            return (
                <>
                    <aside onClick={this.handleClick} className={styles.container + ' ' + (this.state.active ? styles.active : '')}>
                    {window.matchMedia("only screen and (min-width: 1000px)").matches &&
                        <Particles
                            width={'300px'}
                            params={particlesConfig}
                            className={styles.particlesBackground}
                        />
                    }
                        <Link to='/' className={styles.appName}>Grammechs {this.state.active}</Link>
                        <TopicNavList abouts={true} numbers={false} />
                        <MenuButton show={!this.state.active} handleClick={this.handleClick} />
                    </aside>
                </>
            )
        } else {
            return (
                <div />
            )
        }
    }
}

class MenuButton extends React.Component {
    constructor (props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.querySelector('#page').appendChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            <button onClick={this.props.handleClick} className={styles.menuButton + ' ' + (this.props.show ? styles.active : '')}/>,
            this.el
        )
    }
}