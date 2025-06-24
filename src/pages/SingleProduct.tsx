import PageTitle from "../components/common/PageTitle"
import Layout from "../components/Layout"
import SingleComponents from "../components/SingleComponents/SingleComponents"


const SingleProduct = () => {
    const title = 'Product Details'
    return (
        <Layout>
            <PageTitle title={title} />
            <SingleComponents />
        </Layout>
    )
}

export default SingleProduct