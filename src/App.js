import React, { useState, useEffect } from 'react'
import './App.css'
import { Navbar, Footer } from './components'
import Home from './pages'
import About from './pages/About'
import Menu from './pages/Menu'
import { Switch, Route } from 'react-router-dom'
import Dropdown from './components/Dropdown'

const App = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false)
			}
		}
		window.addEventListener('resize', hideMenu)
		return()=> {
			window.removeEventListener('resize', hideMenu)
		}
	}, [])

	return (
		<>
			<Navbar toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/menu' component={Menu} />
				<Route path='/about' component={About} />
			</Switch>
			<Footer />
		</>
	)
}

export default App
