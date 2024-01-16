import CourseForm from "@/components/shared/CourseForm";
import React from "react";

const CreateCourse = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <h1 className="my-10">Create Course</h1>

        <div className="">
          <CourseForm type="create" />
        </div>
      </section>
    </>
  );
};

export default CreateCourse;
