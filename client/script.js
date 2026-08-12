const eventSource = new EventSource("http://localhost:3000/stream");

eventSource.onmessage = (event) => {
  console.log(event.data);
  document.getElementById("log").innerHTML = event.data;
};

eventSource.onerror = (event) => {
  console.error("Erro ao receber logs do servidor:", event);
};

eventSource.onopen = () => {
  console.log("Conexão estabelecida com o servidor");
};
