import React, { useRef } from "react";

const NaverMap = () => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  /*
    useRef
    - keep a value that survives rerenders
    - 
*/
  const setContainer = (el: HTMLDivElement | null) => {
    if (el && !mapRef.current) {
      mapRef.current = new naver.maps.Map(el, {
        center: new naver.maps.LatLng(37.5665, 126.978),
        zoom: 14,
      });
    }
  };

  return (
    <div
      ref={setContainer}
      style={{ width: "100%", height: "100%", minHeight: 400 }}
    />
  );
};

export default NaverMap;
