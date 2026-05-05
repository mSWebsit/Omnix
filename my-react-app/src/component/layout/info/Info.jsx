import './Info.css'
function Info() {
    return (
        <div id='About' className='infoSection'>
            <div className='general'>
                <h3>Omnix</h3>
                <p>Empowering businesses through innovative technology solutions. From concept to code, we deliver excellence.</p>
            </div>
            <div className='Stack'>
                <div className='head'>Services</div>
                <div className='body'>Web Development</div>
                <div className='body'>Mobile Applications</div>
                <div className='body'>UI/UX Design</div>
                <div className='body'>Cloud Solutions</div>
            </div>

            <div className='Stack'>
                <div className='head'>Company</div>
                <div className='body'>About Us</div>
                <div className='body'>Our Process</div>
                <div className='body'>Careers</div>
                <div className='body'>Blog</div>
            </div>
        </div>
    )
}
export default Info