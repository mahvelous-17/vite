function Sen() {
    const title = "Hi my name is Andrew";
    const description = "I love Toothless";
    const emoji = `⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡞⠉⢱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⠀⠀⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠉⢣⠀⠀⠀⠀
⠀⠀⠀⠀⢻⠀⠀⠀⢸⠁⢀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀⠘⡆⠀⠀⠀
⠀⠀⠀⠀⠘⡇⠀⠀⢸⢠⣏⣹⣄⣀⣀⡞⢳⡇⠀⠀⠀⢿⠀⠀⠀
⠀⠀⠀⠀⣀⣳⣀⡴⠋⠁⠀⠀⠀⢈⣿⡉⠙⢿⡀⠀⠀⡟⠀⠀⠀
⠀⠀⠀⠀⢻⣘⡟⠀⠀⠀⠀⠀⠀⠀⣿⠄⠀⠀⠹⣄⣸⠁⠀⠀⠀`;

    return (
        <div className="
            bg-gray-100
            border border-gray-400
            rounded-lg
            shadow-md
            hover:shadow-lg
            p-6
            m-6
            w-80
            text-center
            transition-all duration-200
        ">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
                {title}
            </h3>

            <p className="text-lg italic text-gray-700 mb-4">
                {description}
            </p>

            <pre className="text-sm">
                {emoji}
            </pre>
        </div>
    );
}

export default Sen;