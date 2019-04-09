class AddAvailabilityToListing < ActiveRecord::Migration[5.2]
  def change

    add_column :listings, :available_start_date, :datetime
    add_column :listings, :available_end_date, :datetime



  end
end
