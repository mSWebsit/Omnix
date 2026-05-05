import { Link } from 'react-router-dom'
import { ChevronRight, Sparkle, Globe, Smartphone, Bot, Send, Zap, Hammer } from "lucide-react";
import Card from '../../component/ui/Card/Card';
import "./main.css"
function Main() {
    const services = [
        {
            key: 1, Image: Sparkle, Title: "Ai Services",
            Desc: "Harness the power of Artificial Intelligence with custom LLM integrations, predictive analytics, and neural networks."
        }, {
            key: 2, Image: Globe, Title: "Web Development",
            Desc: "High-performance, responsive websites built with the latest technologies to elevate your online presence"
        },
        {
            key: 3, Image: Smartphone, Title: "Mobile Apps",
            Desc: "Intuitive iOS and Android applications designed to provide seamless user experiences on the go."
        },
        {
            key: 4, Image: Bot, Title: "Chatbots",
            Desc: "Intelligent conversational interfaces that provide 24/7 support and lead generation for your business."
        },
        {
            key: 5, Image: Send, Title: "Social Agents",
            Desc: "Custom WhatsApp and Telegram agents designed to automate customer interactions and sales directly in chat."
        },
        {
            key: 6, Image: Zap, Title: "Automation Systems",
            Desc: "Streamline your workflows with end-to-end automation that eliminates manual tasks and boosts efficiency."
        }
    ]
    return (
        <div className='container'>
            <div className='FirstPage'>
                <div className="badge">Next-Gen Technology Partner</div>
                <h1 className="Title">We Build the <span className='highlight'>Digital Future</span> of Your Business.</h1>
                <p className="subTitle">Omnix specializes in crafting high-end websites,mobile applications,
                    and enterprise software solutions that drive growth and innovation.</p>
                <div className='buttons'>
                    <Link className='start' to="/CustomProject">Start Your Project <ChevronRight /></Link>
                    <Link className='view' to="/Catalogue">View our Work</Link>

                </div>
            </div>
            <div id='Services' className='SecPage'>
                <div className='SecIntro'>
                    <h1>Our Expertise</h1>
                    <p>Comprehensive tech solutions tailored to your specific industry need.</p>
                </div>
                <div className='exp-container'>
                    {
                        services.map((p) => (
                            <Card className='card' key={p.key} Image={p.Image}
                                Title={p.Title} Desc={p.Desc} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Main
