class CreateDoctorsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :address
      t.string :telephone
      t.string :latitude
      t.string :longitude
      t.string :rating
      t.string :insurance, index: true
      t.string :specialty, index: true
    end
  end
end
