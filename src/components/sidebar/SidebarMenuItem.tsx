import { ActiveLink } from "../active-link/ActiveLink";
interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subtitle }: Props) => {
    return (
        <ActiveLink path={path}>
            <>
                <div>{icon}</div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold leading-5 text-white">{title}</span>
                    <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
                </div>
            </>
        </ActiveLink>
    );
};
