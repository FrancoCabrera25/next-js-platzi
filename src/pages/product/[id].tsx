import { useRouter } from 'next/router';
import React from 'react';

export default function ProductItemPage() {
    const router = useRouter();
    return <div>Este es el id del producto{router.query.id}</div>;
}
