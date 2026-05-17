import React from "react";
import {
  NavermapsProvider,
  Container as MapDiv,
  NaverMap,
  Marker,
} from "react-naver-maps";
import { SPECIALTIES } from "../records/specialties";
import EyeIcon from "./icons/EyeIcon";
import MapContent from "./MapContent";
import InternalIcon from "./icons/InternalIcon";
import DentalIcon from "./icons/DentalIcon";
import DermatologyIcon from "./icons/DermatologyIcon";
import ObgynIcon from "./icons/ObgynIcon";
import EntIcon from "./icons/EntIcon";
const ClinicMap = () => {
  //map.naver.com/p/entry/place/1285266617?placePath=/home?entry=pll&fromPanelNum=1&additionalHeight=76&timestamp=202605171006&locale=ko&svcName=map_pcv5&fromPanelNum=1&additionalHeight=76&timestamp=202605171006&locale=ko&svcName=map_pcv5&from=map&searchType=place&lng=127.1025517&lat=37.5126759&c=15.00,0,0,0,dh
  return (
    <div>
      <div>
        <p>eye</p>
        <EyeIcon />
      </div>
      <div>
        Internal medicine
        <InternalIcon />
      </div>
      <div>
        dental
        <DentalIcon />
      </div>
      <div>
        dermatolgy
        <DermatologyIcon />
      </div>
      <div>
        obgyn
        <ObgynIcon />
      </div>
      <div>
        ent
        <EntIcon />
      </div>

      {/* <NavermapsProvider ncpKeyId={import.meta.env.VITE_NAVER_CLIENT_ID}>
        <MapDiv className="min-h-screen w-full">
          <MapContent />
        </MapDiv>
      </NavermapsProvider> */}
    </div>
  );
};

export default ClinicMap;
