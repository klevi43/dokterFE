import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ClinicMap from "./components/ClinicMap";
import ClinicInfoCard from "./components/cards/ClinicInfoCard";
import type { ClinicInfoRead } from "./dtos/clinicInfoRead";
function App() {
  const [count, setCount] = useState(0);
  const clinic1: ClinicInfoRead = {
    id: 1,
    nameEng: "BGN Eye Clinic Jamsil",
    nameKor: "밝은눈안과의원 잠실점",
    phone: "010-0000-0000",
    hours: "9:00 - 18:00, M-F",
    address:
      "서울특별시 송파구 올림픽로 300 롯데월드타워앤드롯데월드몰 월드타워동 11층",
    lat: 37.5126759,
    long: 127.1025517,
    specialty: "eye",
  };

  const clinic2: ClinicInfoRead = {
    id: 2,
    nameEng: "Kang Joo Il English-Speaking Dental Clinic",
    nameKor: "브라이트 치과의원",
    phone: "010-0000-0000",
    hours: "9:00 - 18:00, M-F",
    address: "서울특별시 송파구 백제고분로 130, 3층",
    lat: 37.5059915,
    long: 127.0813645,
    specialty: "eye",
  };

  return (
    <>
      <h1>ayy</h1>
      <ClinicInfoCard clinicInfo={clinic1} />
      {/* <ClinicMap /> */}
    </>
  );
}

export default App;
