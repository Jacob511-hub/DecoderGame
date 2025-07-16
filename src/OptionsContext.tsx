import React from "react";

export type SetColorFunction = (colorId: number) => void;

interface OptionsContextType {
    onOptionClick?: (setter: SetColorFunction) => void;
    triggerColorSelect?: (colorId: number) => void;
}

export const OptionsContext = React.createContext<OptionsContextType>({});