class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.float :price_per_night
      
      t.timestamps null: false
    end 
  end
end