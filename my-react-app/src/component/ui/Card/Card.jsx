import './Card.css'
function Card({ Image, Title, Desc }) {
    return (
        <div className='card'>
            <div className='Image-wrapper'>
                <Image className="image" size={32} color="var(--main-color)" strokeWidth={2} />
            </div>
            <h2 className='exp-title'>{Title}</h2>
            <p className='Description'>{Desc}</p>
        </div>
    )
}
export default Card
