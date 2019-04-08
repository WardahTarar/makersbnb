
feature 'Sign up page' do

  scenario 'sign up a user' do
    visit('/users/new')
    fill_in 'firstName', with: 'James'
    fill_in 'lastName', with: 'Davies'
    fill_in 'email', with: 'test@test.com'
    fill_in 'password', with: '12345'
    click_button 'signUp'

    expect(page).to have_text('Makers BnB')
  end

end