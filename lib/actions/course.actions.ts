import { CreateCourseParams } from "@/types"
import { connectToDatabase } from "../database"
import Course from "../database/models/course.model"
import { handleError } from "../utils"
import { revalidatePath } from "next/cache"

export const createCourse = async ({ course, path }: CreateCourseParams) => {
  try {
    await connectToDatabase()

    const newCourse = await Course.create({ course })

    revalidatePath(path)

    return JSON.parse(JSON.stringify(newCourse))
  } catch (error) {
    handleError(error)
  }
}