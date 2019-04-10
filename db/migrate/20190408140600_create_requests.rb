class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.boolean :approved
      # t.references :user, foreign_key: true
      t.references :listing, foreign_key: true
      t.references :user

      # t.string :first_name
      # t.string :last_name
      # t.string :email
      # t.string :password
      # t.string :password_digest
      # t.boolean :active_host
      t.timestamps null: false
    end
  end
end
