function ChatPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "inherit",
      }}
    >
      <iframe
        style={{"border": "black"}}
        title="ab"
        allow="microphone;"
        width="1000"
        height="1000"
        src={`https://console.dialogflow.com/api-client/demo/embedded/83a02cde-3c3c-48ef-b2cb-125ff411f922`}
      ></iframe>
    </div>
  );
}

export default ChatPage;
