export default function Navbar(){
  const nav  = [
'Home','Features','Compare','Reviews','FAQ']
  return(<>
  {nav.map((itm,idx)=>(<span className="pr-6 text-violet-950 text-sm font-semibold " key={idx}>{itm}</span>))}
  </>)
}