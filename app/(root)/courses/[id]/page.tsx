import React from "react";

type CoursePageProps = {
  params: {
    id: string;
  };
};

const CoursePage = ({ params: { id } }: CoursePageProps) => {
  return <div>CoursePage</div>;
};

export default CoursePage;
