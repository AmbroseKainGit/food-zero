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
      contactCover1
      contactCover2
      email
      facebook
      homeSection1Image1
      homeSection1Image2
      homeSection3Image1
      homeSection3Image2
      homeSection3Image3
      homeSection1ImagesText1
      homeSection1ImagesText2
      homeSection1Paragraph1
      homeSection1Paragraph2
      homeSection1Subtitle
      homeSection1Title
      homeSection2ButtonText
      homeSection2Subtitle
      homeSection2Title
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
