import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Footer = () => (
	<footer class={style.footer}>
		<p>&copy; {new Date().getFullYear()} Grasnale. All rights reserved.</p>
	</footer>
);

export default Footer;