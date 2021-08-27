import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} Guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - <span className="font-semibold">{range} </span> - for{" "}
            {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div
            className="hidden lg:inline-flex space-x-2 
          text-gray-800 whitespace-nowrap mb-3"
          >
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Typer of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filter</p>
          </div>
          <div className="">
            {searchResults.map((item) => (
              <InfoCard
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults: searchResults,
    },
  };
}
