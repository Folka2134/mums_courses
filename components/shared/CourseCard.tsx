import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ICourse } from "@/lib/database/models/course.model";
import Link from "next/link";
import { Button } from "../ui/button";

type CourseCardProps = {
  courseData: ICourse;
};

const CourseCard = ({ courseData }: CourseCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{courseData.title}</CardTitle>
        <CardDescription>{courseData.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <p>{courseData.duration}</p>
        <p>{courseData.price}</p>
      </CardContent>
      <CardFooter>
        <Link href={`courses/${courseData.id}`}>
          <Button>More!</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
