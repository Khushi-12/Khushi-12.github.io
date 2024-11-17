import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm Khushi Neema, a driven Data Scientist pursuing an MS in Data Science at Northeastern University, graduating in 2024. I blend deep academic knowledge from my background in computer science with practical experience in machine learning, AI, and predictive analytics. Throughout my experiences, from academia to industry, I've cultivated a robust skill set in machine learning, AI, and predictive analytics. These roles have enhanced my proficiency in using advanced tools such as Python, R, SQL, PyTorch, and TensorFlow, and have deepened my understanding of how data can drive decision-making and innovation. I'm passionate about leveraging data to uncover insights that inform strategic decisions and lead to tangible outcomes. I aim to continue developing solutions that are technically sound but also impactful and scalable. I'm excited to continue growing my skillset and make a meaningful contribution to a company in data science.`;
export const ABOUT_TEXT = `I am Khushi Neema, a driven Data Scientist currently attending Northeastern University to complete my MS in Data Science in 2024. My academic trajectory in the field of computer science runs in conjunction with hands-on experience in machine learning, predictive analytics, and AI. My skill set runs deep in time series analysis, predictive modeling, image segmentation, and unsupervised learning techniques, including cluster analysis, using Python, R, SQL, PyTorch, and TensorFlow. I also have deep knowledge of cloud platforms such as AWS, GCP, and Azure, applied in scalable data processing and model deployment.

Throughout my career, in various roles in different industries, I learned the art of empowering actionable insights through data. I ensure that any solution is technically viable and can be scaled. For example, large-scale datasets were used for implementing demand forecasting and anomaly detection; optimization of data processing pipelines was performed, and unique challenges of data were modeled with custom models. My goal is to make sure meaningful, strategic outcomes are driven with data.

 Outside of coding, I enjoy problem-solving activities like Sudoku and crosswords that help develop my logical reasoning. I also enjoy staying active through sports and hiking, and I really like the competitive and team aspects eSports brings. I am excited about continuing my career in data science by developing impactful solutions, ones that will move not only this field forward but create real value out in the world.`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 - Present",
    role: "Machine Learning Engineer",
    company: "Anfluss Inc",
    description: `integrated a PineCone vector database to support Retrieval-Augmented Generation (RAG) over a 20GB dataset, streamlining diverse data ingestion formats through Azure OpenAI for embeddings and DeepSpeed for multi-GPU training. Additionally, I employed the Gemma LLM model for prompt responses, boosting data retrieval efficiency by 25%. This solution was benchmarked against leading Q&A bots, incorporating Microsoft Power Automate for tracking business metrics and delivering insights, which enhanced customer satisfaction and SaaS performance significantly.`,
    technologies: ["AzureOpenAI","Python","MongoDB","React"],
  },
  {
    year: "Sep 2024 - Present",
    role: "Teaching Assistance",
    company: "Northeastern University",
    description: `As a Teaching Assistant for the course DS 3000: Foundations of Data Science, I had the wonderful opportunity to collaborate with Professor Sophine Clachar. Together, we organized course materials and guided students in building a strong foundation in data science. We accomplished this through a series of weekly assignments and reading reflections, designed to help students understand the profound impact data science has on society and the crucial role of machine learning in accomplishing the core tasks of their respective projects. Witnessing students grasp these vital concepts and develop the skills necessary to drive innovation through data was an incredibly rewarding experience.`,
    technologies: ["Python"],
  },
  {
    year: "Jul 2023 - Dec 2023",
    role: "Data Science Intern",
    company: "Danfoss Power Solutions",
    description: `In collaboration with cross-functional teams, I developed an automated demand forecasting solution for Danfoss, utilizing SARIMA and XGBoost to enhance operational efficiency—a model now implemented across their multibillion-euro operations. This project involved aggregating macroeconomic indicators from the USA and Europe, merging them with time-series residuals to refine forecasting across 50+ regions, using Databricks and Synapse SQL. Additionally, I applied interpretability tools like LIME and SHAP to align marketing analyses with model insights, translating outcomes into PowerBI for improved data visibility and pricing strategy optimization.`,
    technologies: ["Python", "Synapse", "PowerBI", "DataBricks"],
  },
  {
    year: "Dec 2020 - Jul 2022",
    role: "Data Scientist",
    company: "India Meteorological Department",
    description: `In my previous role as a Data Scientist with the India Meteorological Department, I developed a streamlined system for real-time processing of lightning-related satellite data, using Kafka to transform 2TB of raw, unstructured data into structured Cartesian coordinates, all while leveraging Docker to enhance scalability. This setup accelerated data processing by 25%. Additionally, I engineered a custom unsupervised thunderstorm prediction model from scratch using DBSCAN clustering, which operated at 10-minute intervals and achieved a silhouette score of 0.48. Managing Agile sprints in Visual Studio Code ensured smooth deployment and iterative improvements, resulting in more efficient processing and effective project management.`,
    technologies: ["Python","Docker","Git","Kafka","Excel"],
  },
];

