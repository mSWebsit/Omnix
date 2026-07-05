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

                <div className="badge animate-blur delay-1">
                    Next-Gen Technology Partner
                </div>

                <h1 className="Title">
                    <span className="line animate-blur delay-2">We Build the</span>
                    <span className="line animate-blur delay-3">
                        <span className='highlight'> Digital Future </span>
                    </span>
                    <span className="line animate-blur delay-4">of Your Business.</span>
                </h1>

                <p className="subTitle">
                    <span className="line animate-blur delay-5">Omnix specializes in crafting high-end websites,</span>
                    <span className="line animate-blur delay-6">mobile applications, and enterprise software</span>
                    <span className="line animate-blur delay-7">solutions that drive growth and innovation.</span>
                </p>


                <div className='buttons animate-blur delay-8'>
                    <Link className='start' to="/CustomProject">Start Your Project <ChevronRight /></Link>
                    <Link className='view' to="/Catalog">View our Work</Link>
                </div>
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
    )
}
export default Main
