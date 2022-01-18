import { article, heading, textContainer } from "./stylesA";

interface Props {
	name: string;
	className?: string;
}

export const ComponentA = ({ name, className }: Props) => {
	return (
		<div className={className}>
			<article className={article}>
				<div>
					<h2 className={heading}>{name}</h2>
				</div>
				<div className={textContainer}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate harum facilis dolorum quia
						odit repudiandae, accusamus architecto reprehenderit odio, ab quas a officia temporibus dicta
						vel deleniti quisquam impedit voluptates?
					</p>
				</div>
			</article>
		</div>
	);
};
