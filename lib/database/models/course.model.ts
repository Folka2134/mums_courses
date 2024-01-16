import { Document, Schema, model, models } from "mongoose";


export interface ICourse extends Document {
  _id: string
  title: string
  description: string
  imageUrl: string
  price: string
  duration: string
  isFree: boolean
  datePosted: Date
}

const CourseSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true, unique: true },
  price: { type: String, required: true },
  duration: {type: String, required: true },
  isFree: { type: Boolean, required: true },
  datePosted: { type: Date, default: Date.now }
})

const Course = model('Course', CourseSchema) || models.Course

export default Course;