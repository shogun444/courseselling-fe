export default function Navbar() {
  const nav = ["Home", "Features", "Compare", "Reviews", "FAQ"];
  return (
    <>
      {nav.map((itm, idx) => (
        <span className=" mr-6 text-cyan-950  font-semibold " key={idx}>
          {itm}
        </span>
      ))}
    </>
  );
}
