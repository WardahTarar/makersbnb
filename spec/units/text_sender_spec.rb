require './src/text_sender.rb'

xdescribe TextSender do
  it "sends a text when the booking is requested" do
    expect(subject.request_made).to eq('Your request has been submitted')
  end

  it "sends a text when the booking is accepted" do
    expect(subject.request_accepted).to eq('Your request has been accepted')
  end

  it "sends a text when the booking is denied" do
    expect(subject.request_denied).to eq('Your request has been denied')
  end
end