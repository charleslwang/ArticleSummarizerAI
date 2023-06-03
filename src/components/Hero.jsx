import { logo } from '../assets';
const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img
                    src={logo}
                    alt="sumz_logo"
                    className="w-28 object-contain"
                />
            </nav>
            <h1 className="head_text">Summarize Articles with
            <br className="max-md:hidden"/>
            <span className="purple_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Make reading articles faster with
                Synopsz, an open-source article
                summarizer that turns long passages
                into short and simple summaries.
            </h2>
        </header>
    )
}

export default Hero