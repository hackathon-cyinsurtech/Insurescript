class DoctorsController < ApplicationController
  def index
    @doctors = Doctor.where(insurance: params[:insurance], specialty: params[:specialty])
    if (params[:latitude] && params[:longitude])
      @doctors = @doctors.within(1, origin: [params[:latitude], params[:longitude]])
    end
  end
end
