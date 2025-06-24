import PageTitle from "../components/common/PageTitle"
import Layout from "../components/Layout"
import ProductList from "../components/ProductsComponents/ProductList"


const Products = () => {
    const title = 'Mecca mosques most needed'
    return (
        <Layout>
            <PageTitle title={title} />
            <ProductList />
        </Layout>
    )
}

export default Products