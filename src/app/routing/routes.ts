import AppLayout from "@/app/layouts/AppLayout";
import PalettePage from "@/pages/PalettePage/PalettePage";
import ShadowsPage from "@/pages/ShadowsPage/ShadowsPage";
import TypographyPage from "@/pages/TypographyPage/TypographyPage";
import { createRootRoute, createRoute } from "@tanstack/react-router";

const rootRoute = createRootRoute({
	component: AppLayout,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: PalettePage,
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

const routeTree = rootRoute.addChildren([
	indexRoute,
	typographyRoute,
	shadowsRoute,
]);

export { rootRoute, routeTree };
