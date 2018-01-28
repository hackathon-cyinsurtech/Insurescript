class DoctorsController < ApplicationController
  def index
    @doctors = Doctor.where(insurance: params[:insurance], specialty: params[:specialty])
    if (params[:latitude] && params[:longitude])
      @doctors = @doctors.closest(origin: [params[:latitude], params[:longitude]])
    end
  end
end
