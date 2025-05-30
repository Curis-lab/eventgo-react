import React from "react";
import { SWRConfig } from "swr";

const SWRProvider = ({ children }: { children: React.ReactNode }) => {

  const fetcher = (url:string) => fetcher(url);
    return <SWRConfig value={{fetcher, refreshInterval: 3000}}>{children}</SWRConfig>;
};

export default SWRProvider;
