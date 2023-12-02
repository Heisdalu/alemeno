export interface CourseCardTypes {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  thumbnail: string;
  duration: string;
  location: string;
  students: string[];
}
export interface CourseDetailTypes {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: { week: number; topic: string; content: string[] }[];
  students: string[];
}
export interface LessonTypes {
  week: number;
  topic: string;
  content: string[];
}
