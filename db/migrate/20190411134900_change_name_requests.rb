class ChangeNameRequests < ActiveRecord::Migration[5.2]
  def change
    rename_table :requests, :bookings
  end 
end