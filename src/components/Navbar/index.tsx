import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import classNames from 'classnames';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
	const [location, setLocation] = useState(window.location.pathname);
	const [isOpened, setIsOpened] = useState(false);

	return (
		<>
			{isOpened ? (
				<button onClick={() => setIsOpened(!isOpened)}>
					<AiOutlineClose size={50} color='#fff' />
				</button>
			) : (
				<button onClick={() => setIsOpened(!isOpened)}>
					<GiHamburgerMenu size={50} />
				</button>
			)}
			<nav
				className={style.navbar}
				style={{ display: isOpened ? 'flex' : 'none' }}
			>
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
							INÍCIO
						</Link>
					</li>
					<li>
						<Link
							className={classNames([
								style.Link,
								location === '/about'
									? style.active
									: '',
							])}
							to='/about'
							onClick={() => setLocation('/about')}
						>
							SOBRE
						</Link>
					</li>
					<li>
						<Link
							className={classNames([
								style.Link,
								location === '/projects'
									? style.active
									: '',
							])}
							to='/projects'
							onClick={() => setLocation('/projects')}
						>
							PROJETOS
						</Link>
					</li>
				</ul>
				<div className={style.socials}>
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
				</div>
				<footer>
					<p>
						Developed by <br />
						Bruno Pergentino
					</p>
				</footer>
			</nav>
		</>
	);
}
