import * as React from "react";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={` shadow-md rounded-xl p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={`p-2 ${className}`}>{children}</div>;
}
