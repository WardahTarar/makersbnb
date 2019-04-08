feature 'Listings' do
  scenario 'user opens the listings page' do
    visit('/listings/all')
    expect(page).to have_content('Current listings')
  end
end
