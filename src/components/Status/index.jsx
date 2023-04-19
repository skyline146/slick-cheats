import { ClipLoader } from "react-spinners";

import Develope from "./Develope/Develope";
import Undetected from "./Undetected/Undetected";
import Risk from "./Risk/Risk";
import Update from "./Update/Update";

export default function Status({ status }) {
  switch (status) {
    case "Undetected": {
      return <Undetected />;
    }
    case "Developing": {
      return <Develope />;
    }
    case "Risk": {
      return <Risk />;
    }
    case "On Update": {
      return <Update />;
    }
    default: {
      return <ClipLoader size={14} color="#caac0e" />;
    }
  }
}
