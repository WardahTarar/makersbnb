class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :name
      t.string :location
      t.datetime :start_date
      t.datetime :end_date

      t.float :price_per_night
      # add_foreign_key :user_id
      t.timestamps null: false
      t.references :user, foreign_key: true

    end
  end
end
