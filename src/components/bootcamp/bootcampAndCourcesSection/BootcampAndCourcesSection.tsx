import Section from "../../common/Section/Section";
import BackgroundDesign from "../../../assets/images/backgroundDesign1.webp";
import FullStackCourse from "../../../assets/images/fullStackCourseImage.webp";
import DataEngineerCourse from "../../../assets/images/bigDataCourseImage.webp";
import ProjectManagementCourse from "../../../assets/images/projectManagementCourseImage.webp";
import BootcampCard from "../bootcampCard/BootcampCard";
import './BootcampAndCourcesSection.css';

interface Course {
    image: string;
    title: string;
    date?: string;
    time?: string;
    instructor?: string;
}

const BootcampAndCourcesSection = () => {

    const courses: Course[] = [
        {image: FullStackCourse, title: "Full Stack Mastery: From Zero to Hero"},
        {image: DataEngineerCourse, title: "Data Engineering Pro: Build Scalable Data Pipelines"},
        {image: ProjectManagementCourse, title: "Project Management Mastery: Plan, Execute, Succeed"}
    ];
    return (
        <Section
            designLeft={BackgroundDesign}
            backgroundColor="#EAEAEA"
            className="bootcamp-and-cources-section"
        >
            <div className="container bootcamp-and-cources-container">
                <h1 className="bootcamp-and-cources-title">Bootcamp and Courses</h1>
                <div className="bootcamp-and-cources-cards">
                    {courses.map((course, index) => (
                        <BootcampCard
                            key={index}
                            image={course.image}
                            title={course.title}
                            date={course.date}
                            time={course.time}
                            instructor={course.instructor}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default BootcampAndCourcesSection;