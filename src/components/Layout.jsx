import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Game from "./Game/Game";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            className="outlet-component"
            transition={{ type: "spring", stiffness: 100, delay: 0 }}
          >
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              {location.pathname === "/" ? (
                <motion.div
                  initial={{ opacity: 1, height: "auto" }}
                  animate={{ opacity: 0, height: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ opacity: 0 }}>asfasfasf</div>
                </motion.div>
              ) : (
                // Fallback for home page
                <Outlet />
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <Game />
      </main>
      <Footer />
    </>
  );
}
