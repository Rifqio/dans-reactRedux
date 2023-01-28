import { useState } from "react";
import moment from "moment";
import GreetingsFunction from "../../components/Greetings_func";
export default function Home() {
  const getTime = parseInt(moment().format("HH"));
  const [time, setTime] = useState(getTime);
  return (
    <div>
      {" "}
      <GreetingsFunction
        user={"Budi"}
        time={time}
        getTime={getTime}
        setTime={setTime}
      />
    </div>
  );
}
