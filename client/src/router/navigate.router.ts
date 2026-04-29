import { setAppState } from "../state/app.state.js";
import type { AppState } from "../types/app-state.types.js";

export function navigate() {
  let route = location.pathname.slice(1) as AppState;

  if (route === "") {
    history.replaceState({}, "", "/home");
    route = "home";
  }

  if (route === "discover") {
    history.replaceState({}, "", "/movies");
    route = "movies";
  }

  const validAppStates: AppState[] = [
    "home",
    "discover",
    "movies",
    "tv-shows",
    "details",
    "search",
    "watchlist",
    "profile",
  ];

  if (validAppStates.includes(route)) {
    setAppState(route);
  } else setAppState("error");
}
