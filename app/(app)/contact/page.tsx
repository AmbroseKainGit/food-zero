"use client";
import { Contact } from "@/components/Contact/Contact";
import { HeaderComponent } from "@/components/General/HeaderComponent";
import { Reservation } from "@/components/General/Reservation";
import { useAppSelector } from "@/hooks/redux";
import { selectParams } from "@/lib/redux";
export default function Menu() {
  const { data: params } = useAppSelector(selectParams);
  return (
    <>
      <HeaderComponent
        title={params?.getParams.contactSectionTitle || ''}
        titleFontSize={14.8}
        description={params?.getParams.contactSectionSubtitle || ''}
        descriptionFontSize={3.2}
        ubication={'left'}
        showOpenTime={true}
        textAling={'left'}
        textContainerWidth={55}
        background={params?.getParams.backgroundContact}
      />
      <Contact
        email={params?.getParams.email || 'jondoe@email.com'}
        phone={params?.getParams.phone || '+ 01 123 456 789'}
        address={params?.getParams.address || 'New York, NY 10012, US'}
        cover2={params?.getParams.contactCover2 || '/static/contact_2.webp'}
        cover1={params?.getParams.contactCover1 || '/static/contact_1.webp'}
      />
      <div className="calendar-container-main">
        <Reservation />
      </div>
    </>
  );
}
