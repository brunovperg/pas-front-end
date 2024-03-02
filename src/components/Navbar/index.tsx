import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import classNames from 'classnames';

export default function Navbar() {
	const [location, setLocation] = useState(window.location.pathname);

	return (
		<nav className={style.navbar}>
			<h2>Bruno Pergentino</h2>
			<ul>
				<li>
					<Link
						className={classNames([
							style.Link,
							location === '/' ? style.active : '',
						])}
						to='/'
						onClick={() => setLocation('/')}
					>
						Início
					</Link>
				</li>
				<li>
					<Link
						className={classNames([
							style.Link,
							location === '/about' ? style.active : '',
						])}
						to='/about'
						onClick={() => setLocation('/about')}
					>
						Sobre
					</Link>
				</li>
				<li>
					<Link
						className={classNames([
							style.Link,
							location === '/projects' ? style.active : '',
						])}
						to='/projects'
						onClick={() => setLocation('/projects')}
					>
						Projetos
					</Link>
				</li>
			</ul>
			<div className={style.socials}>
				<div>
					<FaLinkedin
						onClick={() =>
							window.open(
								'https://www.linkedin.com/in/bruno-pergentino/',
								'_blank'
							)
						}
					/>
				</div>
				<div>
					<FaGithub
						onClick={() =>
							window.open(
								'https://github.com/brunovperg',
								'_blank'
							)
						}
					/>
				</div>
			</div>
			<footer>
				<p>Developed by Bruno</p>
			</footer>
		</nav>
	);
}
