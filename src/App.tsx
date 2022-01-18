import "./mockedTailwind.css";
import { ComponentA } from "./Component/ComponentA";
import { ComponentB } from "./Component/ComponentB";

const items = [
	{ name: "First", className: "red t-black" },
	{ name: "Second", className: "green t-black" },
	{ name: "Third", className: "blue t-white" },
];

export const App = () => {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<div className="center g-1">
				<div className="column g-1">
					<h2>Component A</h2>
					{items.map(({ name, className }) => (
						<ComponentA key={name} name={name} className={className} />
					))}
				</div>

				<div className="column g-1">
					<h2>Component B</h2>
					{items.map(({ name, className }) => (
						<ComponentB key={name} name={name} className={className} />
					))}
				</div>
			</div>
		</div>
	);
};
