function Sen() {
    const title = "Hi my name is Andrew";
    const description = "This is ABOUT ME muhahahaa";
    const emoji = " 🐘 ";

    return (
        <div className="card">
            <span style ={{fontSize: "48px"}}>{emoji}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
export default Sen;