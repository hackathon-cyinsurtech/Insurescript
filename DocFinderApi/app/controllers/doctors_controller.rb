class DoctorsController < ApplicationController
  def index
    @doctors = Doctor.where(insurance: params[:insurance], specialty: params[:specialty])
  end
end
