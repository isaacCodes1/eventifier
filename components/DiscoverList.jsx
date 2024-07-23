import DiscoverCard from "./DiscoverCard";
import items from "./Discover";

const DiscoverList = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-8 montes font-semibold">Discover Best of Online Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-1 items-center ml-20 lg:ml-20">
        {items.slice(0, 6).map((item, index) => (
          <DiscoverCard 
            key={index}
            date={item.date}
            title={item.title}
            image={item.image}
            time={item.time}
            amount={item.amount}
            interested={item.interested}
            type={item.type}
            code={item.code}
            ticketImage="/public/images/small-ticket.png"
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="px-60 opensans py-5 border transition-all border-slate-700  rounded-md text-[16px]">See More</button>
      </div>
    </div>
  )
}

export default DiscoverList;