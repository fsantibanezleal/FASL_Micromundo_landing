import { useState } from "react";

import { CourseCard } from "../components/CourseCard";
import { PageHero } from "../components/PageHero";
import { SectionIntro } from "../components/SectionIntro";
import { courseFilters, courses } from "../data/siteData";

export function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("Todo");

  const visibleCourses =
    activeFilter === "Todo"
      ? courses
      : courses.filter(
          (course) =>
            course.tags.includes(activeFilter) ||
            course.format === activeFilter ||
            course.audience === activeFilter,
        );

  return (
    <>
      <PageHero
        title="Cursos"
        description="La misma lógica del catálogo original, pero con filtros claros, tarjetas limpias y sin dependencia de un portfolio de WordPress."
      />

      <section className="section-shell" id="catalogo">
        <div className="container">
          <SectionIntro
            eyebrow="Catálogo"
            title="Cursos y talleres para básica, media, pre-básica, visitas y experiencias abiertas."
            description="La selección resume el catálogo visible del sitio actual y mantiene sus categorías principales."
          />

          <div className="filter-row" data-reveal>
            {courseFilters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={`filter-chip ${
                  activeFilter === filter ? "is-active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="course-grid">
            {visibleCourses.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
