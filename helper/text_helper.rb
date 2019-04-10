def text_helper
  account_sid = 'ACf19710e3ab7e2980c594e246ab8a0433'
  auth_token = '1bf8ba5e0fc52b47368be170579a00ec'
  @client = Twilio::REST::Client.new(account_sid, auth_token)

  @from = '+447480787836' # Your Twilio number
  @to = '+44740529495' # Your mobile phone number
end