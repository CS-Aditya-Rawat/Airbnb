import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { StarIcon } from "@heroicons/react/solid";
import { Room } from "@material-ui/icons";
function Map({ searchResults }) {
  const [selectedLocation, setSelectedLoaction] = useState({});
  console.log(selectedLocation);
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
      //   mapStyle="mapbox://styles/xcaliber1910/ckstwaklv4lag17qivkdu3zrl"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Room
              style={{
                fontSize: viewport.zoom * 4,
                cursor: "pointer",
                color: "#FE595E",
              }}
              onClick={() => setSelectedLoaction(result)}
            />
          </Marker>

          {/* PopUp */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLoaction({})}
              latitude={result.lat}
              longitude={result.long}
              closeOnClick={true}
            >
              <div className="flex flex-col p-2 rounded-full">
                <p className="text-center font-semibold mb-2">{result.title}</p>
                <div className="flex justify-between">
                  <p className="flex">
                    <StarIcon className="h-5 mr-1 text-[#FFD700]" />
                    {result.star}
                  </p>
                  <p className="font-semibold">{result.price}</p>
                </div>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
