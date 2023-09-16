"use client";
import { HeaderComponent } from "@/components/General/HeaderComponent";
import { Menu as MenuComponent } from "@/components/Menu/Menu";
export default function Menu() {
  // temporal Data 
  const data = {
    "data": {
      "categories": [
        {
          "id": "64f4da8fd0f3d7649fb34cb6",
          "name": "Starters",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          "disabled": false,
          "image": "https://i.pinimg.com/originals/b8/1d/55/b81d55c10b9a7769b550a85148ed32d7.png",
          "products": [
            {
              "name": "Grilled Okra and Tomatoes ",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              "disabled": false,
              "id": "64f4da95d0f3d7649fb34cb801",
              "image": "https://www.feedipedia.org/sites/default/files/images/tomato_fruits.jpg",
              "price": 20,
              "priority": 1
            },
            {
              "name": "Grilled Okra and Tomatoes ",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              "disabled": false,
              "id": "64f4da95d0f3d7649fb34cb802",
              "image": "https://www.feedipedia.org/sites/default/files/images/tomato_fruits.jpg",
              "price": 20,
              "priority": 2
            },
            {
              "name": "Grilled Okra and Tomatoes ",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              "disabled": false,
              "id": "64f4da95d0f3d7649fb34cb803",
              "image": "https://www.feedipedia.org/sites/default/files/images/tomato_fruits.jpg",
              "price": 20,
              "priority": 3
            }
          ]
        },
        {
          "id": "64f4dc39c14359d45054b506",
          "name": "Mains",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          "disabled": false,
          "image": "http://sitk.com/wp-content/uploads/2013/12/MainCourse_03.jpg",
          "products": [
            {
              "name": "Grilled Okra and Tomatoes ",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              "disabled": false,
              "id": "64f4da95d0f3d7649fb34cb804",
              "image": "https://www.feedipedia.org/sites/default/files/images/tomato_fruits.jpg",
              "price": 20,
              "priority": 1
            },
            {
              "name": "Grilled Okra and Tomatoes ",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              "disabled": false,
              "id": "64f4da95d0f3d7649fb34cb805",
              "image": "https://www.feedipedia.org/sites/default/files/images/tomato_fruits.jpg",
              "price": 20,
              "priority": 2
            },
            {
              "name": "Grilled Okra and Tomatoes ",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              "disabled": false,
              "id": "64f4da95d0f3d7649fb34cb806",
              "image": "https://www.feedipedia.org/sites/default/files/images/tomato_fruits.jpg",
              "price": 20,
              "priority": 3
            }
          ]
        },
        {
          "id": "64f4dc8cc14359d45054b50c",
          "name": "Pastries & Drinks",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          "disabled": false,
          "image": "https://images6.alphacoders.com/703/703111.jpg",
          "products": [
            {
              "name": "Grilled Okra and Tomatoes ",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              "disabled": false,
              "id": "64f4da95d0f3d7649fb34cb807",
              "image": "https://www.feedipedia.org/sites/default/files/images/tomato_fruits.jpg",
              "price": 20,
              "priority": 1
            },
            {
              "name": "Grilled Okra and Tomatoes ",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              "disabled": false,
              "id": "64f4da95d0f3d7649fb34cb808",
              "image": "https://www.feedipedia.org/sites/default/files/images/tomato_fruits.jpg",
              "price": 20,
              "priority": 2
            },
            {
              "name": "Grilled Okra and Tomatoes ",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
              "disabled": false,
              "id": "64f4da95d0f3d7649fb34cb809",
              "image": "https://www.feedipedia.org/sites/default/files/images/tomato_fruits.jpg",
              "price": 20,
              "priority": 3
            }
          ]
        }
      ]
    }
  }
  // temporal Data
  return (
    <>
      <HeaderComponent
        title={'View Our New Menu'}
        titleFontSize={14.8}
        description={'The fresh ingredients for you every day'}
        descriptionFontSize={3.2}
        ubication={'left'}
        showOpenTime={true}
        textAling={'left'}
        textContainerWidth={55}
      />
      {data.data.categories.map((category, index) => {
        return (
          <MenuComponent data={category} key={index} loopIndex={index} />
        )
      })}
    </>
  );
}
