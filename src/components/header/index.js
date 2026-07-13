import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import myImage from '../../assets/logo.png';

const Header = () => (
	<header class={style.header}>
		<Link href="/" class={style.brand}>
			<img src={myImage} class={style.logo} alt="Grasnale logo" />
			<h1>Grasnale</h1>
		</Link>
		<nav>
			<Link activeClassName={style.active} href="/blogs">Blogs</Link>
			<Link activeClassName={style.active} href="/contact">Contact me</Link>
		</nav>
	</header>
);

export default Header;
