import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "smooth" sieht nett aus, kann aber auf älteren Handys ruckeln.
    // "auto" ist zackig und performant (wie eine echte neue Seite).
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
