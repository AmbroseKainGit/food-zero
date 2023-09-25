"use client";
import { About } from "@/components/About/About";
import { HeaderComponent } from "@/components/General/HeaderComponent";
import { Staff } from "@/components/Staff/Staff";
import { useQuery } from "@apollo/client";
import { queryStaff, queryGetAllMeatProcess } from "@/utils/querys";
import { VideoBanner } from "@/components/VideoBanner/VideoBanner";
import { Reservation } from "@/components/General/Reservation";
import { StaffQuery, MeatProcessQuery } from "@/typings"
import { Process } from "@/components/Process/Process";
import { useAppSelector } from "@/hooks/redux";
import { selectParams } from "@/lib/redux";
export default function Menu() {
  const { loading, error, data } = useQuery<StaffQuery>(queryStaff);
  const { loading: loadingMP, error: errorMP, data: dataMeatProcess } = useQuery<MeatProcessQuery>(queryGetAllMeatProcess);
  const { data: params } = useAppSelector(selectParams);
 
  return (
    <>
      <HeaderComponent
        title={params?.getParams.aboutHeaderSectionTitle || ''}
        titleFontSize={11.8}
        description={params?.getParams.aboutHeaderSectionParagraph || ''}
        descriptionFontSize={3.2}
        ubication={'right'}
        textAling={'left'}
        textContainerWidth={55}
        background={params?.getParams.aboutHeaderSectionImage}
      />
      <About title={params?.getParams.aboutSectionTitle || ''} description={params?.getParams.aboutSectionParagraph || ''} image={params?.getParams.backgroundAbout || '/static/about_cover.webp'} />
      {data && data.staff.map((staffMember, index) => {
        return (
          <Staff data={staffMember} key={index} loopIndex={index} />
        )
      })}
      <VideoBanner videoId={params?.getParams.aboutBannerVideoId || ''} title={params?.getParams.aboutBannerVideoTitle || ''} description={params?.getParams.aboutBannerVideoParagraph || ''} />
      {dataMeatProcess && dataMeatProcess.getAllMeatProcess.map((meatProcess, index) => {
        return (
          <Process data={meatProcess} key={index} loopIndex={index} processTitle="Sophisticated Process" />
        )
      })}
      <div className="calendar-container-main">
        <Reservation />
      </div>
    </>
  );
}
