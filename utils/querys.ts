import { gql } from '@apollo/client'
export const queryCategories = gql`
  query Categories {
    categories {
      disabled
      description
      image
    }
  }
`
export const queryMenu = gql`
  query Categories {
    categories {
      id
      name
      description
      image
      products {
        name
        description
        disabled
        id
        image
        price
        priority
      }
    }
  }
`
export const queryStaff = gql`
  query Staff {
    staff {
      id
      name
      description
      image
      role
      disabled
    }
  }
`
export const queryGetAllMeatProcess = gql`
  query GetAllMeatProcess {
    getAllMeatProcess {
      id
      image
      name
      description
      order
    }
  }
`
export const queryGetParams = gql`
  query GetParams {
    getParams {
      address
      aboutSectionTitle
      aboutSectionParagraph
      aboutBannerVideoTitle
      aboutBannerVideoParagraph
      aboutBannerVideoId
      aboutHeaderSectionTitle
      aboutHeaderSectionParagraph
      aboutHeaderSectionImage
      backgroundAbout
      backgroundBlogDetail
      backgroundContact
      backgroundBlog
      backgroundCover
      backgroundMenu
      blogDetailCommentTitle
      blogSectionSubtitle
      blogSectionTitle
      contactSectionSubtitle
      contactSectionTitle
      email
      facebook
      homeSection1Images
      homeSection1ImagesText1
      homeSection1ImagesText2
      homeSection1Paragraph1
      homeSection1Paragraph2
      homeSection1Subtitle
      homeSection1Title
      homeSection2ButtonText
      homeSection2Subtitle
      homeSection2Title
      homeSection3Images
      homeSection3Paragraph
      homeSection3Title
      homeSectionMenuSubtitle
      homeSectionMenuTitle
      id
      instagram
      menuSectionSubtitle
      menuSectionTitle
      phone
      titleCommentsHome
      twitter
      youtube
    }
  }
`
