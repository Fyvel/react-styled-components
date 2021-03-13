import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
	body: '#fffcf0',
	text: '#566d7e',
	information: '#1d93d2',
	success: '#2a8e59',
	caution: '#ef8042',
	danger: '#bc472b',
	primary: '#0875e1',
	secondary: '#ffa126',
}

export const darkTheme: DefaultTheme = {
	body: '#566d7e',
	text: '#fffcf0',
	information: '#1d93d2',
	success: '#2a8e59',
	caution: '#ef8042',
	danger: '#bc472b',
	primary: '#0875e1',
	secondary: '#ffa126',
}

export type ThemeStyle = 'light' | 'dark'
