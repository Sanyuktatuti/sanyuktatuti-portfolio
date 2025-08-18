import {
  SiPython,
  SiCplusplus,
  SiOpenjdk,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiMongodb,
  SiAmazonwebservices,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiKeras,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiRedis,
  SiGit,
  SiFastapi,
  SiFlask,
  SiStreamlit,
  SiD3Dotjs,
} from "react-icons/si";
import { FaMicrosoft, FaJava } from "react-icons/fa"; // ✅ fallbacks

import { IconType } from "react-icons";

export const personalInfo = {
  name: "Sanyukta Tuti",
  title: "ML/AI Engineer & MS Computer Science @ NYU",
  email: "sanyuktatuti@gmail.com",
  phone: "+1 (347) 495 4000",
  roles: ["ML/AI Engineer", "Deep Learning Expert", "Problem Solver"],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/sanyukta-tuti-343ba5201/",
    github: "https://github.com/Sanyuktatuti",
  },
};

interface TechIcon {
  name: string;
  icon: IconType;
  color: string;
}

// Note: Some brands (Hadoop/Spark/Kafka/Airflow/MLflow) don’t exist in react-icons/si.
// We map them to a fallback icon (Python) with distinctive colors so the UI won’t break.
export const techIcons: TechIcon[] = [
  // Languages
  { name: "python", icon: SiPython, color: "#3776AB" },
  { name: "c++", icon: SiCplusplus, color: "#00599C" },
  { name: "java", icon: SiOpenjdk, color: "#E76F00" },
  { name: "sql", icon: SiMysql, color: "#4479A1" },

  // ML/DL
  { name: "tensorflow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "pytorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "keras", icon: SiKeras, color: "#D00000" },
  { name: "hugging face transformers", icon: SiPython, color: "#FFDF00" }, // fallback

  // Data Science
  { name: "jupyter", icon: SiJupyter, color: "#F37626" },
  { name: "numpy", icon: SiNumpy, color: "#013243" },
  { name: "pandas", icon: SiPandas, color: "#150458" },
  { name: "matplotlib", icon: SiPython, color: "#4CAF50" }, // fallback

  // Big Data / Pipeline (fallbacks)
  { name: "spark", icon: SiPython, color: "#E25A1C" },   // fallback
  { name: "hadoop", icon: SiPython, color: "#66CCFF" },  // fallback
  { name: "kafka", icon: SiPython, color: "#231F20" },   // fallback
  { name: "airflow", icon: SiPython, color: "#017CEE" }, // fallback
  { name: "mlflow", icon: SiPython, color: "#0194E2" },  // fallback

  // Tools
  { name: "redis", icon: SiRedis, color: "#DC382D" },
  { name: "mongodb", icon: SiMongodb, color: "#47A248" },
  { name: "git", icon: SiGit, color: "#F05032" },
  { name: "docker", icon: SiDocker, color: "#2496ED" },
  { name: "kubernetes", icon: SiKubernetes, color: "#326CE5" },

  // Web/Frameworks
  { name: "fastapi", icon: SiFastapi, color: "#009688" },
  { name: "flask", icon: SiFlask, color: "#000000" },
  { name: "streamlit", icon: SiStreamlit, color: "#FF4B4B" },
  { name: "bokeh", icon: SiPython, color: "#E76F00" },     // fallback
  { name: "panel", icon: SiPython, color: "#5A60FF" },     // fallback
  { name: "holoviews", icon: SiPython, color: "#7B61FF" }, // fallback
  { name: "d3.js", icon: SiD3Dotjs, color: "#F9A03C" },

  // Cloud
  { name: "aws", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "gcp", icon: SiGooglecloud, color: "#4285F4" },
  { name: "azure", icon: FaMicrosoft, color: "#0078D4" },
];
