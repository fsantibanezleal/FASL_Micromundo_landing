import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Course } from "../data/siteData";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="course-card" data-reveal>
      <div className="course-card__image-wrap">
        <img src={course.image} alt={course.title} className="course-card__image" />
      </div>
      <div className="course-card__body">
        <div className="tag-list">
          {course.tags.map((tag) => (
            <span className="tag" key={`${course.slug}-${tag}`}>
              {tag}
            </span>
          ))}
        </div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-card__meta">
          <span>{course.format}</span>
          <span>{course.audience}</span>
        </div>
        <Link className="button button--link" to="/contact-us#formulario">
          Consultar este programa
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}
