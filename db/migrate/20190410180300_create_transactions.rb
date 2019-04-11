class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :stripe_billing_id
      t.references :user, foreign_key: true
    end 
  end
end