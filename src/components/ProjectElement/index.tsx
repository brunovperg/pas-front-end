import style from './ProjectElement.module.scss';
import Arrow from 'assets/arrow-up-right.svg?react';

interface ProjectElementProps {
	project: {
		id: number;
		title: string;
		description?: string;
		url: string;
		imagePath?: string;
	};
}
export default function ProjectElement({ project }: ProjectElementProps) {
	return (
		<div className={style.projectElement}>
			<div className={style.projectDetails}>
				<h2>{project.title}</h2>
				<p>{project.description}</p>
				<a href={project.url} target='_blank'>
					<Arrow />
				</a>
			</div>
			<div
				className={style.projectImage}
				style={{ backgroundImage: `url(${project.imagePath})` }}
			></div>
		</div>
	);
}
