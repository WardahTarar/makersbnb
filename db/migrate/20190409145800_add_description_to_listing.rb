class AddDescriptionToListing < ActiveRecord::Migration[5.2]
  def change

    add_column :listings, :description, :string



  end
end
