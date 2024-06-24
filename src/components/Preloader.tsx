import { Skeleton } from "./ui/skeleton";

export default function Preloader() {
    return (
        <div className="relative z-30 flex flex-col gap-8 w-full">
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
            <Skeleton className="h-12 w-full rounded-xl" />
            <div className="flex gap-4 w-full">
                <Skeleton className="h-44 w-[50%] rounded-xl" />
                <Skeleton className="h-44 w-[50%] rounded-xl" />
            </div>
        </div>
    );
}
