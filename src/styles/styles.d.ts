import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		body: string,
		text: string,
		information: string,
		success: string,
		caution: string,
		danger: string,
		primary: string,
		secondary: string,
	}
}
