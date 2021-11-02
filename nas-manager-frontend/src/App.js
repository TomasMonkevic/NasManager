import React, { useState, useEffect } from "react";

import { HelloRequest } from "./protobuf/Greeter_pb"
import { GreeterServiceClient } from "./protobuf/Greeter_grpc_web_pb"

var client = new GreeterServiceClient("http://localhost:6060")

function App() {
  const [ greet, setGreet] = useState("No greet :(")

  const getGreet = () => {
    console.log("greet!");

    var greetRequest = new HelloRequest();
    greetRequest.setName("Tomas");
    var stream = client.itKeepsReplying(greetRequest, {});

    stream.on("data", (response) => setGreet(response.getMessage()));
  };

  useEffect(() => getGreet(), []);

  return (
    <div>
      Greets: { greet }
    </div>
  );
}

export default App;
