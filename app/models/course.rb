class Course < ApplicationRecord
  has_many :sections 
  has_many :lessons, through: :sections 
end
