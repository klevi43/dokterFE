import React from "react";
import type { ClinicInfoRead } from "../../dtos/clinicInfoRead";
import { Phone, Clock, MapPin } from "lucide-react";
interface Props {
  clinicInfo: ClinicInfoRead;
}
const ClinicInfoCard = ({ clinicInfo }: Props) => {
  return (
    <>
      <div className="flex flex-col bg-slate-50 gap-6 border-2 px-2 py-4 text-gray-400 rounded-t-4xl">
        <div>
          <div className="flex flex-col  text-gray-700">
            <div className="flex justify-between">
              <h2 className="font-semibold text-[1.2rem]">
                {clinicInfo.nameEng}
              </h2>
              {/* <div className="bg-brand-100 rounded-full w-fit px-2">
                <div className="text-brand-600 font-medium">Eye care</div>
              </div> */}
            </div>

            {/* <span className="text-gray-400">|</span> */}
            <div className="flex items-center gap-2">
              <h2 className="text-gray-400 text-[1rem]">
                {clinicInfo.nameKor}
              </h2>
              {/* <div className="bg-brand-100 rounded-lg w-fit px-2">
                <div className="text-brand-600 font-medium">Eye care</div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="bg-brand-100 rounded-lg w-fit px-2">
            <div className="text-brand-600 font-medium">Eye care</div>
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="text-gray-700 font-normal flex flex-col"></div>
            <div className="font-semibold text-brand-600 flex items-center gap-2">
              <Phone className="text-[#444444]" fill="#444444" size={16} />
              <span>{clinicInfo.phone}</span>
            </div>
            <div className="flex gap-2 text-gray-600 items-center">
              <Clock size={16} /> <span>{clinicInfo.hours}</span>
            </div>
            <div className="flex text-gray-600 gap-2">
              <MapPin size={16} className="shrink-0 mt-1" />
              <div className="">
                {clinicInfo.address} |{" "}
                <span className="text-brand-600 font-medium">copy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicInfoCard;
