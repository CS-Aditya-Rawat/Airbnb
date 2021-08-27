import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import logo from "../public/logo.png";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header
      className="sticky top-0 z-50 grid 
    grid-cols-3 bg-white shadow-md p-5 md:px-10"
    >
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 
      cursor-pointer my-auto"
      >
        <Image
          src={logo}
          alt="LOGO"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div
        className="flex iterms-center md:border-2 md:border-gray-400
      rounded-full py-2 md:shadow-sm"
      >
        <input
          className="flex-grow pl-5 bg-transparent outline-none
          text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon
          className="hidden md:inline-flex 
        h-8 bg-[#FF385C] text-white 
        rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right */}
      <div
        className="flex items-center 
      space-x-4 justify-end text-gray-700"
      >
        <p
          className="hidden md:inline cursor-pointer font-semibold 
        hover:bg-gray-100 rounded-full p-3"
        >
          Become a host
        </p>
        <GlobeAltIcon
          className="h-6 cursor-pointer hover:bg-gray-100 
        rounded-full hover:animate-spin"
        />
        <div
          className="flex items-center space-x-2
        border-2 rounded-full p-2 cursor-pointer
        hover:shadow-lg"
        >
          <MenuIcon className="h-7" />
          <UserCircleIcon className="h-7" />
        </div>
      </div>
      {searchInput && (
        <div
          className="flex flex-col col-span-3 mx-auto
        mt-1"
        >
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              type="number"
              className="w-12 pl-2 outline-none text-lg text-red-400"
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