export const PROJECTS = [
  {
    title: "Pharmacy Database management system",
    image: project1,
    description:
      "I designed a relational database to optimize inventory operations, resulting in a 50% improvement in data retrieval efficiency. I developed, tested, debugged, and documented over 1,000 complex PL/SQL queries and database objects, including procedures, window functions, CTEs, and triggers, effectively aligning with business requirements and achieving an 85% satisfaction rate in data collection processes.",
    technologies: ["MYSQL Workbench","Flask","Python"],
    link: "https://github.com/Khushi-12",
  },
  {
    title: "News Research Tool",
    image: project2,
    description:
      "Spearheaded the development of a Streamlit application with knowledge-based graph (KBG) capabilities, significantly enhancing the ETL pipeline and reducing processing time by 50%, enabling users to efficiently extract information from three relevant articles. Additionally, integrated a question-answering agent utilizing HuggingFace Transformers (BERT), along with LangChain and FAISS, to deliver accurate responses to user queries based on processed news articles.",
    technologies: ["Streamlit", "Python", "HuggingFace", "LangChain", "FAISS", "ETL Pipeline"],
    link: "https://github.com/Khushi-12",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Industrial Financial Health Analysis",
    image: project4,
    description:
      "Orchestrated an interactive customer behavior dashboard in Tableau that visualized key financial KPIs, including EBITDA, PEG, and ROE, to analyze spending patterns across over 300 industries, enhancing insights into industry trends. Conducted comprehensive data analysis and cleaning, utilizing SQL-based transformations with MongoDB and calculated field operations to derive meaningful business insights from 5-year financial data.",
    technologies: ["Tableau","Azure Data Studio","KPIs"],
    link: "https://github.com/Khushi-12",
  },
  {
    title: "Vehicle Re-Identification Problem",
    image: project4,
    description:
      "Engineered a vehicle re-identification system achieving 98% accuracy by integrating composite feature extraction using SIFT and advanced deep learning models like ResNet, Kalman Filtering, and OSNet. Further enhanced the system by incorporating Automatic Number Plate Recognition (ANPR) with PaddleOCR, providing contextual data to improve the robustness of fleet re-identification in video surveillance. The solution effectively optimized enterprise operations, supporting applications such as fleet management, customer acquisition analytics, and reducing response times for security monitoring by 40%.",
    technologies: ["SIFT, ResNet, Kalman Filtering, OSNet, PaddleOCR, ANPR, Deep Learning"],
    link: "https://github.com/Khushi-12",
  },
  {
    title: "Image Segmentation Problem",
    image: project4,
    description:
      "I developed a custom U-Net model and conducted comparative analysis with the automated selection of three advanced architectures—VGG19, Inception V4, and EfficientNet B0—for 3D MRI segmentation of internal organs, focusing on tumor delineation. This resulted in a 25% improvement in cancer treatment planning efficiency. Additionally, I enhanced a Dash application using Plotly to incorporate interactive tools for dynamic MRI scan exploration, enabling image captioning for efficient analysis, and addressing segmentation inaccuracies to improve workflow efficiency.",
    technologies: ["Python","Tensorflows","Keras","U-Net", "Dash", "Plotly", "Machine Learning"],
    link: "https://github.com/Khushi-12",
  },
  {
    title: "Classifying Medical Specialty from Transcription Data",
    image: project4,
    description:
      "Led the development of an ETL pipeline to extract, transform, and load data, effectively categorizing biomedical specialties into six distinct classes while addressing class imbalance issues. Utilized dimensionality reduction techniques such as t-SNE and PCA for effective visualization. Developed multiple machine learning models, including N-gram-based approaches with SVM, Random Forest, residual neural networks, and LSTM, achieving 86% accuracy in the classification of medical transcriptions.",
    technologies: ["Python","PyTorch","Scikit-learn","XGBoost", "RandomForest", "tSNE", "Machine Learning"],
    link: "https://github.com/Khushi-12",
  },
  {
    title: "Statistical Modeling and Analysis of Flight Departure Delay and Risk Assessment",
    image: project4,
    description:
      "Spearheaded a team of five in developing a robust Linear Regression model (OLS) using R for predicting flight departures, achieving a mean squared error (MSE) of 0.23. Leveraging statistical programming and predictive modeling packages, we attained 80% accuracy in predicting delays, with meticulous model selection based on AIC score. Statistical analyses, hypothesis testing, and visualizations using ggplot revealed a consistent 15-minute delay pattern, emphasizing the reliability and precision of the model.",
    technologies: ["R","ggplot"],
    link: "https://github.com/Khushi-12",
  }
];

export const CONTACT = {
  phoneNo: "+1 2016878959 ",
  email: "khushineema5@gmail.com",
  link: "https://github.com/Khushi-12",
};


