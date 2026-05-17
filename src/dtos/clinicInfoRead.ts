import type { SpecialtyType } from "../records/specialties";

export interface ClinicInfoRead {
  id: number;
  nameEng: string;
  nameKor: string;
  phone: string;
  hours: string;
  address: string;
  lat: number;
  long: number;
  specialty: SpecialtyType;
}

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
