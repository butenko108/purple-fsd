import { Outlet } from "react-router";

export const Layout = () => (
	<div
		style={{
			display: "flex",
			gap: "8px",
			minHeight: "100vh",
		}}
	>
		<div
			style={{
				border: "1px solid black",
			}}
		>
			Menu
		</div>
		<Outlet />
	</div>
);
