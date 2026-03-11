export default async function ProductPage({params, }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <main>
                <p>Id product: {id}</p>
                <a href = {`/products/${id}/comments`}>Перейти к комментариям</a>
        </main>
    );
}

