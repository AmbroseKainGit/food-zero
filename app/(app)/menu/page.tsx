"use client";
import { HeaderComponent } from "@/components/General/HeaderComponent";
import { Menu as MenuComponent } from "@/components/Menu/Menu";
import { useQuery } from "@apollo/client";
import { queryMenu } from "@/utils/querys";
import { CategoryQuery } from "@/typings"
export default function Menu() {
 
  const { loading, error, data } = useQuery<CategoryQuery>(queryMenu);
  return (
    <>
      <HeaderComponent
        title={'View Our New Menu'}
        titleFontSize={14.8}
        description={'The fresh ingredients for you every day'}
        descriptionFontSize={3.2}
        ubication={'left'}
        showOpenTime={false}
        textAling={'left'}
        textContainerWidth={55}
      />
      {data && data.categories.map((category, index) => {
        return (
          <MenuComponent data={category} key={index} loopIndex={index} />
        )
      })}
    </>
  );
}
