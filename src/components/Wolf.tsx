import React from "react";
import { motion, useAnimate } from "framer-motion";

export default function Wolf() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    (async () => {
      await animate(
        scope.current,
        { opacity: 1, rotate: 360, scale: 1 },
        { duration: 1, delay: 1 }
      );
      await animate(
        scope.current,
        { x: -100, rotate: -360 },
        { duration: 1.5 }
      );
      await animate(scope.current, { y: -100 }, {});
      await animate(scope.current, { x: 0, rotate: 0 }, { duration: 1.5 });
      await animate(scope.current, { y: 0 }, {});
    })();
  }, []);

  return (
    <motion.h1 ref={scope} initial={{ opacity: 0, scale: 0 }}>
      🐺
    </motion.h1>
  );
}
