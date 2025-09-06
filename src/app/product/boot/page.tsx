export default async function BootPage() {
  const [boot, shoe] = await Promise.all([
    fetch("http://my-db/product/boot"),
    fetch("http://my-db/product/shoe"),
  ]);

  const [bootData, shoeData] = await Promise.all([boot.json(), shoe.json()]);

  return (
    <div>
      <h1>Boot Page</h1>
      <p>{bootData.title}</p>
      <p>{shoeData.title}</p>
    </div>
  );
}
