import { render } from "preact";
import { FeChapterDashboardModal } from "./components/fe-chapter-dashboard-modal";
import { OPEN_MODAL_EVENT } from "./constants";

// @ts-ignore
if (!window.__fe_chapter_dashboard_modal_loaded) {
  const hostElement = document.createElement("div");
  document.body.appendChild(hostElement);
  render(<FeChapterDashboardModal />, hostElement);
}

window.postMessage(OPEN_MODAL_EVENT);
