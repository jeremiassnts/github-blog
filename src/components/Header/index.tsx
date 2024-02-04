import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderLogo } from './style'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo src={logo} />
        </HeaderContainer>
    )
}