import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Footer = () => (
	<footer class={style.footer}>
		<p>&copy; {new Date().getFullYear()} Grasnale. All rights reserved.</p>
		<Link activeClassName={style.active} href="https://www.instagram.com/botc_grasnale/">Instagram</Link>
		<Link activeClassName={style.active} href="https://www.facebook.com/profile.php?id=61569130013671">Facebook</Link>
	</footer>
);

export default Footer;