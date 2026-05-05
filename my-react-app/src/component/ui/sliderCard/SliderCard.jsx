import { ChevronRight } from "lucide-react";
import './SliderCard.css'
function SliderCard({ ImageSrc, Title, Price, Desc }) {
    return (
        <div className='SliderCard'>
            <div className='SC-Image-wrapper'>
                <h3 className='Price'>${Price}</h3>
                <img className='image' src={ImageSrc} alt={Title} />
            </div>
            <h2 className='Title'>{Title}</h2>
            
            <p className='Description'>{Desc}</p>
            <button className='TryBtn'><a className='TryBtnTxt' href="">Try Demo <ChevronRight /></a></button>
        </div>
    )
}
export default SliderCard
