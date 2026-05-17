import eyeSvg from "../assets/eye-icon.svg?raw";

export type SpecialtyType = "eye" | "internal";

export interface SpecialtyIcon {
  icon: string;
}

export const SPECIALTIES: Record<SpecialtyType, SpecialtyIcon> = {
  eye: {
    icon: eyeSvg,
  },
  internal: {
    icon: "",
  },
};
