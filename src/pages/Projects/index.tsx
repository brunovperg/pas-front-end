import Navbar from 'components/Navbar';
import style from './Projects.module.scss';
import projects from 'data/projectsData.json';
import ProjectElement from 'components/ProjectElement';
import Button from 'components/Button';
export default function Projects() {
	return (
		<>
			<Navbar />
			<div className={style.projectsContainer}>
				<h1>Projetos</h1>
				<div className={style.projects}>
					{projects.map((project) => (
						<div className={style.project}>
							<ProjectElement
								key={project.id}
								project={project}
							/>
						</div>
					))}
				</div>
				<Button text='Ver Mais no Github' url='https://github.com/brunovperg'/>
			</div>
		</>
	);
}
