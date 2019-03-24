15.times do
  d = Department.create(
    name: Faker::Commerce.department,
  )
  10.times do
    i = d.products.create(
      name: Faker::Commerce.product_name,
      description: Faker::StarWars.quote,
      price: Faker::Commerce.price(range = 0..1000.00, as_string = false),
      )
  end
end

puts "Database records successfully created: 15 depts, 10 items/dept"