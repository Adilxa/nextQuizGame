import { PropsWithChildren, Suspense } from "react";
import Loading from "../loading";

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div>
            <h1>Dashboard</h1>
            {children}
        </div>
    )
}