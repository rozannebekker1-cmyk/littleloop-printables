import React from "react";
import "./theme-decorations.css";

export type ThemeName =
  | "plain"
  | "rainbow"
  | "farm"
  | "ocean"
  | "space"
  | "jungle"
  | "polka-dots"
  | "stripes";

type Props = {
  theme: ThemeName;
};

const iconPath: Record<Exclude<ThemeName, "plain">, string[]> = {
  rainbow: [
    "/graphics/rainbow/rainbow-corner.svg",
    "/graphics/rainbow/star.svg",
    "/graphics/rainbow/heart.svg",
  ],
  farm: [
    "/graphics/farm/barn.svg",
    "/graphics/farm/pig.svg",
    "/graphics/farm/chicken.svg",
    "/graphics/farm/flower.svg",
  ],
  ocean: [
    "/graphics/ocean/fish.svg",
    "/graphics/ocean/whale.svg",
    "/graphics/ocean/starfish.svg",
  ],
  space: [
    "/graphics/space/rocket.svg",
    "/graphics/space/planet.svg",
    "/graphics/rainbow/star.svg",
  ],
  jungle: [
    "/graphics/jungle/leaf.svg",
    "/graphics/jungle/monkey.svg",
  ],
  "polka-dots": [
    "/graphics/dots/dot-cluster.svg",
  ],
  stripes: [
    "/graphics/stripes/stripe-corner.svg",
  ],
};

export function ThemeDecorations({ theme }: Props) {
  if (theme === "plain") return null;

  const icons = iconPath[theme];

  return (
    <div className={`themeDecorations theme-${theme}`} aria-hidden="true">
      {icons.map((src, index) => (
        <img
          key={`${theme}-${src}-${index}`}
          className={`themeIcon themeIcon-${index + 1}`}
          src={src}
          alt=""
        />
      ))}
    </div>
  );
}
