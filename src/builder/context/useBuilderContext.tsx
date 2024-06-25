import { useContext } from "react";
import { BuilderContext } from "./builderContext";

export const useBuilderContext = () => {
    const context = useContext(BuilderContext);
    if (!context) {
      throw new Error('useBuilderContext must be used within an ItemProvider');
    }
    return context;
  };