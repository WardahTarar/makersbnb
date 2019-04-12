require './src/email_sender.rb'

describe EmailSender do
  it "sends an email to user when user signs up" do
    expect(subject.sign_up('User', "user_email@test.com")).to eq('Hi, User! You have signed up.')
  end

  it "sends an email when the listing is created" do
    expect(subject.new_listing('User', "host_email@test.com")).to eq('Hi, User! You have created a new listing.')
  end

  it "sends an email when the listing is updated" do
    expect(subject.update_listing('User', "host_email@test.com")).to eq('Hi, User! Your listing has been updated.')
  end

  it 'when booking is requested, the host receives an e-mail' do
    expect(subject.request_received_by_host('Host', "host_email@test.com")).to eq('Hi, Host! You have received a request to book your space.')
  end

  it 'when booking is requested, the guest receives an e-mail' do
    expect(subject.request_made_by_guest('Guest', "guest_email@test.com")).to eq('Hi, Guest! Your request has been submitted.')
  end

  it 'when host confirms the booking, they receive an email' do
    expect(subject.request_accepted_by_host('Host', "host_email@test.com")).to eq('Hi, Host! You have accepted booking request.')
  end

  it 'when host confirms the booking, the user receives an email' do
    expect(subject.request_accepted_for_guest('Guest', "guest_email@test.com")).to eq('Hi, Guest! Your booking request has been accepted.')
  end

  it 'when host denies the booking, the user receives an email' do
    expect(subject.request_denied('Guest', "guest_email@test.com")).to eq('Hi, Guest! Your booking request has been denied.')
  end
end