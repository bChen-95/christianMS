import infoData from '../json/info.json';

function InfoSection() {
    return (
        <div>
            {infoData.info.map(item => (
                <div key={item.id}>
                    <img src={item.image} alt="Info" />
                    <h2>{item.title}</h2>
                    <p>{item.paragraph}</p>
                </div>
            ))}
        </div>
    );
}

export default InfoSection;
