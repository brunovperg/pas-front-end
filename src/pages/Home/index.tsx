import style from './Home.module.scss';
import Navbar from 'components/Navbar';
import { FaPhoneAlt } from 'react-icons/fa';
import perfilImage from 'assets/perfil.jpg';
import { TbMailFilled } from 'react-icons/tb';
import Button from 'components/Button';
import Vector from 'assets/Vector.svg?react';
// import ImageGradient from 'assets/imageGradient.svg?react';

export default function Home() {
	return (
		<>
			<Navbar />
			<div className={style.homeContainer}>
				<div className={style.row}>
					<div className={style.leftContainer}>
						<Vector />
						<h1>
							ME CHAMO <br />
							<strong>
								BRUNO <br /> PERGENTINO
							</strong>
						</h1>
						<h2>Desenvolvedor FullStack</h2>
						<Button
							text='Vamos Conversar!'
							url='//wa.me/5575992634230'
						/>
						<div className={style.row}>
							<p>
								<FaPhoneAlt
									style={{ marginRight: '5px' }}
								/>
								+55 75 99263-4230
							</p>
							<p>
								<TbMailFilled
									style={{ marginRight: '5px' }}
								/>
								brunovpergentino@gmail.com
							</p>
						</div>
					</div>
					<div className={style.rightContainer}>
						<div className={style.welcomeImage}>
							{/* <ImageGradient /> */}
							<img src={perfilImage} alt='' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
