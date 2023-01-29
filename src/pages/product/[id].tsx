import { useRouter } from 'next/router';
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import ProductDetail from '@/components/Product/ProductDetail';

export default function ProductItemPage({ product }: { product: TProduct }) {
    const router = useRouter();
    return <ProductDetail product={product} />
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const response = await fetch('http://localhost:3000/api/avo');
    const { data: productList }: TAPIAvoResponse = await response.json();

    const paths = productList.map(({ id }) => ({
        params: {
            id,
        }
    }));

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string;
    const response = await fetch(`http://localhost:3000/api/avo/${id}`);
    const { data: product }: { data: TProduct } = await response.json();
    return {
        props: {
            product,
        },
    };
};
