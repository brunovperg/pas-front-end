import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
	const [location, setLocation] = useState(window.location.pathname);
	const [isOpened, setIsOpened] = useState(false);
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [showIcon, setShowIcon] = useState(true);

	const handleScroll = () => {
		const currentScrollTop = window.scrollY;
		setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	useEffect(() => {
		setShowIcon(lastScrollTop <= 0);
	}, [lastScrollTop]);
	return (
		<>
			{isOpened ? (
				<button
					className={classNames([
						style.animateButton,
						showIcon ? style.show : '',
					])}
					onClick={() => setIsOpened(!isOpened)}
				>
					<AiOutlineClose size={50} color='#fff' />
				</button>
			) : !isOpened && showIcon ? (
				<button
					onClick={() => setIsOpened(!isOpened)}
					className={classNames([
						style.animateButton,
						showIcon ? style.show : '',
					])}
					style={{ display: isOpened ? 'none' : '' }}
				>
					<GiHamburgerMenu size={50} color='#000' />
				</button>
			) : null}

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
