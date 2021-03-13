import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, ThemeStyle } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { useState } from 'react';
import Toggle from './components/Toggle'

export default function App() {
	const [theme, setTheme] = useState<ThemeStyle>('light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<>
				<GlobalStyles />
				<Wrapper>
					<h1>Hello World!</h1>
					<Toggle theme={theme} toggleTheme={toggleTheme} />
				</Wrapper>
			</>
		</ThemeProvider>
	)
}

const Wrapper = styled.div`
	display:flex;
	flex-flow:column nowrap;
	align-items:center;
`