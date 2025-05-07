import Button from "../../../../Button";

export default function SearchBar() {
  return (
    <form className="flex grow-1 justify-center">
      <div className="bg-white text-black p-2 m-2 rounded-sm flex justify-between 2xl:w-[64rem] xl:w-[48rem] lg:w-[32rem] md:w-[24rem] w-auto">
        <input className="w-auto block grow-1" type="text" placeholder="Search for products" />
        <Button type="submit">Search</Button>
      </div> 
    </form>
  )
}
