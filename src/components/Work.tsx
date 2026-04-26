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
      "Unified CRM, ads, and web data into a single warehouse with automated dashboards—giving the marketing and sales teams one source of truth for revenue decisions.",
    image: "/images/gtm-analytics.svg",
    link: "#",
  },
  {
    title: "Parking Analytics",
    category: "Real-Time Occupancy Detection System",
    tools: "Computer Vision, Python, OpenCV, Tableau",
    description:
      "Computer vision system for real-time parking occupancy detection. Deployed on edge hardware with a live dashboard updating every 30 seconds.",
    image: "/images/parking-analytics.svg",
    link: "#",
  },
  {
    title: "Disease Predictor",
    category: "Clinical Risk Classification Model",
    tools: "BioBERT, Random Forest, Python, EHR API",
    description:
      "Multi-label classification model predicting patient risk from clinical notes using BioBERT fine-tuning. Integrated with an EHR API for real-time inference.",
    image: "/images/disease-predictor.svg",
    link: "#",
  },
  {
    title: "YouTube Summarizer",
    category: "LLM-Powered Video Summarization Tool",
    tools: "LangChain, OpenAI, Streamlit, Python",
    description:
      "LLM-powered tool that extracts, chunks, and summarizes YouTube transcripts. Built with LangChain and OpenAI, deployed as a Streamlit app.",
    image: "/images/yt-summarizer.svg",
    link: "#",
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
