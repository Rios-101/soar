import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("transactions", "routes/transactions.tsx"),
    route("accounts", "routes/accounts.tsx"),
    route("credit", "routes/credit.tsx"),
    route("loan", "routes/loan.tsx"),
    route("privilege", "routes/privilege.tsx"),
    route("services", "routes/services.tsx"),
    route("settings", "routes/settings.tsx"),
    route("investments", "routes/investments.tsx"),

] satisfies RouteConfig;
