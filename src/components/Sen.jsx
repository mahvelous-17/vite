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
      <div className="bg-gray-900 border-2 border-blue-500 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 p-8 m-6 w-96 text-center">
        
        <h3 className="text-3xl font-bold text-blue-400 mb-4">
          {title}
        </h3>
  
        <p className="text-lg italic text-gray-300 mb-6">
          {description}
        </p>
  
        <pre className="text-xs text-green-400 overflow-x-auto">
          {emoji}
        </pre>
  
      </div>
    );
  }
  
  export default Sen;