import ComponentA from "./components/ComponentA";

function App() {
  return (
    <>
      <div>Homepage</div>
      <ComponentA
        name="bari"
        transport={["bmw", "mercy", "honda"]}
        product={{ tittle: "tas", harga: 20000000 }}
        blogs={[
          { judul: "cara membuat function di JS", author: "Auro" },
          { judul: "tips cuan banyak", author: "poniya" },
        ]}
      />
    </>
  );
}

export default App;
