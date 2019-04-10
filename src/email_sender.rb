require 'sendgrid-ruby'
require './helper/email_helper.rb'
include SendGrid

class EmailSender
  def sign_up(first_name,email)
    from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
    to = Email.new(email: email)  #changes
    subject = 'Sending with SendGrid is Fun'  #changes
    content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby') #changes
    mail = Mail.new(from, subject, to, content) #always the same

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY']) #always the same
    response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
    puts response.status_code #always the same
    puts response.body #always the same
    puts response.headers #always the same
    "Hi, #{first_name}! You have signed up."    
  end

  def new_listing(first_name,email)
    from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
    to = Email.new(email: email)  #changes
    subject = 'Sending with SendGrid is Fun'  #changes
    content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby') #changes
    mail = Mail.new(from, subject, to, content) #always the same

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY']) #always the same
    response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
    puts response.status_code #always the same
    puts response.body #always the same
    puts response.headers #always the same
    "Hi, #{first_name}! You have created a new listing."    
  end

  def update_listing(first_name,email)
    from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
    to = Email.new(email: email)  #changes
    subject = 'Sending with SendGrid is Fun'  #changes
    content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby') #changes
    mail = Mail.new(from, subject, to, content) #always the same

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY']) #always the same
    response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
    puts response.status_code #always the same
    puts response.body #always the same
    puts response.headers #always the same
    "Hi, #{first_name}! Your listing has been updated."    
  end

  def request_received_by_host(first_name,email)
    from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
    to = Email.new(email: email)  #changes
    subject = 'Sending with SendGrid is Fun'  #changes
    content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby') #changes
    mail = Mail.new(from, subject, to, content) #always the same

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY']) #always the same
    response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
    puts response.status_code #always the same
    puts response.body #always the same
    puts response.headers #always the same
    "Hi, #{first_name}! You have received a request to book your space."
  end

  def request_made_by_guest(first_name,email)
    from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
    to = Email.new(email: email)  #changes
    subject = 'Sending with SendGrid is Fun'  #changes
    content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby') #changes
    mail = Mail.new(from, subject, to, content) #always the same

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY']) #always the same
    response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
    puts response.status_code #always the same
    puts response.body #always the same
    puts response.headers #always the same
    "Hi, #{first_name}! Your request has been submitted."
  end

  def request_confirmed(first_name,email)
    from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
    to = Email.new(email: email)  #changes
    subject = 'Sending with SendGrid is Fun'  #changes
    content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby') #changes
    mail = Mail.new(from, subject, to, content) #always the same

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY']) #always the same
    response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
    puts response.status_code #always the same
    puts response.body #always the same
    puts response.headers #always the same
    "Hi, #{first_name}! You have accepted booking request."
  end

  def request_accepted(first_name,email)
    from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
    to = Email.new(email: email)  #changes
    subject = 'Sending with SendGrid is Fun'  #changes
    content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby') #changes
    mail = Mail.new(from, subject, to, content) #always the same

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY']) #always the same
    response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
    puts response.status_code #always the same
    puts response.body #always the same
    puts response.headers #always the same
    "Hi, #{first_name}! Your booking request has been accepted."
  end

  def request_denied(first_name,email)
    from = Email.new(email: 'majestic.makers.bnb@gmail.com') #always the same
    to = Email.new(email: email)  #changes
    subject = 'Sending with SendGrid is Fun'  #changes
    content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby') #changes
    mail = Mail.new(from, subject, to, content) #always the same

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY']) #always the same
    response = sg.client.mail._('send').post(request_body: mail.to_json) #always the same
    puts response.status_code #always the same
    puts response.body #always the same
    puts response.headers #always the same
    "Hi, #{first_name}! Your booking request has been denied."
  end
end