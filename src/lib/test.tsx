import React, { ReactNode } from "react";

const e = React.createElement;

interface Props {
	cn: string;
	children: ReactNode;
}

const CompA = ({ cn, children }: Props) => <div className={cn}>{children}</div>;

const CompB = ({ cn, children }: Props) => e("div", { className: cn }, children);

const Test = () => {
	return (
		<div>
			<CompA cn="">something</CompA>
			<CompB cn="">something</CompB>
		</div>
	);
};
