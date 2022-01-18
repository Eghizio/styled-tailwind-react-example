import React, { ReactNode } from "react";
const e = React.createElement;

type HTMLTagName = "article" | "h2" | "div"; // lel, type it

interface Props {
	children: ReactNode;
}

const tag = <T extends Props>(htmlTag: HTMLTagName) => {
	const element = (className: string) => (props: T) => e(htmlTag, { className, ...props }, props.children);

	// maybe => https://github.com/apollographql/graphql-tag/blob/main/src/index.ts#L114
	return (classNames: TemplateStringsArray) => {
		return element(classNames[0]); // trim classNames?
	};
};

// https://www.npmjs.com/package/html-tags
const tagsHTML = ["article", "h2", "div"] as const;

const tw = Object.fromEntries(tagsHTML.map((htmlTag) => [htmlTag, tag(htmlTag)]));

export default tw;
