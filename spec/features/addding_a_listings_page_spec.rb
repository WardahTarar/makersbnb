require 'spec_helper'
feature 'Listings' do
  scenario 'user adds a listing' do
    visit('/listings/new')
    expect(page).to have_content('Name')
    expect(page).to have_content('Location')
    expect(page).to have_content('Price')
    expect(page).to have_content('Start')
    expect(page).to have_content('End')
    expect(page).to have_content('Price')
    expect(page).to have_button('Submit')
  end
end
