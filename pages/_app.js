import UIProvider from "../components/contexts/uiProvider";
import CustomCursor from "../components/customCursor";
import PortfolioQuickView from "../components/drawer/portfolio-quick-view";
import MainNavigation from "../components/navigation";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <UIProvider>
      <Toaster />
      <CustomCursor />
      <MainNavigation />
      <PortfolioQuickView />
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default MyApp;
