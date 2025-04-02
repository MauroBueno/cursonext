export default function Estilo(props) {
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "green" : "blue",
        }}
      >
        Texto
      </h1>
    </div>
  );
}
