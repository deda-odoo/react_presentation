import Media from '../components/Media';

function MediaPage() {
    const medias = [
        { id: 1, title: "Media 1", description: "First description." },
        { id: 2, title: "Media 2", description: "Second description." },
        { id: 3, title: "Media 3", description: "Third description." },
    ];

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Media list</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {medias.map((media) => (
                    <Media key={media.id} title={media.title} description={media.description} />
                ))}
            </div>
        </div>
    );
}

export default MediaPage;
