import { createContext } from "react";
import { StoreInterface } from "../type";

const StoreContext = createContext<StoreInterface>(null!);

export default StoreContext;
