class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.references :request, foreign_key: true
      t.timestamps null: false
    end
  end
end

    
