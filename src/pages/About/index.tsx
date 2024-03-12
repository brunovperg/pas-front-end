import style from './About.module.scss';
import Navbar from 'components/Navbar';
import perfilImage from 'assets/perfil.jpg';
import curriculum from 'assets/Curriculum Bruno Pergentino.pdf';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { FaLocationDot, FaSquareArrowUpRight } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';
import exemples from 'data/exemplesData.json';
import Button from 'components/Button';

export default function About() {
	return (
		<>
			<Navbar />
			<div className={style.aboutContainer}>
				<div className={style.row}>
					<div className={style.welcomeContainer}>
						<div className={style.welcomeText}>
							<h3>Muito Prazer!</h3>
							<h1>Seja bem-vindo!</h1>
						</div>
						<div className={style.welcomeImage}>
							<img src={perfilImage} alt='' />
						</div>
						<h1>Bruno Pergentino</h1>
						<h2>Desenvolvedor FullStack</h2>
						<div className={style.curriculum}>
							<br />
							<a href={curriculum} download>
								Baixar Currículo
								<FaSquareArrowUpRight
									style={{ marginLeft: '10px' }}
								/>
							</a>
						</div>
					</div>
					<div className={style.content}>
						<div className={style.contacts}>
							<p>
								<span>
									<FaPhoneAlt
										style={{
											marginRight: '10px',
										}}
									/>
								</span>
								+55 75 99263-4230
							</p>
							<p>
								<span>
									<FaUser
										style={{
											marginRight: '10px',
										}}
									/>
								</span>
								28 anos
							</p>
							<p>
								<span>
									<FaLocationDot
										style={{
											marginRight: '10px',
										}}
									/>
								</span>
								Aracaju - Sergipe
							</p>
							<p>
								<span>
									<TbMailFilled
										style={{
											marginRight: '10px',
										}}
									/>
								</span>
								brunovpergentino@gmail.com
							</p>
						</div>
						<div className={style.experienceTop}>
							<div className={style.row}>
								<div>
									<h2>Experiência</h2>
									<p>
										Sou um desenvolvedor em
										constante aprendizado e busco
										me manter atualizado com as
										últimas tecnologias.
										Atualmente, estou praticando
										REST API's para expandir meus
										conhecimentos em
										desenvolvimento FullStack.
										Estou altamente motivado a
										contribuir para projetos
										desafiadores e crescer como
										profissional.
									</p>
								</div>
								<div>
									<h2>Entre em contato</h2>
									<p>
										Estou sempre aberto a novas
										oportunidades. Sinta-se à
										vontade para entrar em contato
										comigo através do meu perfil
										do &nbsp;
										<a href='https://linkedin.com/in/bruno-pergentino'>
											LinkedIn
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={style.experienceContainer}>
					<div className={style.experienceLeft}>
						<h2>Minha Experiência</h2>
						<p>
							Olá, sou Bruno Pergentino, desenvolvedor
							fullstack com experiência em desenvolvimento
							de aplicações web e mobile.
						</p>
						<Button
							text='Visite meu Github'
							url='https://github.com/brunovperg'
						/>
					</div>
					<div className={style.experienceRight}>
						{exemples.map((exemple) => (
							<div
								key={exemple.id}
								className={style.exemple}
							>
								<div className={style.row}>
									<h2>{exemple.period}</h2>
									<p>{exemple.company}</p>
								</div>
								<h1>{exemple.position}</h1>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
