import React from "react";
import {
  NavermapsProvider,
  Container as MapDiv,
  NaverMap,
  Marker,
} from "react-naver-maps";
import { SPECIALTIES } from "../records/specialties";
const ClinicMap = () => {
  //map.naver.com/p/entry/place/1285266617?placePath=/home?entry=pll&fromPanelNum=1&additionalHeight=76&timestamp=202605171006&locale=ko&svcName=map_pcv5&fromPanelNum=1&additionalHeight=76&timestamp=202605171006&locale=ko&svcName=map_pcv5&from=map&searchType=place&lng=127.1025517&lat=37.5126759&c=15.00,0,0,0,dh
  return (
    <div>
      <NavermapsProvider ncpKeyId={import.meta.env.VITE_NAVER_CLIENT_ID}>
        <MapDiv className="min-h-screen w-full">
          <NaverMap
            defaultCenter={new naver.maps.LatLng(37.5126759, 127.1025517)}
          >
            <Marker
              icon={{
                content: SPECIALTIES.eye.icon,
                anchor: new naver.maps.Point(20, 20),
              }}
              position={new naver.maps.LatLng(37.5126759, 127.1025517)}
            />
          </NaverMap>
        </MapDiv>
      </NavermapsProvider>
    </div>
  );
};

export default ClinicMap;
