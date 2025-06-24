import PageTitle from "../components/common/PageTitle"
import CarouselBanner from "../components/HomeComponents/CarouselBanner"
import LiveBanner from "../components/HomeComponents/LiveBanner"
import PremiumBox from "../components/HomeComponents/PremiumBox"
import ServiceIcons from "../components/HomeComponents/ServiceIcons"
import Layout from "../components/Layout"


const Home = () => {
    const title = 'Home'
    return (
        <Layout>
            <PageTitle title={title} />
            <CarouselBanner />
            <LiveBanner />
            <ServiceIcons />
            <PremiumBox />
        </Layout>
    )
}

export default Home