import { Link } from "@inertiajs/inertia-react";
import Icon from "../../../public/icons/Icon";

export const BoxLink = ({ href, children, icon, trailingIcon = true }) => {
    return (
        <Link
            href={href}
            onPointerDown={() => {
                console.log("yoo");
            }}
            className="group flex h-fit w-fit flex-row items-center gap-8 transition-all hover:ml-4"
        >
            <Icon className="rounded-icon p-2" icon={icon} />
            <p>{children}</p>
            {trailingIcon && (
                <Icon
                    stroke="transparent"
                    size={48}
                    icon="arrow-right"
                    className="scale-x-0 transition-all group-hover:scale-x-100"
                />
            )}
        </Link>
    );
};
