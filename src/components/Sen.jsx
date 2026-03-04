function Sen() {
    const title = "Hi my name is Andrew";
    const description = "I love Toothless";
    const emoji = `⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡞⠉⢱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⠀⠀⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠉⢣⠀⠀⠀⠀
⠀⠀⠀⠀⢻⠀⠀⠀⢸⠁⢀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀⠘⡆⠀⠀⠀
⠀⠀⠀⠀⠘⡇⠀⠀⢸⢠⣏⣹⣄⣀⣀⡞⢳⡇⠀⠀⠀⢿⠀⠀⠀
⠀⠀⠀⠀⣀⣳⣀⡴⠋⠁⠀⠀⠀⢈⣿⡉⠙⢿⡀⠀⠀⡟⠀⠀⠀
⠀⠀⠀⠀⢻⣘⡟⠀⠀⠀⠀⠀⠀⠀⣿⠄⠀⠀⠹⣄⣸⠁⠀⠀⠀
⠀⡀⠀⠰⡗⠿⠀⣴⣾⡶⢶⣀⠀⢀⣟⠂⢀⣤⣄⣹⢳⠂⠀⠀⠀
⠀⡷⡀⠀⠹⣾⠸⡿⣿⣿⣿⢿⠀⢸⡇⢠⣷⣿⢹⢹⢿⠀⠀⠀⠀
⠘⠳⡌⠙⠚⣏⠣⣙⠺⠯⠭⠼⠀⢈⡁⢾⣿⠯⢞⡿⠊⠀⠀⠀⠀
⠀⠈⠉⢳⣄⣘⣲⠞⠙⠲⠤⢄⣀⣀⣁⣀⡠⢴⡾⢿⡄⠀⠀⠀⠀
⠀⠀⠀⣈⡤⠖⠟⠀⠀⠀⠀⠀⠀⠀⣸⡆⠀⡞⠀⢈⣷⣦⢦⣤⡄
⠀⣠⠞⢁⠀⠀⡆⠀⠀⢾⠀⠀⠀⡼⢹⣁⣄⢸⡴⣮⠻⣶⣾⡯⠀
⣰⠇⠀⢨⣿⡿⢧⠀⠀⢹⡀⢀⡞⠁⢿⠀⢹⣩⠜⠙⠚⠛⠉⠀⠀
⠘⣆⠀⢶⠃⠀⠈⣇⠀⠈⢷⠋⠀⠀⠘⣆⡼⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠈⠳⠬⣃⣤⠴⢧⣤⣤⠼⡟⠋⠻⠋⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

    return (
        <div className="bg-white border border-gray-300 rounded-xl shadow-md p-6 m-6 w-96 text-center hover:shadow-lg transition-all duration-200">
            
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
                {title}
            </h3>

            <p className="text-lg italic text-gray-700 mb-4">
                {description}
            </p>

            <pre className="text-sm text-black">
                {emoji}
            </pre>

        </div>
    );
}

export default Sen;