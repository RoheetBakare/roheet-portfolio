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
              improving delivery timeliness by 25%. Orchestrated data pipelines
              with Apache Airflow, reducing turnaround time by 30%. Deployed
              automated data integration pipelines in Python and SQL, cutting
              manual entry by 75%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Coders Data LLC · Whittier, CA</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Optimized ETL workflows with SQL, cutting processing time by 30%.
              Implemented ML algorithms for predictive modeling, increasing
              revenue opportunity identification by 30%. Applied financial
              modeling for strategic planning, improving profitability by 15%.
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
              boosting shuttle on-time arrivals by 25%. Developed Tableau
              visualizations increasing sales efficiency by 15% and leveraged
              ML to cut operational costs by 20%.
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
              Led a team implementing product success metrics, driving 65%
              engagement growth and 70% customer retention. Developed cloud-based
              ML solutions on AWS and GCP. Delivered cross-functional roadmaps
              with PowerBI and Tableau, boosting operational efficiency by 40%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
