
interface Props {
    title: string
}

const PageTitle = ({ title }: Props) => {
    return (
        <section className='max-w-3xl mx-auto'>
            <h1 className='text-[40px] font-bold text-[#222222]'>{title}</h1>
        </section>
    )
}

export default PageTitle