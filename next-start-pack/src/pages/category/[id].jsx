import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();

    console.log(router);

    return <div>{router.query.id}</div>;
};

export default Index;
