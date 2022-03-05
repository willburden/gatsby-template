import React from "react";
import type { ReactNode } from "react";

import * as style from "./layout.module.scss";

export default function Layout({ children }: { children?: ReactNode }) {
    return <div className={style.layout}>{children}</div>;
}
