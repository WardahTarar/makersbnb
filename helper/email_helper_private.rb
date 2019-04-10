def signup_helper(first_name,email)
  from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
    to = Email.new(email: email)  #changes
    subject = 'Sign up'  #changes
    content = Content.new(type: 'text/plain', value: "Hi, #{first_name}! You have signed up." ) #changes
    mail = Mail.new(from, subject, to, content) #always the same

    # sg = SendGrid::API.new(api_key: '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') #always the same
    sg = SendGrid::API.new(api_key: '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')
    response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
    puts response.status_code #always the same
    puts response.body #always the same
    puts response.headers #always the same
end

def newlist_helper(first_name,email)
  from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
  to = Email.new(email: email)  #changes
  subject = 'New listing'  #changes
  content = Content.new(type: 'text/plain', value: "Hi, #{first_name}! You have created a new listing." ) #changes
  mail = Mail.new(from, subject, to, content) #always the same

  sg = SendGrid::API.new(api_key: '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') #always the same
  response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
  puts response.status_code #always the same
  puts response.body #always the same
  puts response.headers #always the same
end

def update_list_helper(first_name,email)
  from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
  to = Email.new(email: email)  #changes
  subject = 'Update listing'  #changes
  content = Content.new(type: 'text/plain', value: "Hi, #{first_name}! Your listing has been updated." ) #changes
  mail = Mail.new(from, subject, to, content) #always the same

  sg = SendGrid::API.new(api_key: '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') #always the same
  response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
  puts response.status_code #always the same
  puts response.body #always the same
  puts response.headers #always the same
end

def request_received_helper(first_name,email)
  from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
  to = Email.new(email: email)  #changes
  subject = 'Request received by host'  #changes
  content = Content.new(type: 'text/plain', value: "Hi, #{first_name}! You have received a request to book your space.") #changes
  mail = Mail.new(from, subject, to, content) #always the same

  sg = SendGrid::API.new(api_key: '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') #always the same
  response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
  puts response.status_code #always the same
  puts response.body #always the same
  puts response.headers #always the same
end

def request_made_helper(first_name,email)
  from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
  to = Email.new(email: email)  #changes
  subject = 'Request made by guest'  #changes
  content = Content.new(type: 'text/plain', value: "Hi, #{first_name}! Your request has been submitted.") #changes
  mail = Mail.new(from, subject, to, content) #always the same

  sg = SendGrid::API.new(api_key: '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') #always the same
  response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
  puts response.status_code #always the same
  puts response.body #always the same
  puts response.headers #always the same
end

def request_confirmed_helper(first_name,email)
  from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
  to = Email.new(email: email)  #changes
  subject = 'Request Confirmed'  #changes
  content = Content.new(type: 'text/plain', value: "Hi, #{first_name}! You have accepted booking request.") #changes
  mail = Mail.new(from, subject, to, content) #always the same

  sg = SendGrid::API.new(api_key: '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') #always the same
  response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
  puts response.status_code #always the same
  puts response.body #always the same
  puts response.headers #always the same
end

def request_accepted_helper(first_name,email)
  from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
  to = Email.new(email: email)  #changes
  subject = 'Request accepted'  #changes
  content = Content.new(type: 'text/plain', value: "Hi, #{first_name}! Your booking request has been accepted.") #changes
  mail = Mail.new(from, subject, to, content) #always the same

  sg = SendGrid::API.new(api_key: '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') #always the same
  response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
  puts response.status_code #always the same
  puts response.body #always the same
  puts response.headers #always the same
end

def request_denied_helper(first_name,email)
  from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
  to = Email.new(email: email)  #changes
  subject = 'Request denied'  #changes
  content = Content.new(type: 'text/plain', value: "Hi, #{first_name}! Your booking request has been denied.") #changes
  mail = Mail.new(from, subject, to, content) #always the same

  sg = SendGrid::API.new(api_key: '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') #always the same
  response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
  puts response.status_code #always the same
  puts response.body #always the same
  puts response.headers #always the same
end