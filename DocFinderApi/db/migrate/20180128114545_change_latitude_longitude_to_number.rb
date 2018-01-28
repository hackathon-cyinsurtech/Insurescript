class ChangeLatitudeLongitudeToNumber < ActiveRecord::Migration[5.1]
  def change
    change_column :doctors, :latitude, :float
    change_column :doctors, :longitude, :float
  end
end
