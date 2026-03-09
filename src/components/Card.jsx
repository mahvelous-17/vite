function Card({ name, title, blurb, emoji, img }) {

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 text-center w-64">

            <img 
                src={img} 
                alt={name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />

            <span style={{ fontSize: "48px" }}>{emoji}</span>

            <h3 className="text-xl font-bold">{name}</h3>

            <h4 className="text-blue-500">{title}</h4>

            <p className="text-gray-600">{blurb}</p>

        </div>
    );
}

export default Card;