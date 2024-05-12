import {
  BriefcaseIcon,
  ChartBarIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { SiCplusplus } from "react-icons/si";
import { BsFiletypeYml } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { DiRuby } from "react-icons/di";

// Define a mapping of programming languages to colors
const languageColors = {
  "C++": "blue",
  "Ruby": "red",
  "YML": "yellow",
  "Java": "orange",
  "Kotlin": "green",
  "Python": "purple",
};

export const contactData = [
  {
    title: "C++",
    icon: SiCplusplus,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Ruby",
    icon: DiRuby,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "YML",
    icon: BsFiletypeYml,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },{
    title: "Java",
    icon: FaJava,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Kotlin",
    icon: TbBrandKotlin,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Python",
    icon: SiPython,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

export const getColorForLanguage = (language) => {
  return languageColors[language] || "gray"; // Default to gray if no color is defined
};

export default contactData;
