import {
	RouterProvider,
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./styles.scss";
import reportWebVitals from "./reportWebVitals.ts";

import App, { TypographyPage, AppLayout, ShadowsPage } from "./App.tsx";

const rootRoute = createRootRoute({
	component: AppLayout,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: App,
});

const typographyRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/typography",
	component: TypographyPage,
});

const shadowsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/shadows",
	component: ShadowsPage,
});

const routeTree = rootRoute.addChildren([indexRoute, typographyRoute, shadowsRoute]);

const router = createRouter({
	routeTree,
	context: {},
	defaultPreload: "intent",
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
