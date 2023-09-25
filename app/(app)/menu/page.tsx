"use client";
import { HeaderComponent } from "@/components/General/HeaderComponent";
import { Menu as MenuComponent } from "@/components/Menu/Menu";
import { useQuery } from "@apollo/client";
import { queryMenu } from "@/utils/querys";
import { CategoryQuery } from "@/typings"
import { selectParams } from "@/lib/redux";
import { useAppSelector } from "@/hooks/redux";
export default function Menu() {
  const { data: params } = useAppSelector(selectParams);
  const { loading, error, data } = useQuery<CategoryQuery>(queryMenu);
  return (
    <>
      <HeaderComponent
        title={params?.getParams.menuSectionTitle || ''}
        titleFontSize={14.8}
        description={params?.getParams.menuSectionSubtitle || ''}
        descriptionFontSize={3.2}
        ubication={'left'}
        showOpenTime={false}
        textAling={'left'}
        textContainerWidth={55}
        background={params?.getParams.backgroundMenu}
      />
      {data && data.categories.map((category, index) => {
        return (
          <MenuComponent data={category} key={index} loopIndex={index} />
        )
      })}
    </>
  );
}
