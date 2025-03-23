import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import React, { Fragment } from "react";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
                {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 rounded-lg outline outline-2 outline-white/10"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
