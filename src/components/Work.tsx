import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "GTM Analytics Platform",
    category: "End-to-End Go-to-Market Analytics Pipeline",
    tools: "dbt, Apache Airflow, Python, SQL, Tableau",
    description:
      "Unified CRM, paid media, and web analytics into a single warehouse using dbt models and Airflow-orchestrated pipelines. Delivered automated exec dashboards that gave marketing and sales one consistent source of truth for revenue and pipeline decisions.",
    image: "/images/gtm-analytics.svg",
    link: "https://github.com/RoheetBakare",
  },
  {
    title: "Parking Analytics",
    category: "Occupancy Forecasting & BI Dashboard",
    tools: "Python, SARIMA, Pandas, Plotly Dash",
    description:
      "Analyzed 2.88M parking transactions across 4 years of Iowa lot data. Built SARIMA models to forecast weekly demand, identified high-traffic dates via 90th-percentile thresholds, and delivered three interactive Dash dashboards for facility planning teams.",
    image: "/images/parking-analytics.svg",
    link: "https://github.com/RoheetBakare",
  },
  {
    title: "Disease Predictor",
    category: "Clinical Risk Classification Model",
    tools: "BioBERT, Random Forest, Python, EHR API",
    description:
      "Fine-tuned BioBERT for multi-label clinical risk classification on de-identified patient notes, with a Random Forest ensemble for structured EHR features. Integrated with a live EHR API to surface risk scores at point of care.",
    image: "/images/disease-predictor.svg",
    link: "https://github.com/RoheetBakare",
  },
  {
    title: "YouTube Summarizer",
    category: "LLM-Powered Video Summarization Tool",
    tools: "LangChain, OpenAI, Streamlit, Python",
    description:
      "Transcript extraction and summarization pipeline using LangChain for semantic chunking and OpenAI for generation. Handles long-form content by splitting into context-aware segments; deployed as a Streamlit app for on-demand use.",
    image: "/images/yt-summarizer.svg",
    link: "https://github.com/RoheetBakare",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Stack</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
