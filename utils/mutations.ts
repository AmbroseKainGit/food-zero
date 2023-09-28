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
export const createContactMutation = gql`
  mutation CreateContact($createContactInput2: CreateContactInput!) {
    createContact(input: $createContactInput2) {
      email
      id
    }
  }
`
export const createStaffMutation = gql`
  mutation CreateStaff($createStaffInput2: CreateStaffInput!) {
    createStaff(input: $createStaffInput2) {
      description
      disabled
      id
      image
      name
      role
    }
  }
`
export const updateStaffMutation = gql`
  mutation UpdateStaff($updateStaffInput2: UpdateStaffInput!) {
    updateStaff(input: $updateStaffInput2) {
      description
      disabled
      id
      image
      name
      role
    }
  }
`
export const deleteStaffMutation = gql`
  mutation DeleteStaff($deleteStaffId: ID!) {
    deleteStaff(id: $deleteStaffId) {
      description
      disabled
      id
      image
      name
      role
    }
  }
`
export const createMeatProcessMutation = gql`
  mutation CreateMeatProcess($createMeatProcessInput2: CreateMeatProcessInput!) {
    createMeatProcess(input: $createMeatProcessInput2) {
      description
      id
      image
      name
      order
    }
  }
`
export const deleteMeatProcessMutation = gql`
  mutation DeleteMeatProcess($deleteMeatProcessId: ID!) {
    deleteMeatProcess(id: $deleteMeatProcessId) {
      description
      id
      image
      name
      order
    }
  }
`
export const updateMeatProcessMutation = gql`
  mutation UpdateMeatProcess($updateMeatProcessInput2: UpdateMeatProcessInput!) {
    updateMeatProcess(input: $updateMeatProcessInput2) {
      id
      description
      image
      name
      order
    }
  }
`
export const createCategoryMutation = gql`
  mutation CreateCategory($input: CategoryInput!) {
    createCategory(input: $input) {
      description
      disabled
      id
      image
      name
    }
  }
`
export const updateCategoryMutation = gql`
  mutation UpdateCategory($updateCategoryInput2: UpdateCategoryInput!) {
    updateCategory(input: $updateCategoryInput2) {
      description
      disabled
      id
      image
      name
    }
  }
`
