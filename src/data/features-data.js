import {
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import { GoPackageDependencies } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { SiCodereview } from "react-icons/si";
import { MdDocumentScanner } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";



export const featuresData = [
  {
    color: "gray",
    title: "Dependency Management",
    icon: GoPackageDependencies,
    description:
      "manage code dependencies, help users identify and resolve issues with outdated or incompatible libraries and packages.",
  },
  {
    color: "gray",
    title: "Generate Code Snippet",
    icon: FaCode,
    description:
      "Generate and share smart code snippets with the world or with your team.",
  },
  {
    color: "gray",
    title: "Secure Code Analysis",
    icon: MdOutlineSecurity,
    description:
      " Scanning detects and resolves security vulnerabilities in code, ensuring robust protection against cyber threats.",
  },
  
  {
    color: "gray",
    title: "Code Profiling",
    icon: SiCodereview,
    description:
      "Offer insights on code performance, including execution time, memory usage, and resource bottlenecks, aiding in code optimization.",
  },
  {
    color: "gray",
    title: "Automaed Code Documentation",
    icon: MdDocumentScanner,
    description:
      "Generate documentation from the code automatically, including comments, function signatures, and explanations of code functionality",
  },
  {
    color: "gray",
    title: "Optimization",
    icon: GrOptimize,
    description:
      "Optimizing code involves improving the efficiency and performance of a program without altering its external behavior..",
  },
 
];

export default featuresData;
