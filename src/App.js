import "./styles/global.css";
import { RecoilRoot } from "recoil";
import HomeIndex from "./HomeIndex";

export default function App() {
  return (
      <RecoilRoot>
        <HomeIndex  />
      </RecoilRoot>
  );
}


