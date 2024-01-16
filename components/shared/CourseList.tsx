import { dummyCourses } from "@/constants";
import React from "react";
import CourseCard from "./CourseCard";

const CourseList = () => {
  return (
    <div>
      <h1>Courses</h1>
      <div className="flex">
        {dummyCourses.map((course) => (
          <CourseCard key={course.id} courseData={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
