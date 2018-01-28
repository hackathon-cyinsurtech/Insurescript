collection @doctors
attributes :id, :name, :address, :rating, :telephone, :latitude, :longitude, :specialty, :insurance
node(:distance) { |doctor| doctor.distance_to([params[:latitude], params[:longitude]]).round(2) }
