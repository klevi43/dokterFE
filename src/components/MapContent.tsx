import React from "react";
import { Marker, NaverMap, useNavermaps } from "react-naver-maps";
import { SPECIALTIES } from "../records/specialties";

const MapContent = () => {
  const navermaps = useNavermaps();
  return (
    <>
      <NaverMap defaultCenter={new navermaps.LatLng(37.5126759, 127.1025517)}>
        <Marker
          icon={{
            content: SPECIALTIES.eye.icon,
            anchor: new navermaps.Point(20, 20),
          }}
          position={new navermaps.LatLng(37.5126759, 127.1025517)}
        />
      </NaverMap>
    </>
  );
};

export default MapContent;
