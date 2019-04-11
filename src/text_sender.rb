require 'twilio-ruby'
require_relative '../helper/text_helper.rb'

class TextSender

  def request_made
    text_helper

    @client.messages.create(
      from: @from,
      to: @to,
      body: 'Your request has been submitted'
      )
      'Your request has been submitted'
  end

  def request_accepted
    text_helper

    @client.messages.create(
      from: @from,
      to: @to,
      body: 'Your request has been accepted'
      )
    'Your request has been accepted'
  end

  def request_denied
    text_helper

    @client.messages.create(
      from: @from,
      to: @to,
      body: 'Your request has been denied'
      )
    'Your request has been denied'
  end

end
