import { gql } from '@apollo/client'

export const updateParamsMutation = gql`
  mutation UpdateParam($updateParamInput1: UpdateParamInput!) {
    updateParam(input: $updateParamInput1) {
      address
      aboutSectionTitle
      aboutSectionParagraph
      aboutBannerVideoTitle
      aboutBannerVideoParagraph
      aboutBannerVideoId
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
