import { Link } from "@inertiajs/inertia-react";
import Icon from "../../../public/icons/Icon";

export const BoxLink = ({
    href,
    children,
    icon,
    size = 48,
    trailingIcon = true,
}) => {
    return (
        <Link
            href={href}
            onPointerDown={() => {
                console.log("yoo");
            }}
            className="group flex h-fit w-fit flex-row items-center gap-8 
                        transition-all hover:ml-4 focus:ml-4 active:ml-8"
        >
            <Icon className="rounded-icon p-2" icon={icon} size={size} />
            <p>{children}</p>
            {trailingIcon && (
                <Icon
                    stroke="transparent"
                    size={48}
                    icon="arrow-right"
                    className="scale-x-0 transition-all group-hover:scale-x-100 group-focus:scale-x-100"
                />
            )}
        </Link>
    );
};
