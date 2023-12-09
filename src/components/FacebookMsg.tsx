"use client";

import { FacebookProvider, CustomChat } from "react-facebook";

function FacebookMsg() {
  return (
    <FacebookProvider appId="761457112471246" chatSupport>
      <CustomChat pageId="137961782734683" minimized={true}/>
    </FacebookProvider>
  );
}

export default FacebookMsg;
