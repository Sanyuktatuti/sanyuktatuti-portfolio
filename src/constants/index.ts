import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiMongodb,
  SiAmazonaws,
  SiDocker,
  SiKeras,
  SiJupyter,
  SiNumpy,
  SiPandas
} from "react-icons/si";
import { IconType } from "react-icons";

export const personalInfo = {
  name: "Sanyukta Tuti",
  title: "ML/AI Engineer & MS Computer Science @ NYU",
  email: "sanyuktatuti@gmail.com",
  phone: "+1 (347) 495 4000",
  roles: ["ML/AI Engineer", "Deep Learning Expert", "Problem Solver"],
  socialLinks: {
    linkedin: "https://linkedin.com/in/sanyuktatuti",
    github: "https://github.com/Sanyuktatuti",
  },
};

interface TechIcon {
  name: string;
  icon: IconType;
  color: string;
}

export const techIcons: TechIcon[] = [
  { name: "python", icon: SiPython, color: "#3776AB" },
  { name: "tensorflow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "pytorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "opencv", icon: SiOpencv, color: "#5C3EE8" },
  { name: "keras", icon: SiKeras, color: "#D00000" },
  { name: "jupyter", icon: SiJupyter, color: "#F37626" },
  { name: "numpy", icon: SiNumpy, color: "#013243" },
  { name: "pandas", icon: SiPandas, color: "#150458" },
  { name: "mongodb", icon: SiMongodb, color: "#47A248" },
  { name: "aws", icon: SiAmazonaws, color: "#FF9900" },
  { name: "docker", icon: SiDocker, color: "#2496ED" },
];