import { useEffect } from 'react'
import styled from 'styled-components'
import { ThemeStyle } from '../styles/theme'

type ToggleProps = {
	theme: ThemeStyle,
	toggleTheme: () => void
}
export default function Toggle({ theme, toggleTheme }: ToggleProps) {
	useEffect(() => {
		console.log({ theme })
	})
	return (
		<ToggleWrapper lightTheme={theme} onClick={_ => toggleTheme()}>
			<span>🌞</span>
			<span>🌛</span>
		</ToggleWrapper>
	)
}

const ToggleWrapper = styled.button`
	background: ${({ lightTheme }: { lightTheme: ThemeStyle }) => lightTheme === 'light'
		? 'linear-gradient(#39598A, #79D7ED)'
		: 'linear-gradient(#091236, #1E215D)'};
	border: 2px solid  ;
	border-radius: 30px;
	cursor: pointer;
	display: flex;
	font-size: 1.5rem;
	justify-content: space-between;
	margin: 0 auto;
	overflow: hidden;
	padding: 0;
	position: relative;
	width: 6rem;
	height: 2.5rem;

	span {
		height: auto;
		transition: all 0.25s linear;

		&:first-child{
			transform: ${({ lightTheme }) => lightTheme === 'light' ? 'translateY(0)' : 'translateY(50px)'};
		}

		&:nth-child(2){
			transform: ${({ lightTheme }) => lightTheme === 'dark' ? 'translateY(0)' : 'translateY(-50px)'};
		}
	}
`
