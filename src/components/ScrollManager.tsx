import React from "react";

type Props = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const ScrollManager = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {React.Children.map(children, (e) => {
        if (!React.isValidElement<Props>(e)) return e;

        return React.cloneElement(e, {
          onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
            e.props.onClick?.(event);

            if (event.defaultPrevented) return;

            const href = e.props.href;
            if (!href?.startsWith("#")) return;

            const sectionElement = document.getElementById(
              href.slice(1)
            );

            if (!sectionElement) return;

            event.preventDefault();

            sectionElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          },
        });
      })}
    </>
  );
};

export default ScrollManager;