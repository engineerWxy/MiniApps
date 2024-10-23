import ReactDOM from "react-dom/client";

import { Root } from "@/components/Root";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "./index.css";
import { init } from "@telegram-apps/sdk-react";
init();

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
