// components/ScrollLink.tsx
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
// mirror the props of next/link component
type AnchorProps = Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

const buffer = -50;

// component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

        e.preventDefault();
        //remove everything before the hash
        const targetId = e.currentTarget.href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);

        if (elem){
            window.scrollTo({
                top: elem?.getBoundingClientRect().top + buffer,
                behavior: "smooth",
            });
        }


    };
    return (
        <Link {...props} onClick={handleScroll}>
            {children}
        </Link>
    );
};
export default ScrollLink;