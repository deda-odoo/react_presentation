function Media(props) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{props.title}</h2>
            <p className="text-gray-600">{props.description}</p>
        </div>
    );
}

export default Media;
