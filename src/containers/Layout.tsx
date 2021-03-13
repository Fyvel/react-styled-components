import { useContext } from 'react'
import styled from 'styled-components'
import Toggle from '../components/Toggle'
import { ThemeContext } from '../context/ThemeContext'

export default function Layout() {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	return (
		<Wrapper>
			<h1>Hello World!</h1>
			<Toggle theme={theme} toggleTheme={toggleTheme} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display:flex;
	flex-flow:column nowrap;
	align-items:center;
`
