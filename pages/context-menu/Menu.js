import useContextMenu from "./useContextMenu";
import * as React from "react";

const ContextMenu = () => {
  const { anchorPoint, show } = useContextMenu();

  if (show) {
    return (
      <div style={{ top: anchorPoint.y, left: anchorPoint.x }} className="absolute">
        <p>Cut ctrlX/⌘X</p>
        <p>Copy ctrlC/⌘C</p>
        <p>Paste ctrlV/⌘V</p>
      </div>
    );
  }
  return <></>;
};

export default ContextMenu;
