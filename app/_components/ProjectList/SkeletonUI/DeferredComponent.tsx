import React, { ReactNode, useEffect, useState } from "react";

function DeferredComponent({ children, className }: { children: ReactNode; className: string }) {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    // 200ms 지난 후 children Render
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) {
    return null;
  }

  return <div className={className}>{children}</div>;
}

export default DeferredComponent;
