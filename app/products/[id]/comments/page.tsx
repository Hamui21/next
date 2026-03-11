export default async function ProductPage({params, }: {
    params: Promise<{ id: string}>;
}) {
    const { id } = await params;

    return (
        <main>
            <h1>This is a page comments</h1>
            <p>Id products: {id}</p>
            <a href={`/`}>Вернуться на главную страничку</a>
        </main>
    );
}