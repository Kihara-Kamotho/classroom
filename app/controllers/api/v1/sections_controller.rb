class Api::V1::SectionsController < ApplicationController 
  def index 
    course = Course.find(params[:course_id])
    sections = course.sections 
    render json: sections
  end
  def create 
    course = Course.find_by(:course_id)
    section = course.sections.create(section_params) 
    render json: section
  end
  def show 
    course = Course.find(params[:course_id])
    section = course.sections.where(id: params[:id]) 
    render json: section
  end 
  def update 
    section = Section.find(params[:id]) 
    section.update(section_params)
    render json: section
  end
  def destroy 
    section = Section.find(params[:id]) 
    section.delete 
    head :no_content, status: :ok
  end

  private 
  def section_params 
    params.require(:section).permit(:title, :description, :course_id) 
  end
end