class RemoveDetailsFromDepartments < ActiveRecord::Migration[5.2]
  def change
    remove_column :departments, :description, :string
    remove_column :departments, :price, :float
  end
end
