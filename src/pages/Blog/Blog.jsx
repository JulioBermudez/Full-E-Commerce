import PageHeader from "../../components/PageHeader/PageHeader"

const title ="Blog Page"
const currentPage = "Blogs"

const Blog = () => {
  return (
    <PageHeader title = {title} currentPage={currentPage}/>
  )
}

export default Blog