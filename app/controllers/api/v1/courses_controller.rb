class Api::V1::CoursesController < ApplicationController 
  def index 
    courses = Course.all 
    render json: courses
  end
  def create 
    course = Course.create(course_params) 
    render json: course
  end
  def show 
    course = Course.find(params[:id])
    render json: course
  end
  def update 
    course = Course.find(params[:id])
    course.update(course_params) 
    render json: course
  end
  def destroy 
    course = Course.find(params[:id]) 
    course.delete
    head :no_content, status: :ok
  end

  private 
  def course_params
    params.require(:course).permit(:title, :description) 
  end
end