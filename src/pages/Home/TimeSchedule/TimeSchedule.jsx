import { CalendarClock } from "lucide-react";
const TimeSchedule = () => {
  return (
    <section className="flex justify-between py-28 px-2 my-16 bg-black">
      <div className=" text-white flex gap-4 items-center">
        <CalendarClock className="h-8 w-8 text-yellow-400" />
        <div>
          <p className="text-[1.2rem]">We are open mondey-sunday</p>
          <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className=" text-white flex gap-4 items-center">
        <CalendarClock className="h-8 w-8 text-yellow-400" />
        <div>
          <p className="text-[1.2rem]">We are open mondey-sunday</p>
          <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className=" text-white flex gap-4 items-center">
        <CalendarClock className="h-8 w-8 text-yellow-400" />
        <div>
          <p className="text-[1.2rem]">We are open mondey-sunday</p>
          <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
    </section>
  );
};

export default TimeSchedule;
