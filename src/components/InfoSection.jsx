import infoData from '../json/info.json';

function InfoSection() {
    return (
        <div className="infoSectionWrapper">
            <div className="infoGrid">
                {infoData.info.map(item => (
                    <div key={item.id}>
                        <img src={item.image} alt="Info" />
                        <h2>{item.title}</h2>
                        <p>{item.paragraph}</p>
                    </div>
                ))}
            </div>

            <div className="cta">
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="/contact">Nullam</a>
                </h2>
            </div>
        </div>
    );
}

export default InfoSection;
