require 'net/http'


class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    uri = URI('https://raw.githubusercontent.com/iRaul/web-tweeps/master/README.md')
    markdown = Net::HTTP.get(uri)
    @result = markdown.scan(/\| (.*?)\. \|/).map { |x| x.first.split("|") }
    # binding.pry
    render template: 'index'
  end

end
