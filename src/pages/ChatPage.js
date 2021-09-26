function ChatPage() {
  return (
      <>
    <h1 style={{
        margin: 20,
      }}className="text-center">
  Learn More about CityCoin and MiamiCoin by talking to Titan!
    </h1>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "inherit",
        margin: 50,
      }}
    >

      <iframe
        style = {{border: "2px solid black", margin: "0"}} 
        title="titan"
        allow="microphone;"
        width="1000"
        height="1000"
        src={`https://console.dialogflow.com/api-client/demo/embedded/83a02cde-3c3c-48ef-b2cb-125ff411f922`}
      ></iframe>
    </div>
    </>
  );
}

export default ChatPage;
