import { GlobalStyles } from './styles/global'
import ThemeContextProvider from './context/ThemeContext'
import Layout from './containers/Layout'

export default function App() {
	return (
		<ThemeContextProvider>
			<GlobalStyles />
			<Layout />
		</ThemeContextProvider>
	)
}
