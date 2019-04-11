require 'sendgrid-ruby'
require './helper/email_helper.rb'
# require './helper/email_helper_private.rb'
include SendGrid

class EmailSender
  def sign_up(first_name,email)
    signup_helper(first_name,email)
    "Hi, #{first_name}! You have signed up."    
  end

  def new_listing(first_name,email)
    newlist_helper(first_name,email)
    "Hi, #{first_name}! You have created a new listing."    
  end

  def update_listing(first_name,email)
    update_list_helper(first_name,email)
    "Hi, #{first_name}! Your listing has been updated."    
  end

  def request_received_by_host(first_name,email)
    request_received_helper(first_name,email)
    "Hi, #{first_name}! You have received a request to book your space."
  end

  def request_made_by_guest(first_name,email)
    request_made_helper(first_name,email)
    "Hi, #{first_name}! Your request has been submitted."
  end

  def request_confirmed(first_name,email)
    request_confirmed_helper(first_name,email)
    "Hi, #{first_name}! You have accepted booking request."
  end

  def request_accepted(first_name,email)
    request_accepted_helper(first_name,email)
    "Hi, #{first_name}! Your booking request has been accepted."
  end

  def request_denied(first_name,email)
    request_denied_helper(first_name,email)
    "Hi, #{first_name}! Your booking request has been denied."
  end
end