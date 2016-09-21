
require 'json'
require_relative '../../lib/all'
require_relative '../../app/helpers/all'
require_relative '../../app/lib/all'
require_relative '../../app/models/all'

class ApplicationController < ActionController::Base

  protect_from_forgery

end
