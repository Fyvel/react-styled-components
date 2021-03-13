import { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react'
import { ThemeStyle } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'

type ThemeContextDefinition = {
	theme: ThemeStyle,
	setTheme: Dispatch<SetStateAction<ThemeStyle>>
}
const initialAppContext = {
	theme: 'light' as ThemeStyle,
	setTheme: () => null
}
export const ThemeContext = createContext<ThemeContextDefinition>(initialAppContext)

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<ThemeStyle>(initialAppContext.theme)
	const value = useMemo(() => ({ theme, setTheme }), [theme])

	return (
		<ThemeContext.Provider value={value}>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}
