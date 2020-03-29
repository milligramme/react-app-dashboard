import React, { useState, useEffect } from "react";

import MainTemplate from "../../templates/MainTemplate";
import { Notif } from "../../organisms/NotificationBar";

const Home: React.FunctionComponent = () => {
  const [notif, setNotif] = useState<{ type: Notif, message: string}>();

  // example
  useEffect(() => {
    const rand = Math.random() * 10;
    const randomNotif = rand > 5 ?
      { type: "error" as Notif, message: `${rand}` } :
      { type: "info" as Notif, message: `${rand}` };

    setNotif(randomNotif);
  }, [setNotif]);

  return (
    <MainTemplate notif={notif}>
      hello
    </MainTemplate>
  );
}

export default Home;
