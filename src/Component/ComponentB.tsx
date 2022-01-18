import { Article, Heading, TextContainer } from "./stylesB";

interface Props {
	name: string;
	className?: string;
}

export const ComponentB = ({ name, className }: Props) => {
	return (
		<div className={className}>
			<Article>
				<div>
					<Heading>{name}</Heading>
				</div>
				<TextContainer>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate harum facilis dolorum quia
						odit repudiandae, accusamus architecto reprehenderit odio, ab quas a officia temporibus dicta
						vel deleniti quisquam impedit voluptates?
					</p>
				</TextContainer>
			</Article>
		</div>
	);
};
