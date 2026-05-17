import eyeSvg from "../assets/eye-icon.svg?raw";

export type SpecialtyType = "eye" | "internal" | "dentist";

export interface SpecialtyIcon {
  icon: string;
}

export const SPECIALTIES: Record<SpecialtyType, SpecialtyIcon> = {
  eye: {
    icon: `<div class="bg-blue-300 rounded-lg border-2 border-gray-300 shadow-2xl">${eyeSvg}</div>`,
  },
  internal: {
    icon: "",
  },
  dentist: {
    icon: "",
  },
};
