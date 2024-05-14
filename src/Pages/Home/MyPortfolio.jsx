import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
        <a
  href="https://github.com/altinmurtezaj"
  target="_blank"
  rel="noreferrer"
  className="github-button"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className="github-icon"
  >
    <path
      fill="currentColor"
      d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.209 11.385.6.113.818-.258.818-.576 0-.284-.01-1.037-.015-2.03-3.338.724-4.042-1.61-4.042-1.61-.546-1.383-1.333-1.75-1.333-1.75-1.083-.74.083-.724.083-.724 1.197.085 1.823 1.23 1.823 1.23 1.063 1.823 2.79 1.296 3.468.992.107-.77.416-1.296.758-1.592-2.657-.302-5.458-1.328-5.458-5.93 0-1.31.468-2.383 1.23-3.223-.125-.303-.53-1.526.116-3.176 0 0 1.007-.322 3.3 1.23.957-.268 1.983-.402 3-.405 1.016.003 2.043.137 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.65 1.65.24 2.873.115 3.176.765.84 1.228 1.913 1.228 3.223 0 4.613-2.805 5.625-5.47 5.922.43.372.818 1.104.818 2.222 0 1.604-.015 2.893-.015 3.282 0 .32.214.694.825.574C20.566 21.795 24 17.304 24 12c0-6.627-5.373-12-12-12z"
    ></path>
  </svg>
  <span className="github-text">Visit My GitHub</span>
</a>


</div>

      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
