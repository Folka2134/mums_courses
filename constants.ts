export const navItems = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Courses",
    path: "/courses"
  },
  {
    label: "Contact",
    path: "/contact"
  }
]

export const courseDefaultValues = {
  title: "",
  desc: "",
  imageUrl: "",
  price: "",
  duration: "",
  datePosted: new Date(),
  isFree: false
}

export const dummyCourses = [
  {
    _id: "1",
    title: "Test title",
    description: "Test description",
    imageUrl: "test image",
    price: "test price",
    duration: "test duration",
    isFree: false,
    datePosted: new Date()
  },
  {
    _id: "2",
    title: "Test title2",
    description: "Test description2",
    imageUrl: "test image2",
    price: "test price2",
    duration: "test duration2",
    isFree: false,
    datePosted: new Date()
  },
  {
    _id: "3",
    title: "Test title3",
    description: "Test description3",
    imageUrl: "test image3",
    price: "test price3",
    duration: "test duration3",
    isFree: false,
    datePosted: new Date()
  }
]