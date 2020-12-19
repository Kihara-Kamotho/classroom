class Api::V1::LessonsController < ApplicationController
  def index 
    course = Course.find(params[:course_id])
    section = Section.find(params[:section_id]) 
    lessons = section.lessons 
    render json: lessons
  end
  def create 
    section = Section.find_by(params[:section_id]) 
    lesson = section.lessons.create(lesson_params) 
    render json: lesson
  end
  def show 
    section = Section.find(params[:section_id])
    lesson = section.lessons.where(id: params[:id])
    render json: lesson
  end
  def update 
    lesson = Lesson.find(params[:id]) 
    lesson.update(lesson_params)
    render json: lesson
  end
  def destroy 
    lesson = Lesson.find(params[:id]) 
    lesson.delete 
    head :no_content, status: :ok 
  end

  private 
  def lesson_params 
    params.require(:lesson).permit(:title, :description) 
  end
end