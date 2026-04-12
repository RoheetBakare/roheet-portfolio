import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data Scientist</h4>
                <h5>Add-on Support Services · San Jose, CA</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Built Tableau dashboards tracking service metrics for leadership,
              cutting delivery delays by 25%. Orchestrated data pipelines with
              Apache Airflow, reducing turnaround time by 30%. Automated data
              integration in Python and SQL, eliminating 75% of manual data entry.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Coders Data LLC · Whittier, CA</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Architected NLP-powered client analytics workflows, cutting manual
              reporting time by 60%. Standardized MLOps practices across 4 client
              projects and optimized ETL pipelines, reducing data processing
              time by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>California State University East Bay · Hayward, CA</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Applied statistical modeling and ML to transportation data,
              improving shuttle on-time arrivals by 25%. Built Tableau
              visualizations that raised sales team efficiency by 15% and
              used predictive models to cut operational costs by 20%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Manager</h4>
                <h5>Codingal Technologies · Bengaluru, IN</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Led a 4-person data team delivering product success metrics that
              drove 65% engagement growth and 70% customer retention. Built
              cloud-based ML solutions on AWS and GCP. Delivered cross-functional
              analytics roadmaps with PowerBI and Tableau, boosting efficiency 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>Skillovate Learning Pvt Ltd · Pune, IN</h5>
              </div>
              <h3>2018–20</h3>
            </div>
            <p>
              First data hire. Built the analytics stack from scratch—ETL,
              dashboards, and a propensity model that cut churn 35% in Q1.
              Delivered a real-time KPI dashboard on AWS Lambda and S3,
              reducing decision response time by 30%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
