import "./styles/global.css";
import { RecoilRoot } from "recoil";
import HomeIndex from "./HomeIndex";
import { SessionProvider } from "next-auth/react";

// export default function App() {
//   return (
//       <RecoilRoot>
//         <HomeIndex  />
//       </RecoilRoot>
//   );
// }

export default function App({
  Component,
  pageProps: { session, ...pageProps},
}) {
  return (
      <SessionProvider>
        <Component {...pageProps}  />
      </SessionProvider>
  );
}

