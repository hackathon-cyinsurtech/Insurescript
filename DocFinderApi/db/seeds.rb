# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
SPECIALTIY = ["General practice", "Otolaryngology", "Internal medicine", "Dermatology", "Cardiology"]
LATITUDES = ["35.164753", "35.162586", "35.143585", "35.16613", "35.160816"]
LONGITUDES = ["33.37393", "33.37393", "33.33508", "33.374542", "33.35627"]
INSURANCE = %w{cnp eurolife universal gandirect}

Doctor.create(name: "Dr Andreas Andreou",address: "Ηλίου 265",telephone: "+357 99323250", latitude: "35.164753", longitude: "33.37393", rating: 5, insurance: "eurolife", specialty: "General practice")
Doctor.create(name: "Dr Andreas Andreou",address: "Ηλίου 265",telephone: "+357 99323250", latitude: "35.164753", longitude: "33.37393", rating: 5, insurance: "gandirect", specialty: "General practice")
Doctor.create(name: "Dr Andreas Andreou",address: "Ηλίου 265",telephone: "+357 99323250", latitude: "35.164753", longitude: "33.37393", rating: 5, insurance: "cnp", specialty: "General practice")
Doctor.create(name: "Dr. George Kyriakou", address: "Λεωφόρος Ποσειδώνος 219", telephone: "99 852285", latitude: "35.162586", longitude: "33.37393", specialty: "Otolaryngology", insurance: "cnp")
Doctor.create(name: "Dr. George Kyriakou", address: "Λεωφόρος Ποσειδώνος 219", telephone: "99 852285", latitude: "35.162586", longitude: "33.37393", specialty: "Otolaryngology", insurance: "cnp")
Doctor.create(name: "Dr. George Kyriakou", address: "Λεωφόρος Ποσειδώνος 219", telephone: "99 852285", latitude: "35.162586", longitude: "33.37393", specialty: "Otolaryngology", insurance: "cnp")
Doctor.create(name: "Dr. Andy Sols", address: "Λεωφόρος Πανεπιστημίου 136", telephone: "97 761661", latitude: "35.143585", longitude: "33.33508", specialty: "Internal medicine", insurance: "universal")
Doctor.create(name: "Dr. Andy Sols", address: "Λεωφόρος Πανεπιστημίου 136", telephone: "97 761661", latitude: "35.143585", longitude: "33.33508", specialty: "Internal medicine", insurance: "cnp")
Doctor.create(name: "Dr. Andy Sols", address: "Λεωφόρος Πανεπιστημίου 136", telephone: "97 761661", latitude: "35.143585", longitude: "33.33508", specialty: "Internal medicine", insurance: "eurolife")
Doctor.create(name: "Dr. Elina Nikolenco", rating: 4, latitude: "35.16613", longitude: "33.374542", address: "Βρασίδα 82",telephone: "95 708369", specialty: "Dermatology", insurance: "universal")
Doctor.create(name: "Dr. Elina Nikolenco", rating: 4, latitude: "35.16613", longitude: "33.374542", address: "Βρασίδα 82",telephone: "95 708369", specialty: "Dermatology", insurance: "eurolife")
Doctor.create(name: "Dr. Elina Nikolenco", rating: 4, latitude: "35.16613", longitude: "33.374542", address: "Βρασίδα 82",telephone: "95 708369", specialty: "Dermatology", insurance: "cnp")
Doctor.create(name: "Dr. George Potamitis",rating: 4, latitude: "35.160816", longitude: "33.35627", address: "Μεγάλη Άμμος 138",telephone: "97 996743", specialty: "Dermatology", insurance: "universal")
Doctor.create(name: "Dr. George Potamitis",rating: 4, latitude: "35.160816", longitude: "33.35627", address: "Μεγάλη Άμμος 138",telephone: "97 996743", specialty: "Dermatology", insurance: "gandirect")
Doctor.create(name: "Dr. George Potamitis",rating: 4, latitude: "35.160816", longitude: "33.35627", address: "Μεγάλη Άμμος 138",telephone: "97 996743", specialty: "Dermatology", insurance: "cnp")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Κυλλήνη 252",telephone: "23 513285", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "universal")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Κυλλήνη 252",telephone: "23 513285", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "cnp")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Κυλλήνη 252",telephone: "23 513285", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "gandirect")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Οδός Μάκρη 112",telephone: "97 603601", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "gandirect")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Οδός Μάκρη 112",telephone: "97 603601", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "eurolife")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Οδός Μάκρη 112",telephone: "97 603601", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "cnp")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Οδός Ναυαρίνου 146",telephone: "99 911270", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "cnp")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Οδός Ναυαρίνου 146",telephone: "99 911270", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "universal")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Οδός Ναυαρίνου 146",telephone: "99 911270", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "cnp")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Οδός Ναυαρίνου 146",telephone: "99 911270", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "eurolife")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Όθωνος 231",telephone: "25 935242", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "eurolife")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Όθωνος 231",telephone: "25 935242", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "universal")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Τρικάλων 205",telephone: "22 858908", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "cnp")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Τρικάλων 205",telephone: "22 858908", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "eurolife")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "πλατεία Καραισκάκη 202",telephone: "96 286578", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "eurolife")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "πλατεία Καραισκάκη 202",telephone: "96 286578", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "cnp")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Κουκάκι 153",telephone: "96 286578", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "cnp")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Κουκάκι 153",telephone: "96 286578", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "gandirect")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Ρ. Φεραίου 288",telephone: "96 286578", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "gandirect")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Ρ. Φεραίου 288",telephone: "96 286578", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "cnp")
Doctor.create(name: Faker::Name.name, rating: Faker::Number.between(1,5), address: "Ρ. Φεραίου 288",telephone: "96 286578", latitude: LATITUDES.sample, longitude: LONGITUDES.sample, specialty: SPECIALTIY.sample, insurance: "universal")
400.times do
  Doctor.create(name: Faker::Name.name,address: Faker::Address.secondary_address, telephone: Faker::PhoneNumber.phone_number, latitude: "35.164753", longitude: "33.37393", rating: 5, insurance: INSURANCE.sample, specialty: SPECIALTIY.sample)
end
